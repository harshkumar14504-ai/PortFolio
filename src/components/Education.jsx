import "../styles/Education.css";

export default function Education() {
  return (
    <section id="education" className="education">

      <h2>Education</h2>

      <p className="education-text">
        My academic background and qualifications.
      </p>

      <div className="education-container">

        {/* B.Tech */}
        <div className="education-card">
          <h3>B.Tech in Computer Science & Engineering</h3>

          <h4>IK Gujral Punjab Technical University</h4>

          <p className="college">
            Hoshiarpur Campus
          </p>

          <p className="year">2022 – 2026</p>

          <p className="score">CGPA: 8.0</p>
        </div>

        {/* 12th */}
        <div className="education-card">
          <h3>Senior Secondary School</h3>

          <h4>Punjab School Education Board (PSEB)</h4>

          <p className="college">
            Government Senior Secondary School, Ajjowal
          </p>

          <p className="year">2021 – 2022</p>

          <p className="score">89%</p>
        </div>

      </div>

    </section>
  );
}