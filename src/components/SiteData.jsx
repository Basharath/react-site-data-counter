import React from "react";
import "./siteData.css";

import Counter from "./Counter";

export default function App() {
  return (
    <div className="data-container">
      <Counter end={235} title="Clients" />
      <Counter end={530} title="Projects" />
      <Counter end={1399} title="Hours of support" />
      <Counter end={20} title="Staff" />
    </div>
  );
}
