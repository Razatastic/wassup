import React, { useRef, useState, useEffect, useCallback } from "react";
import { useTransition, animated } from "react-spring";

function Greeting() {
  const ref = useRef([]);
  const [items, set] = useState([]);
  const transitions = useTransition(items, null, {
    from: {
      opacity: 0,
      height: 0,
      innerHeight: 0,
      transform: "perspective(600px) rotateX(0deg)",
      color: "#b7d7e8"
    },
    enter: [
      { opacity: 1, height: 80, innerHeight: 80 },
      {
        transform: "perspective(400px) rotateX(360deg)",
        color: "#cfe0e8"
      },
      { transform: "perspective(400px) rotateX(0deg)" }
    ],
    leave: [
      { color: "#daebe8" },
      { innerHeight: 0 },
      { opacity: 0, height: 0 }
    ],
    update: { color: "#87bdd8" }
  });

  // Start animation (restarts on onClick)
  const startAnimation = useCallback(() => {
    ref.current.map(clearTimeout);
    ref.current = [];
    set([]);
    ref.current.push(setTimeout(() => set(["Being Social."]), 500));
    ref.current.push(setTimeout(() => set(["Made simple."]), 3000));
    ref.current.push(setTimeout(() => set(["Join the movement."]), 6000));
  }, []);

  // Call animation on page load
  useEffect(() => startAnimation(), []);

  return (
    <div>
      {transitions.map(({ item, props: { innerHeight, ...rest }, key }) => (
        <animated.div
          className="animated-text"
          key={key}
          style={rest}
          onClick={startAnimation}
        >
          <animated.div style={{ overflow: "hidden", height: innerHeight }}>
            {item}
          </animated.div>
        </animated.div>
      ))}
    </div>
  );
}

export default Greeting;
