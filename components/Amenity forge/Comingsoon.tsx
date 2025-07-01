"use client"

import { useEffect, useState } from "react";
import Head from "next/head";
import { FaTwitter, FaFacebook, FaGooglePlus, FaGithub, FaDribbble } from "react-icons/fa";

export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  useEffect(() => {
    const calculateTimeLeft = () => {
      const deadlineDate = new Date('July 15, 2025 11:59:59').getTime();
      const currentDate = new Date().getTime();
      const distance = deadlineDate - currentDate;

      setTimeLeft({
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      });
    };

    const timer = setInterval(calculateTimeLeft, 1000);
    calculateTimeLeft(); // Initial call

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Head>
        <title>Coming Soon</title>
        <meta name="description" content="Our website is under construction" />
      </Head>

      <div className="min-h-screen relative bg-black overflow-hidden">
        {/* Gold gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-yellow-600 opacity-20"></div>
        
        {/* Main content */}
        <main className="relative z-10 flex flex-col min-h-screen">
          {/* Header */}
          <header className="pt-8 text-center">
            {/* Add your logo here */}
            {/* <img src="/your-logo.png" alt="Logo" className="mx-auto h-16 w-auto" /> */}
          </header>

          {/* Center content */}
          <div className="flex-grow flex flex-col items-center justify-center px-4 text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-yellow-600">
              COMING SOON!
            </h1>

            {/* Countdown */}
            <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-12">
              <div className="countdown-item">
                <div className="text-3xl md:text-5xl font-bold text-yellow-400">{timeLeft.days}</div>
                <span className="text-sm md:text-base text-yellow-300">Days</span>
              </div>
              
              <div className="countdown-item">
                <div className="text-3xl md:text-5xl font-bold text-yellow-400">{timeLeft.hours}</div>
                <span className="text-sm md:text-base text-yellow-300">Hours</span>
              </div>
              
              <div className="countdown-item">
                <div className="text-3xl md:text-5xl font-bold text-yellow-400">{timeLeft.minutes}</div>
                <span className="text-sm md:text-base text-yellow-300">Minutes</span>
              </div>
              
              <div className="countdown-item">
                <div className="text-3xl md:text-5xl font-bold text-yellow-400">{timeLeft.seconds}</div>
                <span className="text-sm md:text-base text-yellow-300">Seconds</span>
              </div>
            </div>

            <p className="max-w-md mx-auto text-lg mb-8">
              Our Product is under construction. We'll be here soon<br />
            </p>

            
          </div>

          {/* Footer */}
      
        </main>
      </div>

      <style jsx>{`
        .countdown-item {
          min-width: 80px;
          position: relative;
        }
        .countdown-item span:before {
          content: '';
          position: absolute;
          top: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 20px;
          height: 1px;
          background: linear-gradient(to right, #f59e0b, #d97706);
        }
      `}</style>
    </>
  );
}