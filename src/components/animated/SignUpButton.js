import React from "react";
import { useSpring, animated } from "react-spring";
import { Button } from "reactstrap";

function Greeting() {
  const AnimatedButton = animated(Button);

  // Animated button
  const [props] = useSpring({
    opacity: 1,
    color: "white",
    from: { opacity: 0 },
    delay: "2000"
  });
  return (
    <AnimatedButton style={props}>
      This text Faded in Using hooks
    </AnimatedButton>
  );
}

export default Greeting;
