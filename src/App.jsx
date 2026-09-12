import React, { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import PodcastProductionPage from './pages/PodcastProductionPage';
import VideoProductionPage from './pages/VideoProductionPage';
import BrandedContentPage from './pages/BrandedContentPage';
import WorkPage from './pages/WorkPage';
import PodcastsShowsPage from './pages/PodcastsShowsPage';
import VideoFilmsPage from './pages/VideoFilmsPage';
import ClientsPage from './pages/ClientsPage';
import ContactPage from './pages/ContactPage';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-studio-dark font-sans selection:bg-studio-purple selection:text-white">
      <ScrollToTop />
      <Header />
      <main className="flex-grow">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/services/podcast-production" element={<PodcastProductionPage />} />
          <Route path="/services/video-production" element={<VideoProductionPage />} />
          <Route path="/services/branded-content" element={<BrandedContentPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/podcasts" element={<PodcastsShowsPage />} />
          <Route path="/video-films" element={<VideoFilmsPage />} />
          <Route path="/clients" element={<ClientsPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
