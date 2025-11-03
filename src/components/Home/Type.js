import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Machine Learning Enthusiast",
          "Deep Learning Developer",
          "Python & Django Developer",
          "Database & Data Projects",
          // "C Programmer",
          "Kaggle & Colab Explorer"
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
