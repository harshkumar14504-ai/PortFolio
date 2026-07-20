import "../styles/About.css"
import developer1 from "../assets/images/developer2.jpeg";

export default function About() {
    return (
        <>
            <section id="about" className="about">
                <div className="about-left" >
                    <img src={developer1} alt="" />
                </div>
                <div className="about-right" >
   <h2>About Me</h2>

<p>
 Hi I'm <strong>Harsh Kumar</strong> B.Tech CSE Graduate (2026) and a MERN Stack Developer
  passionate about building responsive and user-friendly web applications.
</p>
<p>
  My core skills include <strong>HTML, CSS, JavaScript, React.js, Node.js,
  Express.js, MongoDB, Git,</strong> and <strong>GitHub</strong>. I enjoy
  writing clean code and developing practical full-stack projects.
</p>
<p>
  I am continuously improving my development skills by learning new
  technologies and solving real-world problems through hands-on projects.
</p>

                </div>







            </section>
        </>
    )
}