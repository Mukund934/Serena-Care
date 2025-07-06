'use client';

import { useEffect, useState } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const [index, setIndex] = useState(0);
  const [years, setYears] = useState(0);
  const [sessions, setSessions] = useState(0);

  const texts = [
    'Greater Peace in Your Heart',
    'Greater Love in Your Relationships',
    'Greater Purpose in Your Life Direction',
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // 👇 Animate the counters on mount
  useEffect(() => {
    const animateValue = (start: number, end: number, duration: number, setter: (val: number) => void) => {
      const range = end - start;
      let startTime: number | null = null;

      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setter(Math.floor(progress * range + start));
        if (progress < 1) requestAnimationFrame(step);
      };

      requestAnimationFrame(step);
    };

    animateValue(0, 40, 2000, setYears);        // 2s for years
    animateValue(0, 45000, 2500, setSessions);  // 2.5s for sessions
  }, []);

  return (
    <>
      <section
        id="home"
        className="relative min-h-screen flex items-center justify-center text-white"
      >
        {/* Background image and overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('/Images/f4567f92-aa18-4bec-ab50-ae724d3c5467.png')",
          }}
        >
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-4xl">
          <p className="text-sm sm:text-base text-white/80 mb-3">
            Christian Counseling Services in Richmond & Central Virginia
          </p>

          <h1 className="text-3xl sm:text-5xl font-bold mb-6 leading-tight">
            Professional Counseling for Christian Healing and Growth
          </h1>

          <h2 className="text-base sm:text-xl font-light mb-10 text-white/90">
            Begin your journey today towards spiritual growth, deeper relationships,
            <br />
            and lasting inner peace.
          </h2>

          {/* Rotating text animation */}
          <div className="mb-8 mt-[-0.5rem]">
            <p className="text-base sm:text-lg font-semibold text-white">
              I want to work with you for...
            </p>
            <div className="relative mt-2 h-12 overflow-hidden flex justify-center items-center">
              <AnimatePresence mode="wait">
                <motion.div
                  key={index}
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -40, opacity: 0 }}
                  transition={{ duration: 0.6, ease: 'easeInOut' }}
                  className="absolute"
                >
                  <p className="text-lg sm:text-xl font-semibold text-[#bdd7e3]">
                    💖 {texts[index]}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Badges */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-2 sm:space-y-0 sm:space-x-4 text-sm mb-8 text-white/90 font-medium">
            <span>⭐ Top Rated</span>
            <span className="hidden sm:inline">•</span>
            <span>40+ Years Experience</span>
            <span className="hidden sm:inline">•</span>
            <span className="underline cursor-pointer">Testimonials</span>
            <span className="hidden sm:inline">•</span>
            <span className="underline cursor-pointer">Media Mentions</span>
          </div>

          {/* CTA Button */}
          <Button
            onClick={scrollToContact}
            size="lg"
            className="bg-white text-teal-800 hover:bg-gray-100 px-8 py-3 text-md sm:text-lg font-semibold rounded-full shadow-md transition-all duration-300"
          >
            ✨ Start Healing Today
          </Button>
        </div>
      </section>

      {/* 👇 Stats Section added below Hero */}
      <section className="bg-[#355c5f] text-white py-12 md:py-16">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 text-center md:text-left">
          <div>
            <h3 className="text-3xl font-bold mb-2">
              {years}+{/* Animated from 0 to 40 */}
            </h3>
            <p className="text-lg font-semibold">Years Experience</p>
            <p className="text-sm mt-1">
              Providing compassionate and effective Individual and Couples Therapy
            </p>
          </div>
          <div>
            <h3 className="text-3xl font-bold mb-2">
              {sessions.toLocaleString()}+{/* Animated from 0 to 45,000 */}
            </h3>
            <p className="text-lg font-semibold">Individual Client Sessions</p>
            <p className="text-sm mt-1">
              Helping individuals and couples heal, grow, and find purpose
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
