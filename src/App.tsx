// import { useState, useEffect } from "react";
// import { motion } from "framer-motion";
// import Typewriter from "typewriter-effect";

// // Falling hearts animation for landing page
// function Hearts() {
//   const hearts = Array.from({ length: 20 });
//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       {hearts.map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute"
//           initial={{ y: -50, x: Math.random() * window.innerWidth, opacity: 0 }}
//           animate={{ y: window.innerHeight + 50, opacity: 1 }}
//           transition={{
//             duration: Math.random() * 5 + 5,
//             repeat: Infinity,
//             delay: Math.random() * 5,
//           }}
//           style={{ fontSize: `${Math.random() * 30 + 20}px`, color: "pink" }}
//         >
//           ❤
//         </motion.div>
//       ))}
//     </div>
//   );
// }

// // Birthday themed drops animation after countdown
// function BirthdayDrops() {
//   const items = Array.from({ length: 20 });
//   const symbols = ["🎂", "🎉", "🎁", "🍰", "🎈"];
//   return (
//     <div className="absolute inset-0 overflow-hidden pointer-events-none">
//       {items.map((_, i) => (
//         <motion.div
//           key={i}
//           className="absolute"
//           initial={{
//             y: -50,
//             x: Math.random() * window.innerWidth,
//             opacity: 0,
//             rotate: Math.random() * 360,
//           }}
//           animate={{
//             y: window.innerHeight + 50,
//             opacity: 1,
//             rotate: Math.random() * 360 + 360,
//           }}
//           transition={{
//             duration: Math.random() * 5 + 5,
//             repeat: Infinity,
//             delay: Math.random() * 5,
//           }}
//           style={{ fontSize: `${Math.random() * 30 + 20}px` }}
//         >
//           {symbols[Math.floor(Math.random() * symbols.length)]}
//         </motion.div>
//       ))}
//     </div>
//   );
// }

// export default function App() {
//   const [step, setStep] = useState(0); // 0 = landing, 1 = countdown, 2 = birthday
//   const [count, setCount] = useState(10);

//   useEffect(() => {
//     if (step === 1) {
//       if (count === 0) {
//         setStep(2);
//       } else {
//         const timer = setTimeout(() => setCount(count - 1), 1000);
//         return () => clearTimeout(timer);
//       }
//     }
//   }, [count, step]);

//   return (
//     <div className="relative h-screen w-screen">
//       {step === 0 && (
//         <>
//           <Hearts />
//           <div className="flex items-center justify-center h-screen w-screen bg-pink-200">
//             <button
//               onClick={() => setStep(1)}
//               className="px-8 py-4 bg-white text-pink-600 rounded-3xl shadow-lg text-2xl font-bold hover:bg-pink-100 transition"
//             >
//               Manjuuh's Surprise 🎉
//             </button>
//           </div>
//         </>
//       )}

//       {step === 1 && (
//         <div className="flex items-center justify-center h-screen w-screen bg-gradient-to-r from-purple-400 to-pink-500 text-white text-6xl font-bold">
//           {count}
//         </div>
//       )}

//       {step === 2 && (
//         <div className="relative h-screen w-screen flex items-center justify-center bg-gradient-to-br from-yellow-100 via-pink-100 to-purple-200">
//           <BirthdayDrops />
//           <div className="bg-white bg-opacity-90 p-6 rounded-3xl shadow-2xl max-w-lg text-center border-4 border-pink-300 z-10">
//             <h1 className="text-3xl font-bold text-pink-600 mb-4">
//               🎉 Happy Birthday, Manjuuh 🎂
//             </h1>
//             <div className="text-lg text-gray-700">
//               <Typewriter
//                 options={{
//                   strings: [
//                     "Dear Manjuuh,",
//                     "You are the brightest light in my life ✨",
//                     "On your special day, I wish you endless happiness 💖",
//                     "May all your dreams come true 🎁",
//                     "From your Student 🥰",
//                   ],
//                   autoStart: true,
//                   loop: false,
//                   delay: 50,
//                 }}
//               />
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

import React from "react";
import BirthdaySurpriseApp from "./surprise/surprise";

const App = () => {
  return (
    <div>
      <BirthdaySurpriseApp />
    </div>
  );
};

export default App;
