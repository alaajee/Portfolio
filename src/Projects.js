import './Projects.css';
import App from './App';

function Projects() {
    return(
        <div className="Projects-page">
            <div className="project-item1">
                <h2>Project 1: Web Application</h2>
                <p>Developed a full-stack web application using React and Node.js, focusing on user authentication and data management.</p>
            </div>
            
            <div className="project-item2">
                <h2>Project 2: KVS module linux</h2>
                <p>Contributed to the Linux kernel by implementing a key-value store module.</p>
            </div>

            <div className="project-item3">
                <h2>Project 3: Compiler for Deca</h2>
                <p>Developed a compiler for the Deca programming language similar to java, focusing on syntax analysis and code generation.</p>
            </div>

            <div className="github-link-button">
            <a href="https://github.com/alaajee/" 
                target="_blank" 
                rel="noopener noreferrer" 
                class="github-link">
                <img src="https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png" 
                        alt="GitHub" />
            </a>
            <span class="github-text">View Projects on GitHub</span>

            </div>

        </div>
    )
}

export default Projects;