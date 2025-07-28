// src/components/App.js
import React from "react";
import NavBar from './NavBar';
import Home from './Home';
import About from './About';
// Import the default export 'user' object
import user from '../data/user'; // <--- CHANGE THIS IMPORT LINE

function App() {
  return (
    <div className="App">
      <NavBar />
      {/* Pass props from the 'user' object */}
      <Home
        name={user.name}
        city={user.city}
        image={user.image}
        color={user.color} // <--- Pass color prop
      />
      <About
        bio={user.bio}
        github={user.links.github} // <--- Access nested links
        linkedin={user.links.linkedin} // <--- Access nested links
      />
    </div>
  );
}
export default App;