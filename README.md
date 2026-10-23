# Revive Healthcare Hospital landing page

This is a standalone, mobile-first landing page for appointment enquiries about piles, fissure, fistula, gallstones and hernia. It uses the hospital logo served from the official site and the blue, red and pale-blue palette specified in the brief.

## Preview

Open `index.html` in a browser or serve this folder as a static site. The page has no package dependencies. The hero consultation graphic is an original illustration and does not depict hospital staff or a patient.

## Before publishing

1. Add an HTTPS appointment endpoint in `config.js`. Do not put CRM credentials, API keys or private tokens in frontend files. The endpoint should validate all fields server-side, apply rate limits and abuse protection, securely store or forward the enquiry, and deduplicate `idempotency_key` values. It must return JSON such as `{"ok":true}` only after the enquiry is accepted. The page will not show success or count a conversion when the endpoint is missing, rejects the request, or does not return an explicit accepted response.
2. Confirm the live phone, address, email, map destination, doctor listing, appointment availability and emergency instructions with the hospital. The values used here were read from [Revive Healthcare Hospital’s official website](https://www.revivehealthcarehospital.in/). It lists 089517 70060, info@revivehealthcare.com, the Bengaluru address shown on the page, 24/7 emergency care and ambulance number 108.
3. Supply a verified doctor photograph if the specialist card is to remain. The official site lists Dr. Raju S.R.H. as a Proctologist for Piles, Fissure and Fistula and gives the qualifications shown here; no verified profile photo was available on the page when reviewed. The visible placeholder must be replaced before publication.
4. Replace the Privacy Notice link with the hospital’s approved privacy policy URL and confirm whether terms of use are required. The official site’s footer displayed those labels but did not expose working policy destinations.
5. Confirm the enquiry-retention period, staff access, consent wording, data processor and applicable privacy requirements with the hospital before collecting patient details.

## Enquiry integration

Set `appointmentEndpoint` in `config.js` to a same-origin route or HTTPS server endpoint. The browser sends only the form fields, contact-consent state, a random idempotency key and a generic source label. The condition and contact details are never passed to Google or another advertising platform by this page. Do not forward medical form details to ad platforms, analytics properties, URL parameters or logs.

The endpoint should accept `POST` JSON with these fields:

```json
{
  "name": "Patient name",
  "mobile": "+91XXXXXXXXXX",
  "condition": "piles",
  "preferred_date": null,
  "contact_consent": true,
  "idempotency_key": "random-unique-id",
  "source": "revive-healthcare-landing-page"
}
```

Return an explicit accepted JSON response, for example `{"ok":true}`. Configure CORS narrowly if the endpoint is on another origin. A front-end success view is shown only for a successful HTTP response with an explicit `ok`, `success` or `status: "accepted"` field.

## Measurement

Optional Google measurement is off until a visitor opts in. Add the relevant public Google Analytics and Google Ads IDs and the lead conversion label to `config.js`. The code sends generic contact-click events with only the channel name and sends a lead conversion only after the endpoint accepts an enquiry. It does not send the selected condition, name, phone number, form values or the condition query parameter. It disables page-view collection, Google signals and ad personalization in the tag configuration; do not add enhanced conversions, remarketing audiences, customer match or similar audience features to this health-related page without confirming policy eligibility.

Meta Pixel is intentionally not loaded on this condition-specific healthcare page. Review the current Meta Business Tools terms and the website’s health category with Meta before adding a Meta integration; a consent banner alone does not establish that health-related event data may be shared. Google classifies conditions involving bowel health and treatment information as sensitive for personalized advertising; see [Google’s health personalized-advertising policy](https://support.google.com/adspolicy/answer/16701855?hl=en). This page is suitable as a destination for factual ad traffic, but the account’s campaign targeting and conversion setup still need their own policy review.

## Verified reference

- [Official hospital website](https://www.revivehealthcarehospital.in/)
- [Official doctor listing](https://www.revivehealthcarehospital.in/#doctors)
- [Official hospital logo image](https://www.revivehealthcarehospital.in/revive-icon.jpeg)
- [Official map link](https://maps.app.goo.gl/z4ZbbSXu9AphCkNp7)
