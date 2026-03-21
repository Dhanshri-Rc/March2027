import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import AboutSIARE from './components/AboutSIARE';
import AboutConference from './components/AboutConference';
import Objectives from './components/Objectives';
import Tracks from './components/Tracks';
import Submission from './components/Submission';
import SubmissionProcess from './components/SubmissionProcess';
import PlagiarismPolicy from './components/PlagiarismPolicy';
import Registration from './components/Registration';
import Publications from './components/Publications';
import ImportantDates from './components/ImportantDates';
import SubmitPaperModal from './components/SubmitPaperModal';
import Footer from './components/Footer';
import './styles/global.css';
import Contact from './components/Contact';


export default function App() {
  const [submitOpen, setSubmitOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <div className="app">
      <Navbar scrolled={scrolled} onSubmit={() => setSubmitOpen(true)} />
      <Hero onSubmit={() => setSubmitOpen(true)} />
      <main>
        <AboutSIARE />
        <AboutConference />
        <Objectives />
        <Tracks />
        <Submission />
        <SubmissionProcess />
        <PlagiarismPolicy />
        <Registration onSubmit={() => setSubmitOpen(true)} />
        <Publications />
        <ImportantDates onSubmit={() => setSubmitOpen(true)} />
          <Contact/>
      </main>
      <Footer />
      {submitOpen && <SubmitPaperModal onClose={() => setSubmitOpen(false)} />}
    </div>
  );
}
