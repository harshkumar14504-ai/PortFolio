import "../styles/Projects.css"
import fitmatrix from "../assets/images/fitmatrix.png";
import todo from "../assets/images/Todo.png";
export default function Projects() {
  return (
    <section id="projects" className="projects">

      <h2>Projects</h2>

      <div className="projects-container">

        <div className="project-card">
          <img src={fitmatrix} alt="Fit Matrix Project" />

          <h3>Fit Matrix</h3>

          <p>
            Fit Matrix is a full-stack MERN gym management application
            with secure JWT authentication and an AI-powered chatbot.
            It helps users manage fitness-related activities through a
            modern and user-friendly interface.
          </p>

          <h4>Tech Stack</h4>
          <p>React.js • Node.js • Express.js • MongoDB • JWT</p>

          <div className="project-buttons">
            <a
              href="https://fitmatrix-ten.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>

            <a
              href="https://github.com/harshkumar14504-ai/Fitmatrix_Frontend"
              target="_blank"
              rel="noopener noreferrer"
            >
             Frontend GitHub
            </a>

            <a
              href="https://github.com/harshkumar14504-ai/Fitmatrix_Backend"
              target="_blank"
              rel="noopener noreferrer"
            >
             Backend GitHub
            </a>
          </div>
        </div>

        <div className="project-card">
          <img src={todo} alt="Todo App Project" />

          <h3>Todo App</h3>

          <p>
            A responsive Todo application built with HTML, CSS, and
            JavaScript. It allows users to add, edit, delete, and manage
            tasks using Local Storage for persistent data.
          </p>

          <h4>Tech Stack</h4>
          <p>HTML • CSS • JavaScript • Local Storage</p>

          <div className="project-buttons">
            <a
              href="https://todo-app-zeta-ebon-99.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Live Demo
            </a>

            <a
              href="https://github.com/harshkumar14504-ai/Todo-App"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
          </div>
        </div>

      </div>

    </section>
  );
}