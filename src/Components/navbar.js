import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import "../styles/Navbar.css";

function Navbar() {
    const projectsRef = useRef(null); // Create a ref for the Projects section
    const experienceRef = useRef(null); // Create a ref for the Experience section

    const scrollToRef = (ref) => {
        ref.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };

    return (
        <div className="navbar">
            <div className='links'>
                {/* Use onClick to trigger the scroll function */}
                <Link to="/" onClick={() => scrollToRef(projectsRef)}>Home</Link>
                {/* Use onClick to trigger the scroll function */}
                <Link to="/" onClick={() => scrollToRef(projectsRef)}>Projects</Link>
                {/* Use onClick to trigger the scroll function */}
                <Link to="/" onClick={() => scrollToRef(experienceRef)}>Experience</Link>
            </div>
        </div>
    );
}

export default Navbar;
