import { Heart } from "lucide-react";
import { useEffect, useState } from "react";
import "./BirthdaySurpriseApp.css";
import RotatingGallery from "./RotatingGallery";

const BirthdaySurpriseApp = () => {
  const [currentPage, setCurrentPage] = useState("landing");
  const [countdown, setCountdown] = useState(10);
  const [showCountdown, setShowCountdown] = useState(false);
  const [show3DGallery, setShow3DGallery] = useState(false);

  type HeartType = {
    id: number;
    left: number;
    size: number;
    duration: number;
    delay: number;
  };

  const [hearts, setHearts] = useState<HeartType[]>([]);
  const [typewriterText, setTypewriterText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [showFinalSurprise, setShowFinalSurprise] = useState(false);

  const birthdayMessage = `Hey Manjuuh,
I know you're not one for big gestures or over-the-top celebrations, but I couldn't let your birthday pass without telling you what you mean to me.
You have this quiet way about you that just makes everything feel more steady. I've watched you handle things that would break most people, and somehow you still show up with that same gentle strength and kindness. It's honestly incredible.
I wanted to do something small to show you how much I appreciate having you in my life. You probably don't even realize the impact you have – the way you listen without judgment, offer perspective when I'm lost, or just exist as this calming presence when everything else feels chaotic. Sometimes you're the voice of reason I desperately need, sometimes you're just the friend who gets it, and sometimes you're simply there in that quiet, reassuring way that means everything.
So on your birthday, I'm hoping you find those pockets of peace you deserve, that you notice and smile at the small beautiful moments, and that this new year brings you genuine happiness – the deep, real kind that matches who you are.
You're rare, Manjuuh. And I'm really grateful our paths crossed and that you're part of my story.`;

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
      const interval = setInterval(generateHearts, 10000);
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
          setTimeout(() => {
            setIsTypingComplete(true);
          }, 1000);
        }
      }, 100);
      return () => clearInterval(timer);
    }
  }, [currentPage]);

  const handleClick = () => {
    setShowCountdown(true);
  };

  // const handleRevealSurprise = () => {
  //   setShowFinalSurprise(true);
  // };

  const handleShow3DGallery = () => {
    setShow3DGallery(true);
  };

  // If showing 3D gallery, render it full screen
  if (show3DGallery) {
    return (
      <div className="gallery-fullscreen">
        {/* <h2 className="gallery-title">29 Stories ✨, 1 Beautiful Soul 💖</h2> */}
        <RotatingGallery />
        <button
          onClick={() => setShow3DGallery(false)}
          className="back-button"
          style={{
            position: "absolute",
            top: "20px",
            right: "0px",
            zIndex: 1000,
            padding: "10px 20px",
            background: "linear-gradient(135deg, #ff6b6b, #ee5a24)",
            color: "white",
            border: "none",
            borderRadius: "25px",
            cursor: "pointer",
            fontSize: "16px",
            fontWeight: "600",
            boxShadow: "0 4px 15px rgba(0, 0, 0, 0.2)",
            transition: "all 0.3s ease",
          }}
        >
          ← Back to Message
        </button>
      </div>
    );
  }

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
        <div className="bg-emoji bg-emoji-7">🕯️</div>
        <div className="bg-emoji bg-emoji-8">🕯️</div>
        <div className="bg-emoji bg-emoji-9">🎂</div>
      </div>

      {/* Birthday Card */}
      <div className="birthday-card">
        <div className="card-content">
          <h1 className="card-title">29 Stories ✨, 1 Precious Soul 💖</h1>

          {/* Only show message container if surprise hasn't been revealed */}
          {!showFinalSurprise && (
            <div className="message-container">
              <p className="typewriter-text">
                {typewriterText}
                {!isTypingComplete && <span className="cursor">|</span>}
              </p>
            </div>
          )}

          {isTypingComplete && !showFinalSurprise && (
            <div className="reveal-button-container">
              <button onClick={handleShow3DGallery} className="reveal-button">
                Reveal Surprise! ✨
              </button>
            </div>
          )}

          {showFinalSurprise && (
            <div className="final-surprise">
              <div className="surprise-content">
                {/* <h2 className="surprise-title">🎊 SURPRISE! 🎊</h2> */}
                <p className="surprise-message">
                  Manjari, you light up every room you enter with your beautiful
                  smile and kind heart. Your friendship is a treasure that I
                  cherish deeply. May this new year of your life bring you
                  endless joy, adventures, and all the love you deserve! 🌟💕
                </p>
                {/* <div className="gift-emoji">🎁</div> */}
                {/* Buttons for navigation */}
                <div
                  style={{
                    marginTop: "20px",
                    display: "flex",
                    gap: "1rem",
                    justifyContent: "center",
                    flexWrap: "wrap",
                  }}
                >
                  <button
                    onClick={handleShow3DGallery}
                    className="reveal-button"
                  >
                    Reveal Surprise
                  </button>
                  <button
                    onClick={() => setShowFinalSurprise(false)}
                    className="reveal-button"
                    style={{
                      background: "linear-gradient(135deg, #6b7280, #4b5563)",
                    }}
                  >
                    Read Message Again
                  </button>
                </div>
              </div>
            </div>
          )}

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
