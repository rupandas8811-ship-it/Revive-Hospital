(function () {
  "use strict";

  const config = window.REVIVE_LANDING_CONFIG || {};
  const form = document.getElementById("appointment-form");
  const statusBox = document.getElementById("form-status");
  const submitButton = document.getElementById("submit-button");
  const consentBanner = document.getElementById("consent-banner");
  const consentKey = "revive-optional-measurement-choice";
  let consentChoice = readConsent();
  let analyticsReady = false;

  const conditionSelect = document.getElementById("condition");
  const nameInput = document.getElementById("patient-name");
  const mobileInput = document.getElementById("mobile-number");
  const dateInput = document.getElementById("preferred-date");

  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
  if (dateInput) dateInput.min = localDateString(new Date());

  function getDrawerElements() {
    return {
      sideDrawer: document.getElementById("side-drawer"),
      sideBackdrop: document.getElementById("side-drawer-backdrop"),
      menuToggles: document.querySelectorAll(".menu-toggle, [data-open-drawer]"),
      sideCloseBtn: document.getElementById("side-drawer-close")
    };
  }

  function openDrawer() {
    const els = getDrawerElements();
    if (els.sideDrawer) {
      els.sideDrawer.classList.add("is-open");
      els.sideDrawer.setAttribute("aria-hidden", "false");
    }
    if (els.sideBackdrop) {
      els.sideBackdrop.classList.add("is-open");
      els.sideBackdrop.setAttribute("aria-hidden", "false");
    }
    document.body.classList.add("drawer-open");
    els.menuToggles.forEach(function (btn) {
      btn.setAttribute("aria-expanded", "true");
    });
    if (els.sideCloseBtn) {
      setTimeout(function () {
        try { els.sideCloseBtn.focus(); } catch (e) {}
      }, 60);
    }
  }

  function closeDrawer() {
    const els = getDrawerElements();
    if (els.sideDrawer) {
      els.sideDrawer.classList.remove("is-open");
      els.sideDrawer.setAttribute("aria-hidden", "true");
    }
    if (els.sideBackdrop) {
      els.sideBackdrop.classList.remove("is-open");
      els.sideBackdrop.setAttribute("aria-hidden", "true");
    }
    document.body.classList.remove("drawer-open");
    els.menuToggles.forEach(function (btn) {
      btn.setAttribute("aria-expanded", "false");
    });
  }

  function toggleDrawer() {
    const sideDrawer = document.getElementById("side-drawer");
    const isOpen = sideDrawer && sideDrawer.classList.contains("is-open");
    if (isOpen) closeDrawer();
    else openDrawer();
  }

  // Reliable Event Delegation for All Drawer Interactions across Desktop, Tablet & Mobile
  document.addEventListener("click", function (e) {
    const toggleBtn = e.target.closest(".menu-toggle, [data-open-drawer]");
    if (toggleBtn) {
      e.preventDefault();
      e.stopPropagation();
      toggleDrawer();
      return;
    }

    const closeBtn = e.target.closest(".side-drawer-close, [data-close-drawer]");
    if (closeBtn) {
      e.preventDefault();
      e.stopPropagation();
      closeDrawer();
      return;
    }

    if (e.target.matches("#side-drawer-backdrop, .side-drawer-backdrop")) {
      e.preventDefault();
      e.stopPropagation();
      closeDrawer();
      return;
    }

    const drawerLink = e.target.closest(".side-drawer a, #side-drawer a");
    if (drawerLink) {
      const href = drawerLink.getAttribute("href");
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const targetId = href.slice(1);
        const targetElement = document.getElementById(targetId) ||
          (targetId === "why-revive" ? document.getElementById("care-options") : null) ||
          (targetId === "care-options" ? document.getElementById("why-revive") : null) ||
          (targetId === "specialist" ? document.getElementById("why-revive") : null);

        closeDrawer();

        if (targetElement) {
          setTimeout(function () {
            targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
            try {
              history.pushState(null, "", href);
            } catch (err) {
              location.hash = href;
            }
          }, 80);
        } else {
          try {
            history.pushState(null, "", href);
          } catch (err) {
            location.hash = href;
          }
        }
        return;
      }

      // Close mobile/desktop drawer on external link or page transition
      closeDrawer();
    }
  });

  window.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      const sideDrawer = document.getElementById("side-drawer");
      if (sideDrawer && sideDrawer.classList.contains("is-open")) {
        closeDrawer();
      }
    }
  });

  // A whitelisted condition may preselect the enquiry form. Strip that value from the
  // address bar immediately so optional measurement never receives it as a URL.
  const query = new URLSearchParams(window.location.search);
  const requestedCondition = (query.get("condition") || "").toLowerCase();
  const allowedConditions = ["piles", "fissure", "fistula", "gallstones", "hernia", "appendix", "varicose", "varicose-veins", "diabetic", "diabetic-foot", "other"];
  if (allowedConditions.includes(requestedCondition)) conditionSelect.value = requestedCondition;
  if (query.has("condition")) {
    query.delete("condition");
    const cleanSearch = query.toString();
    window.history.replaceState({}, "", window.location.pathname + (cleanSearch ? "?" + cleanSearch : "") + window.location.hash);
  }

  document.querySelectorAll("[data-prefill]").forEach(function (link) {
    link.addEventListener("click", function () {
      const requested = link.getAttribute("data-prefill");
      if (allowedConditions.includes(requested)) conditionSelect.value = requested;
    });
  });

  document.querySelectorAll('[data-track="call"], [data-track="whatsapp"]').forEach(function (link) {
    link.addEventListener("click", function () {
      const channel = link.getAttribute("data-track");
      recordContactClick(channel);
    });
  });

  if (consentBanner) {
    if (consentChoice === "granted") enableOptionalMeasurement();
    else if (!consentChoice) consentBanner.hidden = false;
  }

  const consentAllowBtn = document.getElementById("consent-allow");
  if (consentAllowBtn) {
    consentAllowBtn.addEventListener("click", function () {
      saveConsent("granted");
      if (consentBanner) consentBanner.hidden = true;
      enableOptionalMeasurement();
    });
  }

  const consentDenyBtn = document.getElementById("consent-deny");
  if (consentDenyBtn) {
    consentDenyBtn.addEventListener("click", function () {
      saveConsent("denied");
      if (consentBanner) consentBanner.hidden = true;
    });
  }

  function readConsent() {
    try { return window.localStorage.getItem(consentKey); }
    catch (error) { return null; }
  }

  function saveConsent(value) {
    consentChoice = value;
    try { window.localStorage.setItem(consentKey, value); }
    catch (error) { /* Measurement still follows the choice for this page view. */ }
  }

  function cleanPageLocation() {
    return window.location.origin + window.location.pathname;
  }

  function enableOptionalMeasurement() {
    if (analyticsReady || consentChoice !== "granted") return;
    const gaId = String(config.googleAnalyticsMeasurementId || "").trim();
    const adsId = String(config.googleAdsConversionId || "").trim();
    if (!gaId && !adsId) return;

    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () { window.dataLayer.push(arguments); };
    window.gtag("js", new Date());
    window.gtag("consent", "default", {
      ad_storage: "denied",
      analytics_storage: "denied",
      ad_user_data: "denied",
      ad_personalization: "denied"
    });

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(gaId || adsId);
    document.head.appendChild(script);

    const safeConfig = {
      send_page_view: false,
      page_location: cleanPageLocation(),
      page_referrer: "",
      allow_google_signals: false,
      allow_ad_personalization_signals: false
    };
    if (gaId) window.gtag("config", gaId, safeConfig);
    if (adsId) window.gtag("config", adsId, safeConfig);
    window.gtag("consent", "update", {
      analytics_storage: gaId ? "granted" : "denied",
      ad_storage: adsId ? "granted" : "denied",
      ad_user_data: "denied",
      ad_personalization: "denied"
    });
    analyticsReady = true;
  }

  function recordContactClick(channel) {
    if (consentChoice !== "granted") return;
    const detail = { channel: channel };
    document.dispatchEvent(new CustomEvent("revive:contact-click", { detail: detail }));
    if (analyticsReady && window.gtag) {
      window.gtag("event", "contact_click", {
        contact_method: channel,
        page_location: cleanPageLocation(),
        page_referrer: ""
      });
    }
  }

  function recordAcceptedEnquiry(id) {
    if (consentChoice !== "granted") return;
    if (!rememberOnce("revive_sent_enquiries", id)) return;
    if (analyticsReady && window.gtag && config.googleAdsConversionId && config.googleAdsLeadConversionLabel) {
      window.gtag("event", "conversion", {
        send_to: String(config.googleAdsConversionId) + "/" + String(config.googleAdsLeadConversionLabel),
        transaction_id: id,
        page_location: cleanPageLocation(),
        page_referrer: ""
      });
    }
    if (analyticsReady && window.gtag && config.googleAnalyticsMeasurementId) {
      window.gtag("event", "appointment_enquiry_submitted", {
        transaction_id: id,
        page_location: cleanPageLocation(),
        page_referrer: ""
      });
    }
    document.dispatchEvent(new CustomEvent("revive:appointment-submitted", { detail: { id: id } }));
  }

  function rememberOnce(storageKey, id) {
    try {
      const saved = JSON.parse(window.sessionStorage.getItem(storageKey) || "[]");
      if (saved.includes(id)) return false;
      saved.push(id);
      window.sessionStorage.setItem(storageKey, JSON.stringify(saved.slice(-50)));
    } catch (error) {
      // If storage is unavailable, the in-memory submission flow still fires once.
    }
    return true;
  }

  function localDateString(date) {
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");
    return year + "-" + month + "-" + day;
  }

  function normalizeMobile(value) {
    const digits = String(value || "").replace(/\D/g, "");
    if (digits.length === 10) return "+91" + digits;
    if (digits.length === 11 && digits.charAt(0) === "0") return "+91" + digits.slice(1);
    if (digits.length === 12 && digits.slice(0, 2) === "91") return "+" + digits;
    return "";
  }

  function showStatus(message, kind) {
    statusBox.textContent = message;
    statusBox.className = "form-status is-visible is-" + kind;
  }

  function clearStatus() {
    statusBox.textContent = "";
    statusBox.className = "form-status";
  }

  function validateForm() {
    const cleanName = nameInput.value.trim();
    nameInput.setCustomValidity(cleanName.length >= 2 ? "" : "Please enter your name.");
    const mobile = normalizeMobile(mobileInput.value);
    mobileInput.setCustomValidity(mobile ? "" : "Enter a valid 10-digit Indian mobile number, with or without +91.");

    document.getElementById("name-error").textContent = nameInput.validity.valid ? "" : "Please enter your name.";
    document.getElementById("mobile-error").textContent = mobileInput.validity.valid ? "" : "Enter a valid 10-digit Indian mobile number, with or without +91.";
    nameInput.setAttribute("aria-invalid", String(!nameInput.validity.valid));
    mobileInput.setAttribute("aria-invalid", String(!mobileInput.validity.valid));
    conditionSelect.setAttribute("aria-invalid", String(!conditionSelect.validity.valid));

    if (!form.checkValidity()) {
      showStatus("Please complete the required fields and check your mobile number and contact consent.", "error");
      const firstInvalid = form.querySelector(":invalid");
      if (firstInvalid) firstInvalid.focus();
      return null;
    }
    return { name: cleanName, mobile: mobile };
  }

  const formFields = [nameInput, mobileInput, conditionSelect, document.getElementById("contact-consent")].filter(Boolean);
  formFields.forEach(function (field) {
    field.addEventListener("input", function () {
      if (field === nameInput || field === mobileInput) validateField(field);
      if (statusBox && statusBox.classList.contains("is-error")) clearStatus();
    });
    field.addEventListener("change", function () {
      if (statusBox && statusBox.classList.contains("is-error")) clearStatus();
      if (field === conditionSelect) conditionSelect.setAttribute("aria-invalid", String(!conditionSelect.validity.valid));
    });
  });

  function validateField(field) {
    if (field === nameInput) {
      field.setCustomValidity(field.value.trim().length >= 2 ? "" : "Please enter your name.");
      field.setAttribute("aria-invalid", String(!field.validity.valid));
      const errEl = document.getElementById("name-error");
      if (errEl) errEl.textContent = field.validity.valid ? "" : "Please enter your name.";
    }
    if (field === mobileInput) {
      field.setCustomValidity(normalizeMobile(field.value) ? "" : "Enter a valid 10-digit Indian mobile number, with or without +91.");
      field.setAttribute("aria-invalid", String(!field.validity.valid));
      const errEl = document.getElementById("mobile-error");
      if (errEl) errEl.textContent = field.validity.valid ? "" : "Enter a valid 10-digit Indian mobile number, with or without +91.";
    }
  }

  if (form) {
    form.addEventListener("submit", async function (event) {
    event.preventDefault();
    clearStatus();
    const validated = validateForm();
    if (!validated) return;

    // Consultation form submission: redirect to business WhatsApp with prefilled consultation details
    const isWhatsAppDestination = true;

    if (isWhatsAppDestination) {
      const emailField = document.getElementById("email-address");
      const messageField = document.getElementById("message-text");

      const nameVal = validated.name;
      const mobileVal = mobileInput ? mobileInput.value.trim() : "";
      const emailVal = emailField ? emailField.value.trim() : "";
      const messageVal = messageField ? messageField.value.trim() : "";
      const dateVal = dateInput ? dateInput.value.trim() : "";
      const conditionVal = conditionSelect && conditionSelect.value && conditionSelect.options[conditionSelect.selectedIndex] ? conditionSelect.options[conditionSelect.selectedIndex].text : "";

      const treatmentName = form.getAttribute("data-treatment-name") || conditionVal || (window.location.pathname.includes("appendix") ? "Appendix Treatment" : "Specialist Medical Consultation");
      const waNumber = form.getAttribute("data-whatsapp-number") || "919429690479";

      const messageParts = [
        "Hello, I would like to request a consultation for " + treatmentName + ".",
        "",
        "Name: " + nameVal,
        "Mobile Number: " + mobileVal
      ];

      if (emailField && emailVal) {
        messageParts.push("Email: " + emailVal);
      }

      messageParts.push("Treatment: " + treatmentName);

      if (dateVal) {
        messageParts.push("Preferred Date: " + dateVal);
      }

      if (messageField && messageVal) {
        messageParts.push("Message: " + messageVal);
      }

      messageParts.push("");
      messageParts.push("Please contact me regarding my consultation request.");

      const fullMessage = messageParts.join("\n");
      const waUrl = "https://wa.me/" + waNumber + "?text=" + encodeURIComponent(fullMessage);

      recordContactClick("whatsapp");
      recordAcceptedEnquiry(createSubmissionId());

      statusBox.innerHTML = 'Redirecting to WhatsApp with your consultation details… If not opened automatically, <a href="' + waUrl + '" target="_blank" rel="noopener noreferrer" style="color:var(--blue);font-weight:700;text-decoration:underline;">click here to open WhatsApp</a>.';
      statusBox.className = "form-status is-visible is-success";

      // Redirect cleanly across desktop and mobile devices
      setTimeout(function () {
        try {
          const win = window.open(waUrl, "_blank");
          if (!win || win.closed || typeof win.closed === "undefined") {
            window.location.href = waUrl;
          }
        } catch (e) {
          window.location.href = waUrl;
        }
      }, 350);

      return;
    }

    const endpoint = String(config.appointmentEndpoint || "").trim();
    if (!endpoint) {
      showStatus("Online appointment requests are not enabled on this page yet. Please call the hospital at 089510 16007 to enquire.", "error");
      return;
    }

    let endpointUrl;
    try {
      endpointUrl = new URL(endpoint, window.location.href);
      const localHost = ["localhost", "127.0.0.1"].includes(endpointUrl.hostname);
      if (endpointUrl.protocol !== "https:" && !(localHost && endpointUrl.protocol === "http:")) throw new Error("Use a secure HTTPS endpoint.");
    } catch (error) {
      showStatus("The appointment service is not configured securely. Please call the hospital at 089510 16007.", "error");
      return;
    }

    const submissionId = createSubmissionId();
    const payload = {
      name: validated.name,
      mobile: validated.mobile,
      condition: conditionSelect.value,
      preferred_date: dateInput.value || null,
      contact_consent: true,
      idempotency_key: submissionId,
      source: "revive-healthcare-landing-page"
    };

    submitButton.disabled = true;
    submitButton.setAttribute("aria-busy", "true");
    submitButton.innerHTML = "Sending enquiry <span aria-hidden=\"true\">…</span>";
    showStatus("Sending your enquiry securely…", "loading");

    const controller = new AbortController();
    const timeoutId = window.setTimeout(function () { controller.abort(); }, 15000);
    try {
      const response = await fetch(endpointUrl.toString(), {
        method: "POST",
        headers: { "Content-Type": "application/json", "Accept": "application/json" },
        body: JSON.stringify(payload),
        credentials: "omit",
        cache: "no-store",
        redirect: "error",
        signal: controller.signal
      });
      const result = await response.json().catch(function () { return null; });
      const accepted = response.ok && result && (result.ok === true || result.success === true || result.status === "accepted");
      if (!accepted) throw new Error("not-accepted");

      recordAcceptedEnquiry(submissionId);
      form.reset();
      conditionSelect.setAttribute("aria-invalid", "false");
      nameInput.setAttribute("aria-invalid", "false");
      mobileInput.setAttribute("aria-invalid", "false");
      document.getElementById("name-error").textContent = "";
      document.getElementById("mobile-error").textContent = "";
      showStatus("Thank you. Your enquiry was submitted to the hospital. The team will contact you about next steps.", "success");
    } catch (error) {
      showStatus("We could not submit your enquiry. No confirmation has been recorded. Please call the hospital at 089510 16007 or try again later.", "error");
    } finally {
      window.clearTimeout(timeoutId);
      submitButton.disabled = false;
      submitButton.removeAttribute("aria-busy");
      submitButton.innerHTML = "Request an Appointment <span aria-hidden=\"true\">→</span>";
    }
  });
  }

  function createSubmissionId() {
    if (window.crypto && typeof window.crypto.randomUUID === "function") return window.crypto.randomUUID();
    return "rv-" + Date.now().toString(36) + "-" + Math.random().toString(36).slice(2, 12);
  }

  // Smooth scroll-reveal trigger
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.1 });
    document.querySelectorAll(".reveal-on-scroll").forEach(function (el) {
      observer.observe(el);
    });
  } else {
    document.querySelectorAll(".reveal-on-scroll").forEach(function (el) {
      el.classList.add("is-revealed");
    });
  }
})();
