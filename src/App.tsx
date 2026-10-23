import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { HomePage } from './components/HomePage';
import { ConditionLandingPage } from './components/ConditionLandingPage';
import { Footer } from './components/Footer';
import { StickyFooter } from './components/StickyFooter';
import { SuccessModal, PrivacyModal } from './components/Modals';
import { CONDITIONS } from './data/hospitalData';
import { AppointmentFormData } from './types';

function AppContent() {
  const [successData, setSuccessData] = useState<AppointmentFormData | null>(null);
  const [privacyOpen, setPrivacyOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpenBooking = (condition?: string) => {
    if (condition) {
      const condObj = CONDITIONS.find(c => c.name.toLowerCase().includes(condition.toLowerCase()));
      if (condObj) {
        if (condObj.id === 'piles') navigate('/piles-treatment/');
        else if (condObj.id === 'fissure') navigate('/fissure-treatment/');
        else if (condObj.id === 'fistula') navigate('/fistula-treatment/');
        else if (condObj.id === 'gallstones') navigate('/gallstones-treatment/');
        else if (condObj.id === 'hernia') navigate('/hernia-treatment/');
        return;
      }
    }
    const element = document.getElementById('consultation-form');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/piles-treatment/');
    }
  };

  const handleBookingSuccess = (data: AppointmentFormData) => {
    setSuccessData(data);
  };

  const pilesCondition = CONDITIONS.find(c => c.id === 'piles') || CONDITIONS[0];
  const fissureCondition = CONDITIONS.find(c => c.id === 'fissure') || CONDITIONS[1];
  const fistulaCondition = CONDITIONS.find(c => c.id === 'fistula') || CONDITIONS[2];
  const gallstonesCondition = CONDITIONS.find(c => c.id === 'gallstones') || CONDITIONS[3];
  const herniaCondition = CONDITIONS.find(c => c.id === 'hernia') || CONDITIONS[4];

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#202B3C] font-sans">
      <Navbar onOpenBooking={handleOpenBooking} />

      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage onOpenBooking={handleOpenBooking} />} />
          <Route path="/piles-treatment/" element={<ConditionLandingPage condition={pilesCondition} onOpenBooking={handleOpenBooking} onSuccess={handleBookingSuccess} />} />
          <Route path="/fissure-treatment/" element={<ConditionLandingPage condition={fissureCondition} onOpenBooking={handleOpenBooking} onSuccess={handleBookingSuccess} />} />
          <Route path="/fistula-treatment/" element={<ConditionLandingPage condition={fistulaCondition} onOpenBooking={handleOpenBooking} onSuccess={handleBookingSuccess} />} />
          <Route path="/gallstones-treatment/" element={<ConditionLandingPage condition={gallstonesCondition} onOpenBooking={handleOpenBooking} onSuccess={handleBookingSuccess} />} />
          <Route path="/hernia-treatment/" element={<ConditionLandingPage condition={herniaCondition} onOpenBooking={handleOpenBooking} onSuccess={handleBookingSuccess} />} />
        </Routes>
      </main>

      <Footer onOpenPrivacy={() => setPrivacyOpen(true)} />
      <StickyFooter onOpenBooking={handleOpenBooking} />

      <SuccessModal data={successData} onClose={() => setSuccessData(null)} />
      <PrivacyModal isOpen={privacyOpen} onClose={() => setPrivacyOpen(false)} />
    </div>
  );
}

export default function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}
