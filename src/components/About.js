// src/components/About.js
import React from "react";
import Links from './Links'; // Ensure this is correct (capital L, plural s)

// Destructure props for cleaner code
function About({ bio, github, linkedin }) {
  return (
    <div id="about">
      <h2>About Me</h2>
      {/* Conditional rendering for the bio paragraph */}
      {bio && <p>{bio}</p>}

      {/* If the lab image shows an image here, you might need to pass 'image' as a prop to About too,
          and then use it like <img src={image} alt="Profile" />.
          For now, based on the tests, it's not explicitly required in About. */}
      {/* <img src={image} alt="Profile" /> */}

      {/* Render the Links component and pass down github and linkedin props */}
      <Links github={github} linkedin={linkedin} />
    </div>
  );
}
export default About;