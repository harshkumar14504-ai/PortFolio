import { FaChevronUp } from "react-icons/fa";
import About from "./components/About";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

export default function App() {
    return (
        <>
            <Navbar />
            <main>
                <Home />
                <About />
                <Skills />
                <Experience />
                <Projects />
                <Education />
            </main>

            <Footer />
            <a href="#home" className="scroll-top">
                <FaChevronUp />
            </a>
        </>
    )
}