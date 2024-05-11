import React, { useRef, useState } from "react";

const New = ({ name, mouseCoords, Id, animationDelay }) => {
  const eid = useRef();
  const ref = useRef();
  const [onDiv, setOnDiv] = useState(false);
  return (
    <div
      ref={eid}
      className="eid smooth-fade-in"
      style={{ animationDelay: `${animationDelay}s` }}
    >
      <div
        ref={ref}
        className="w-16 h-16 rounded-full bg-cover bg-center"
        style={{
          backgroundImage: `url(${name})`,
          animationDelay: `${animationDelay}s !important`,
          filter: !(onDiv || (mouseCoords.x === 0 && mouseCoords.y === 0))
            ? "grayscale(100%)"
            : "grayscale(0%)",
        }}
        onMouseOver={() => setOnDiv(true)}
        onMouseLeave={() => setOnDiv(false)}
        data-title={Id}
      ></div>
    </div>
  );
};

export default New;
