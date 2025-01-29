import React from 'react';
import './App.css'; // Assuming you have an App.css for styling

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <AboutMe />
      <ProfilePicture />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header>
      <nav>
        <ul>
          <li><a href="#about-me">About Me</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
  
}
function HeroSection() {
  return (
    <div>
      <section id="profile-picture">
      
        <img src="img_5732.png" alt="Profile" className="profile-image" />
      </section>

      <section id="hero">
        <h1 className="hero-text">
          Hello! I'm <span className="hero-name">Charls Hermosa</span>, <br />Front-end Designer
        </h1>
      </section>
    </div>
  );
}

function ProfilePicture() {
  return (
    ""
  );
}


function AboutMe() {
  return (
    
    <section id="about-me">
      <h2>About Me</h2>
      <p>Hello! I'm a simple web designer with a focus on beautifying intuitive and responsive user interfaces. I enjoy learning new designs and improving my skills every day.</p>
    </section>

  );
  
}
/*  Know more about:
</span>
<br></br>
<br></br>
    <span style={{ color: 'white', fontWeight: 'bold', backgroundColor: 'maroon', padding: '0.2em', borderRadius: 10}}>
      Charls Hermosa
    </span>
  </h2>*/

function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>
      <ul>
        <li>Html & Css</li>
        <li>Photo Editor</li>
        <li>React</li>
        <li>Node.js</li>
        <li>Git & GitHub</li>
      </ul>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="project">
        <h3>Pending muna sir</h3>
        <p>Description daw to sir.</p>
        <a href="#">View Project</a>
      </div>
      <div className="project">
        <h3>Pending muna sir</h3>
        <p>Description nalang din siguro.</p>
        <a href="#">View Project</a>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact">
      <h2>Contact</h2>
      <p>Kung nais niyo pong maging malapit sakin, friendly naman ako just pm me via email or Facebook!</p>
      <a href="mailto:charlshermosa30@gmail.com" className="red-link">Email:&nbsp;</a><h>charlshermosa30@gmail.com</h><br></br> <br></br>
<a href="https://www.facebook.com/charls0530" className="blue-link">Facebook:&nbsp;</a><h>Charls Hermosa</h>


    </section>
  );
}

function Footer() {
  return (
    <footer>
      <p>&copy; 2025 Charls Hermosa. All rights reserved.</p>
    </footer>
  );
}

export default App;
