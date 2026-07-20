 import "../styles/Home.css";
 import developer from "../assets/images/developer.png";
 import resume from "../assets/resume/HarshKumar_CV_Final.pdf";
  export default function Home(){
     return ( <>


<section id="home" className="hero">

  <div className="hero-left">
    <p>Hi, I'm</p>

    <h1>Harsh Kumar</h1>

    <h2>MERN Stack Developer</h2>

    <p>
      B.Tech CSE Graduate (2026) passionate about building modern and
      responsive web applications using the MERN stack. I enjoy learning
      new technologies and creating real-world projects with React,
      Node.js, Express.js, and MongoDB.
    </p>

    <div className="hero-btns">
    <button  onClick={() => {
    const link = document.createElement("a");
    link.href = resume;
    link.download = "Harsh_Kumar_Resume.pdf";
    link.click();
  }}
    >Download Resume</button>
    <button onClick={() =>
    document.getElementById("projects").scrollIntoView({
      behavior: "smooth",
    })
  }>View Projects</button>
</div>
  </div>

  <div className="hero-right">
    <img src={developer} alt="Developer Illustration" />
  </div>

</section>
</>)}