import "../styles/Experience.css";

export default function Experience() {
  return (
    <section id="experience" className="experience">

      <h2>Experience</h2>

      <p className="experience-text">
        My industrial training and practical experience in MERN Stack Web Development.
      </p>

      <div className="experience-card">

        <h3>MERN Stack Web Development Trainee</h3>

        <h4>07 Services, Jalandhar</h4>

        <p className="duration">
          January 2026 – June 2026
        </p>

        <p className="training">
          Successfully completed a 6-month Industrial Training during my
          8th semester, where I gained hands-on experience in full-stack
          web development using the MERN Stack.
        </p>

        <div className="experience-details">

          <div className="detail-box">
            <h5>Project</h5>
            <p>FitMatrix – Gym Management System</p>
          </div>

          <div className="detail-box">
            <h5>Technologies</h5>
            <p>React.js, Node.js, Express.js, MongoDB</p>
          </div>

          <div className="detail-box">
            <h5>Key Features</h5>
            <p>
              Authentication, Role-Based Dashboard, AI Chatbot,
              Diet Management and Member Management.
            </p>
          </div>

          <div className="detail-box">
            <h5>Certificate</h5>
            <p>Industrial Training Completion Certificate</p>
          </div>

        </div>

      </div>

    </section>
  );
}