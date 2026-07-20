import {
    FaHtml5,
    FaCss3Alt,
    FaReact,
    FaNodeJs,
    FaGithub,
    FaGitAlt,
    FaServer,
    FaJs,
    FaTools,
    FaCode,
    FaDatabase
} from "react-icons/fa";

import {
    SiExpress,
    SiMongodb,
    SiPostman,
} from "react-icons/si";

import "../styles/Skills.css";

export default function Skills() {
    return (
        <section id="skills" className="skills">

            <h2>My Skills</h2>
            <p className="skills-text">
                Technologies and tools I used to build modern web applications.
            </p>

            <div className="skills-container">

                {/* Frontend */}

                <div className="skill-card">

                    <FaReact className="icon" />

                    <h3>Frontend</h3>

                    <p className="skill-item">
                        <FaHtml5 className="skill-icon" />
                        <span>HTML</span>
                    </p>

                    <p className="skill-item">
                        <FaCss3Alt className="skill-icon" />
                        <span>CSS</span>
                    </p>

                    <p className="skill-item">
                        <FaJs className="skill-icon" />
                        <span>JavaScript</span>
                    </p>

                    <p className="skill-item">
                        <FaReact className="skill-icon" />
                        <span>React</span>
                    </p>

                </div>


                {/* Backend */}

                <div className="skill-card">

                    <FaNodeJs className="icon" />

                    <h3>Backend</h3>

                    <p className="skill-item">
                        <FaNodeJs className="skill-icon" />
                        <span>Node.js</span>
                    </p>

                    <p className="skill-item">
                        <SiExpress className="skill-icon" />
                        <span>Express.js</span>
                    </p>

                    <p className="skill-item">
                        <FaServer className="skill-icon" />
                        <span>REST APIs</span>
                    </p>

                </div>


                {/* Database */}

                <div className="skill-card">

                    <SiMongodb className="icon" />

                    <h3>Database</h3>

                    <p className="skill-item">
                        <SiMongodb className="skill-icon" />
                        <span>MongoDB</span>

                    </p>
                    <p className="skill-item">
                        <FaDatabase className="skill-icon" />
                        <span>Mongoose</span>
                    </p>


                </div>


                {/* Tools */}

                <div className="skill-card">

                    <FaTools className="icon" />

                    <h3>Tools</h3>

                    <p className="skill-item">
                        <FaGitAlt className="skill-icon" />
                        <span>Git</span>
                    </p>

                    <p className="skill-item">
                        <FaGithub className="skill-icon" />
                        <span>GitHub</span>
                    </p>

                    <p className="skill-item">
                        <FaCode className="skill-icon" />
                        <span>VS Code</span>
                    </p>

                    <p className="skill-item">
                        <SiPostman className="skill-icon" />
                        <span>Postman</span>
                    </p>

                </div>

            </div>

        </section>
    );
}