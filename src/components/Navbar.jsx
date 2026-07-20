import { useState } from "react";
import "../styles/Navbar.css"

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <nav className="Navbar">
            <div className="left">
                <h1><a href="#home">Harsh Kumar</a></h1>
            </div>

            <div
                className={`hamburger ${menuOpen ? "open" : ""}`}
                onClick={() => setMenuOpen(!menuOpen)}
            >
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>

            <div className="right">
                <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
                    <li><a href="#about">About</a></li>
                    <li><a href="#skills">Skills</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#education">Education</a></li>
                    <li><a href="#footer">Contact</a></li>
                </ul>
            </div>
        </nav>
    );
}