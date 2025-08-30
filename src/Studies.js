import './Studies.css';

function Studies() {
  return (
    <div className="Studies-page">
      <div className="study-item1">
        <h2>Ensimag - MOSIG Program - Double Degre</h2>
        <p>Currently enrolled in the MOSIG program at Ensimag, focusing on cloud computing and data infrastructur.</p>
      </div>
      <div className="study-item2">
        <h2>Engineering degree</h2>
        <p>Engineering degree in Computer Science from Grenoble-INP, where I developed and currently developing a strong foundation in programming and algorithms.</p>
      </div>
      <div className='study-item3'>
        <h2>MPSI-MP*</h2>
        <p>Two intensive years of mathematics , computer science physics to prepare to the concours for engineering schools</p>
      </div>
      <div className="studies">
        <h1>Overview of the courses i have studied</h1>
        <div className="Mathematics">
          <h2>Mathematics</h2>
          <ul>
            <li>Calculus</li>
            <li>Linear Algebra</li>
            <li>Probability and Statistics</li>
            <li>Discrete Mathematics</li>
          </ul>
        </div>

        <div className="Physics">
          <h2>Physics</h2>
          <ul>
            <li>Classical Mechanics</li>
            <li>Electromagnetism</li>
            <li>Thermodynamics</li>
            <li>Optics</li>
          </ul>
        </div>
         
       
        <div className= "ComputerScience">
          <h2>Computer science</h2>
          <ul>
            <li>Programming (Python, Java, C++)</li>
            <li>Data Structures and Algorithms</li>
            <li>Operating Systems</li>
            <li>Databases</li>
            <li>Software Engineering</li>
          </ul>
        </div>
      
        
      </div>
      <footer className="footer">
                <p>© 2025 Alaa Jennine — All rights reserved.</p>
                <div className="footer-links">
                  <a href="https://github.com/alaajee" target="_blank" rel="noopener noreferrer">GitHub</a>
                  <a href="https://www.linkedin.com/in/alaa-jennine-14465022b" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                  <a href="mailto:alaejennine33@gmail.com">Email Me</a>
                </div>
      </footer>
    </div>
    

  );
}

export default Studies;