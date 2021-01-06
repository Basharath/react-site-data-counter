import React from "react";
import "./siteData.css";

import Counter from "./Counter";

export default function App() {
  return (
    <div className="data-container">
      <Counter count={235} title="Clients" />
      <Counter count={530} title="Projects" />
      <Counter count={1399} title="Hours of support" />
      <Counter count={20} title="Staff" />
    </div>
  );
}
