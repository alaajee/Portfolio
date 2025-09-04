import './Projects.css';
import App from './App';
import image from './image.png';
import structure from './Structure_jpeg.png';
import videoo from './vid.webm'
function Projects() {
    return(
        <div className="Projects-page">
            <div className="project-item1">
                <h2>Web Application</h2>
                <p>Created an interactive platform for an Airbnb cleaning service, highlighting the business offering and enabling direct customer contact.</p>
                {/* <a href="https://abconciergerie.com" target="_blank" rel="noopener noreferrer"> */}
                    <img src={image} alt="Description de l'image" />
                {/* </a> */}
            </div>
            
            <div className="project-item2">
                <h2>Encoder ppm to jpeg</h2>
                <p>Developed a C-based image encoder capable of transforming raw PPM files into compressed JPEG format. </p>
                {/* <img src={structure} alt="Description de l'image" /> */}
                <a href="https://github.com/alaajee/encodeur-ppmtojpeg" target="_blank" rel="noopener noreferrer" className="ppm">GitHub Repository</a>
            </div>
            

            <div className="project-item3">
                <h2>Compiler</h2>
                <p>Developed a full Java compiler for the Deca programming language (Java-inspired), covering lexical and syntactic analysis, semantic verification, and code generation for both object-oriented and non-object-oriented constructs.</p>
                {/* <img src={structure} alt="Description de l'image" /> */}
                <a href="https://github.com/alaajee/Compilateur-Deca" target="_blank" rel="noopener noreferrer" className="ppm">GitHub Repository</a>
            </div>


            <div className="project-item4">
                <h2>Simulateur pompier</h2>
                <p>Developed a Java-based firefighting simulator that applies Dijkstra’s shortest path algorithm to optimize route planning and resource allocation. </p>
                <video src={videoo} controls/>
                <a href="https://github.com/alaajee/Projet_java" target="_blank" rel="noopener noreferrer" className="ppm">GitHub Repository</a>
            </div>

            <div className="project-item5">
                <h2>Linux module</h2>
                <p>Developed a Linux kernel module in C that handles multiple clients simultaneously, processes graph operations (PUT/GET) via an in-kernel bucket-based data store, executes CPU-intensive tasks, and returns responses efficiently. </p>
                <a href="https://github.com/alaajee/Kernel_work" target="_blank" rel="noopener noreferrer" className="ppm">GitHub Repository</a>
            </div>

            <div className="All-projects">
                Check out all my projects on <a href="https://github.com/alaajee" target="_blank" rel="noopener noreferrer" className='ppm'>GitHub</a>
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
    )
}

export default Projects;