import React, { useEffect, useState } from "react";


const Intro = ({ onFinish }) => {
  const [boom, setBoom] = useState(false);

  useEffect(() => {
    // Trigger boom animation
    const boomTimer = setTimeout(() => {
      setBoom(true);
    }, 2600);

    // Finish intro after animation
    const finishTimer = setTimeout(() => {
      onFinish();
    }, 3000);

    return () => {
      clearTimeout(boomTimer);
      clearTimeout(finishTimer);
    };
  }, [onFinish]);

  return (
    <div className="intro-container">
      <img
        src="/intro.jpeg"
        alt="MKS Logo"
        className={`intro-logo ${boom ? "boom" : ""}`}
      />
    </div>
  );
};

export default Intro;
