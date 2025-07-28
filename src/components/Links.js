// src/components/Links.js
import React from "react";

// This component will receive 'github' and 'linkedin' as props
function Links(props) { // Or use destructuring: function Links({ github, linkedin }) {
  return (
    <div>
      <h3>Links</h3>
      {/* Display the GitHub link */}
      <a href={props.github}>{props.github}</a> {/* Or <a href={github}>{github}</a> with destructuring */}
      <br /> {/* Add a line break for spacing */}
      {/* Display the LinkedIn link */}
      <a href={props.linkedin}>{props.linkedin}</a> {/* Or <a href={linkedin}>{linkedin}</a> with destructuring */}
    </div>
  );
}
export default Links;