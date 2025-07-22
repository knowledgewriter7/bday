// src/pages/Home.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ For redirection
import confetti from 'canvas-confetti';
import Navbar from '../components/Navbar';
import './Home.css';

function Home() {
  const navigate = useNavigate();
  const [username] = useState('Gowthami');
  const [quote, setQuote] = useState('');

  const birthdayQuotes = [
    "Count your life by smiles, not tears.",
    "Another adventure-filled year awaits you!",
    "Age is merely the number of years the world has been enjoying you!",
    "Live your life and forget your age.",
    "Cheers to you for another trip around the sun!",
    "Let your dreams take flight this birthday!"
  ];

  useEffect(() => {
    // 🔐 Check login status
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn !== 'true') {
      navigate('/login');
      return;
    }

    // 🎉 Start confetti
    confetti({ particleCount: 200, spread: 100, origin: { y: 0.6 } });

    const confettiInterval = setInterval(() => {
      confetti({
        particleCount: 100,
        spread: 70,
        angle: Math.random() * 60 + 60,
        origin: { x: Math.random(), y: Math.random() * 0.6 }
      });
    }, 3000);

    const fireworksInterval = setInterval(() => {
      confetti({
        particleCount: 150,
        spread: 180,
        startVelocity: 30,
        decay: 0.92,
        scalar: 1,
        origin: { x: Math.random(), y: Math.random() * 0.4 }
      });
    }, 8000);

    const random = Math.floor(Math.random() * birthdayQuotes.length);
    setQuote(birthdayQuotes[random]);

    return () => {
      clearInterval(confettiInterval);
      clearInterval(fireworksInterval);
    };
  }, [navigate]);

  return (
    <>
      <Navbar />

      <div className="home-container">
        <div
          className="blurred-bg"
          style={{ backgroundImage: `url(/photo5.jpg)` }}
        />

        <div className="home-content">
          <h1>🎉 Happy Birthday {username}! 🎉</h1>
          <p className="wish">Wishing you joy, love, and success on your special day!</p>

          <div className="balloons">
            <span className="balloon balloon1">🎈</span>
            <span className="balloon balloon2">🎈</span>
            <span className="balloon balloon3">🎈</span>
            <span className="balloon balloon4">🎈</span>
            <span className="balloon balloon5">🎈</span>
          </div>

          <div className="photo-container">
            <img
              src="/photo4.jpg"
              alt="Birthday"
              className="main-photo"
            />
          </div>

          <p className="birthday-quote">
            <span className="emoji">🥳</span> {quote}
            <span className="sparkle sparkle-1">✨</span>
            <span className="sparkle sparkle-2">✨</span>
            <span className="sparkle sparkle-3">✨</span>
          </p>
        </div>
      </div>
    </>
  );
}

export default Home;
