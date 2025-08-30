import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import picture from './pic.jpeg';
import './App.css';
import Skills from './Skills';
import Studies from './Studies'; 
import Projects from './Projects';

function App() {
  return (
  <Router>

    <div className="App">
     
       
      <header className="App-header">
        <div className="App-logo">
          Ensimag
        </div>
        <div className='Hamburger-menu'>
          <Link to="/" className="box1">About me</Link>
          <Link to="/skills" className="box2">Skills</Link>
          <Link to="/projects" className="box3">Projects</Link>
          <Link to="/studies" className="box4">Studies</Link>
         
        </div>
      </header>
      <Routes>
          <Route path="/" element={
            <>
              <div className="App-content">
                <div className="Profile-picture">
                  <img src={picture} className="App-logo" alt="logo" />
                </div>

                <div className="Profile-description">
                  <h2>Hello, I'm Alaa Jennine</h2>
                  <p>
                    Passionate about software engineering, cloud architecture and low-level programming.
                    Currently a student at Ensimag in the MOSIG program.
                  </p>
                </div>
              </div>

              <div className="Passion-bubbles">
                <div className="bubble">Web Dev</div>
                <div className="bubble">Kernel Dev</div>
                <div className="bubble">Cloud & DevOps</div>
              </div>

              <div className="Web-development-section">
                <h2>Web_development</h2>
                <p>JavaScript, Java, HTML/CSS, React.js , Node.js , Express</p>
              </div>
            
              <div className="Kernel-development-section">
                <h2>Kernel_development</h2>
                <p>C, Python, Bash</p>
              </div>
               
               <div className="Cloud-DevOps-section">
                <h2>Cloud_DevOps</h2>
                <p>Docker, AWS</p>
              </div>

              <footer className="footer">
                <p>© 2025 Alaa Jennine — All rights reserved.</p>
                <div className="footer-links">
                  <a href="https://github.com/alaajee" target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href="https://www.linkedin.com/in/alaa-jennine-14465022b" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <a href="mailto:alaejennine33@gmail.com">Email Me</a>
                </div>
              </footer>
            </>
            
          } />
          

          <Route path="/skills" element={<Skills />} />
          <Route path="/studies" element={<Studies />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/" element={<App />} />
        </Routes>
     

    </div>
    </Router>
  );
}

export default App;
