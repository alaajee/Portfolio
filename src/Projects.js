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
                <p>Developed a website for a cleaning airbnb service interactive representing the service with a possibility to contact the provider</p>
                {/* <a href="https://abconciergerie.com" target="_blank" rel="noopener noreferrer"> */}
                    <img src={image} alt="Description de l'image" />
                {/* </a> */}
            </div>
            
            <div className="project-item2">
                <h2>Encoder ppm to jpeg</h2>
                <p>Implemented a C program that converts images from PPM format to JPEG format </p>
                {/* <img src={structure} alt="Description de l'image" /> */}
                <a href="https://github.com/alaajee/encodeur-ppmtojpeg" target="_blank" rel="noopener noreferrer" className="ppm">GitHub Repository</a>
            </div>
            

            <div className="project-item3">
                <h2>Compiler</h2>
                <p>Implemented a Java compiler </p>
                {/* <img src={structure} alt="Description de l'image" /> */}
                <a href="https://github.com/alaajee/Compilateur-Deca" target="_blank" rel="noopener noreferrer" className="ppm">GitHub Repository</a>
            </div>


            <div className="project-item4">
                <h2>Simulateur pompier</h2>
                <p>Implemented a simulateur pompier using java and djikstra algorithm  </p>
                <video src={videoo} controls/>
                <a href="https://github.com/alaajee/Projet_java" target="_blank" rel="noopener noreferrer" className="ppm">GitHub Repository</a>
            </div>

            <div className="project-item5">
                <h2>Linux module</h2>
                <p>Implemented alinux module in c for dag graph </p>
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