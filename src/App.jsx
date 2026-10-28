import './App.css';
import { Routes, Route, HashRouter } from 'react-router-dom';
import { useEffect } from 'react';
import React from 'react';
import 'aos/dist/aos.css';
import AOS from 'aos';
import Lenis from 'lenis';
import 'lenis/dist/lenis.css';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Home from './components/Home';

// Ensure ScrollTrigger is registered
gsap.registerPlugin(ScrollTrigger);

function App() {
  useEffect(() => {
    // 1. Initialize AOS animation library
    AOS.init({
      duration: 1200,
      easing: 'ease-in-out',
      once: false,
    });

    // 2. Initialize Lenis Smooth Scroll
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      orientation: 'vertical',
      gestureOrientation: 'vertical',
      smoothWheel: true,
      wheelMultiplier: 1,
      touchMultiplier: 2,
    });

    // 3. Synchronize Lenis scroll events with GSAP ScrollTrigger & AOS
    lenis.on('scroll', () => {
      ScrollTrigger.update();
      AOS.refresh();
    });

    // 4. Synchronize Lenis raf loop with GSAP ticker for a single unified animation loop
    const updateTicker = (time) => {
      lenis.raf(time * 1000);
    };
    gsap.ticker.add(updateTicker);

    // Disable GSAP lag smoothing to prevent stuttering during smooth scrolling
    gsap.ticker.lagSmoothing(0);

    // 5. Smooth scroll internal anchor links seamlessly with Lenis
    const handleAnchorClick = (e) => {
      const anchor = e.target.closest('a[href^="#"]');
      if (!anchor) return;
      const href = anchor.getAttribute('href');
      if (href && href.startsWith('#') && href.length > 1) {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          lenis.scrollTo(target, { offset: -20, duration: 1.2 });
        }
      }
    };
    document.addEventListener('click', handleAnchorClick);

    // Refresh ScrollTrigger to ensure accurate positions after initialization
    ScrollTrigger.refresh();

    return () => {
      document.removeEventListener('click', handleAnchorClick);
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
    };
  }, []);

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element={<Home />} />
      </Routes>
    </HashRouter>
  );
}

export default App;


