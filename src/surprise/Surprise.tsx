import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import "./BirthdaySurpriseApp.css";

const BirthdaySurpriseApp = () => {
  const [currentPage, setCurrentPage] = useState("landing");
  const [countdown, setCountdown] = useState(10);
  const [showCountdown, setShowCountdown] = useState(false);
  type HeartType = {
    id: number;
    left: number;
    size: number;
    duration: number;
    delay: number;
  };
  const [hearts, setHearts] = useState<HeartType[]>([]);
  const [typewriterText, setTypewriterText] = useState("");

  const birthdayMessage = `
There are some people who leave a mark on our life that never fades, and for me, that's you. You've always been more than just a friend you've been someone I admire, someone who has taught me more through actions than words. Your strength, patience, and kindness are lessons I'll always carry with me.

I'll never forget the times when I felt alone and you were there. That's something I'll always be grateful for. No matter what comes between us distance, silence, or misunderstandings you'll always hold a place in my life that no one else can replace.

On your birthday, my only wish is for you to have all the happiness, peace, and love that your heart deserves. You are truly special, and I hope this year gives you every reason to smile.

– Madhan 🩷`;

  // Generate falling hearts
  useEffect(() => {
    const generateHearts = () => {
      const newHearts = [];
      for (let i = 0; i < 15; i++) {
        newHearts.push({
          id: i,
          left: Math.random() * 100,
          size: Math.random() * 30 + 20,
          duration: Math.random() * 3 + 3,
          delay: Math.random() * 2,
        });
      }
      setHearts(newHearts);
    };

    if (currentPage === "landing") {
      generateHearts();
      const interval = setInterval(generateHearts, 6000);
      return () => clearInterval(interval);
    }
  }, [currentPage]);

  // Countdown logic
  useEffect(() => {
    if (showCountdown && countdown > 0) {
      const timer = setTimeout(() => {
        setCountdown(countdown - 1);
      }, 1000);
      return () => clearTimeout(timer);
    } else if (showCountdown && countdown === 0) {
      setTimeout(() => {
        setCurrentPage("birthday");
      }, 1000);
    }
  }, [showCountdown, countdown]);

  // Typewriter effect
  useEffect(() => {
    if (currentPage === "birthday") {
      let index = 0;
      const timer = setInterval(() => {
        if (index < birthdayMessage.length) {
          setTypewriterText(birthdayMessage.slice(0, index + 1));
          index++;
        } else {
          clearInterval(timer);
        }
      }, 100);
      return () => clearInterval(timer);
    }
  }, [currentPage]);

  const handleClick = () => {
    setShowCountdown(true);
  };

  if (currentPage === "landing") {
    return (
      <div className="landing-page">
        {/* Falling Hearts */}
        {hearts.map((heart) => (
          <Heart
            key={heart.id}
            className="falling-heart"
            size={heart.size}
            fill="currentColor"
            style={{
              left: `${heart.left}%`,
              top: "-50px",
              animationName: "fall",
              animationDuration: `${heart.duration}s`,
              animationDelay: `${heart.delay}s`,
              animationIterationCount: "infinite",
              animationTimingFunction: "linear",
            }}
          />
        ))}

        {/* Main Content */}
        <div className="landing-content">
          {!showCountdown ? (
            <button onClick={handleClick} className="surprise-button">
              Ready for a Surprise? 💕
            </button>
          ) : (
            <div className="countdown-circle">
              <span className="countdown-number">{countdown}</span>
            </div>
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="birthday-page">
      {/* Birthday Background Elements */}
      <div className="birthday-background">
        {/* Floating Cake Icons */}
        <div className="bg-emoji bg-emoji-1">🎂</div>
        <div className="bg-emoji bg-emoji-2">🕯️</div>
        <div className="bg-emoji bg-emoji-3">🍰</div>
        <div className="bg-emoji bg-emoji-4">🎈</div>
        <div className="bg-emoji bg-emoji-5">🎉</div>
        <div className="bg-emoji bg-emoji-6">✨</div>

        {/* Multiple Candles */}
        <div className="bg-emoji bg-emoji-7">🕯️</div>
        <div className="bg-emoji bg-emoji-8">🕯️</div>
        <div className="bg-emoji bg-emoji-9">🎂</div>
      </div>

      {/* Birthday Card */}
      <div className="birthday-card">
        <div className="card-content">
          <h1 className="card-title">🎊 Happy Birthday Manjari 🩷! 🎊</h1>
          <div className="message-container">
            <p className="typewriter-text">
              {typewriterText}
              <span className="cursor">|</span>
            </p>
          </div>
          <div className="celebration-emojis">
            <span className="celebration-emoji celebration-emoji-1">🎈</span>
            <span className="celebration-emoji celebration-emoji-2">🎉</span>
            <span className="celebration-emoji celebration-emoji-3">🎂</span>
            <span className="celebration-emoji celebration-emoji-4">🎊</span>
            <span className="celebration-emoji celebration-emoji-5">✨</span>
          </div>
        </div>
      </div>

      {/* Floating particles */}
      <div className="floating-particles">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="particle"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 2}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default BirthdaySurpriseApp;
