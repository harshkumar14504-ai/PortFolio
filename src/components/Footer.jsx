import "../styles/Footer.css";
import {
    FaGithub,
    FaLinkedin,
    FaPhoneAlt,
} from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";

export default function Footer() {
    return (
        <footer className="footer" id="footer">

            <h2>Harsh Kumar</h2>

            <p className="footer-text">
                MERN Stack Developer | Passionate about building modern and responsive web applications.
            </p>

            <div className="footer-contact">

                <div className="contact-item">
                    <MdEmail />
                    <a href="mailto:harshkumar14504@gmail.com">
                        harshkumar14504@gmail.com
                    </a>
                </div>

                <div className="contact-item">
                    <FaPhoneAlt />
                    <a href="tel:+919478012693">
                        +91 94780 12693
                    </a>
                </div>

                <div className="contact-item">
                    <FaLocationDot />
                    <span>Punjab, India</span>
                </div>

            </div>

            <div className="social-links">

                <a
                    href="https://github.com/harshkumar14504-ai"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaGithub />
                </a>

                <a
                    href="https://www.linkedin.com/in/harsh-kumar-714674314"
                    target="_blank"
                    rel="noreferrer"
                >
                    <FaLinkedin />
                </a>
            </div>

            <hr />

            <p className="copyright">
                © 2026 Harsh Kumar. All Rights Reserved.
            </p>

        </footer>
    );
}
