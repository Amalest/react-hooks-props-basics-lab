// src/components/Home.js
import React from "react";

// Destructure props for cleaner code (optional, but good practice)
function Home({ name, city, color }) {
  return (
    <div id="home">
      {/* Use the 'color' prop for style */}
      <h1 style={{ color: color }}>
        {name} is a Web Developer from {city}
      </h1>
    </div>
  );
}
export default Home;