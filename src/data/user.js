// src/data/user.js

const user = {
  name: "Liza", // Test expects "Liza"
  city: "New York", // Test expects "New York"
  image: "https://i.imgur.com/mV8PQxj.gif", // Test expects this specific URL
  bio: "I am a passionate web developer with a love for React.", // Example bio
  color: "firebrick", // Test expects this color for Home h1 style
  links: {
    github: "https://github.com/learn-co-curriculum", // Test expects this
    linkedin: "https://www.linkedin.com/in/your-linkedin-profile/", // Test expects this
  },
};

export default user; // <--- This is the crucial default export