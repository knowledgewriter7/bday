// src/pages/SpecialPage.js
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'; // ✅ Add this
import './SpecialPage.css';

function SpecialPage() {
  const [lifeCounter, setLifeCounter] = useState('');
  const navigate = useNavigate(); // ✅ Initialize navigate

  const dob = new Date('2005-07-21T00:00:00'); // Actual DOB

  useEffect(() => {
    // 🔐 Security: redirect to login if not logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn !== 'true') {
      navigate('/login');
      return;
    }

    const updateLifeCounter = () => {
      const now = new Date();

      let years = now.getFullYear() - dob.getFullYear();
      let months = now.getMonth() - dob.getMonth();
      let days = now.getDate() - dob.getDate();

      if (days < 0) {
        months -= 1;
        const prevMonth = new Date(now.getFullYear(), now.getMonth(), 0);
        days += prevMonth.getDate();
      }

      if (months < 0) {
        months += 12;
        years -= 1;
      }

      const timeDiff = now - new Date(
        now.getFullYear(),
        now.getMonth(),
        now.getDate(),
        dob.getHours(),
        dob.getMinutes(),
        dob.getSeconds()
      );

      const hours = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((timeDiff % (1000 * 60)) / 1000);

      setLifeCounter(`${years}y ${months}m ${days}d ${hours}h ${minutes}m ${seconds}s`);
    };

    updateLifeCounter();
    const interval = setInterval(updateLifeCounter, 1000);

    return () => clearInterval(interval);
  }, [dob, navigate]);

  return (
    <div className="special-page" style={{ backgroundImage: 'url(/photo.jpg)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="special-page-content">
        <h1 className="birthday-title">🎉 Happy Birthday to the one who means the world to me. 🎉</h1>
        <p className="birthday-description">
          I don't think I'll ever have the right words to fully express how much you mean to me—but I'll try anyway.
          Wishing you a fantastic year ahead full of happiness, success, and love! May all your dreams come true! 🎂🎈
        </p>

        {/* Time Since Birth */}
        <div className="countup">
          <h10>You've been gracing this world for</h10>
          <p>{lifeCounter}</p>
          <h20>and every moment of it has been as beautiful as you.</h20>
        </div>

        {/* Photo Section */}
        <div className="birthday-photo">
          <img
            src="/photo1.jpg"
            alt="Birthday"
            className="birthday-img"
          />
        </div>

        {/* Wishes */}
        <div className="additional-text">
          <p>🎉 Let this day be as special as you are! Enjoy every moment of this magical day. 🎁🎉</p>
          <p>💖 You deserve all the best things in life! Keep shining bright and making everyone around you smile! 💖</p>
        </div>

        {/* Animated Hearts */}
        <div className="heart-animation-container">
          <div className="heart heart-1">❤️</div>
          <div className="heart heart-2">❤️</div>
          <div className="heart heart-3">❤️</div>
          <div className="heart heart-4">❤️</div>
          <div className="heart heart-5">❤️</div>
        </div>
      </div>
    </div>
  );
}

export default SpecialPage;
