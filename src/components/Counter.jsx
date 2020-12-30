import React from "react";
import CountUp from "react-countup";

export default function App({ end, title }) {
  return (
    <div className="counter">
      <div className="counter-number">
        <CountUp start={0} end={end} duration={2} />
      </div>
      <p className="counter-title">{title}</p>
    </div>
  );
}
