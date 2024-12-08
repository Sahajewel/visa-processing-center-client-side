import React from "react";
import { Fade, Slide, Zoom } from "react-awesome-reveal";

const ReactAwesome = () => {
  return (
    <div>
      <Fade>
        <h1>Fade In Animation</h1>
      </Fade>

      <Slide direction="up" duration={1000} delay={300} triggerOnce>
  <h2>This will slide up with a delay of 300ms</h2>
</Slide>

      <Zoom>
        <button>Zoom In Button</button>
      </Zoom>
    </div>
  );
};

export default ReactAwesome;
