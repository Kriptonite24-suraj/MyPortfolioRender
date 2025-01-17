import { Link } from "react-router-dom";
import "./NavbarStyles.css";
import { FaBars, FaTimes } from "react-icons/fa";
import React from 'react';

const Navbar = () => {
    // writing js for hamburger menu for media query---------------------
    const [click, setClick] = React.useState(false);
    const handleClick = () => setClick(!click);

    const [color, setColor] = React.useState(false);
    const changeColor = () => {
        if(window.scrollY>=100){
            setColor(true);
        }
        else{
            setColor(false);
        }
    }
    
    window.addEventListener("scroll",changeColor);

    return (
        <div className={color?"header header-bg":"header"}>
            <Link to="/">
                <h1 className="suraj">Suraj Singh</h1>
            </Link>
            <ul className={click?"nav-menu active":"nav-menu"}>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/About">About</Link>
                </li>
                <li>
                    <Link to="/Contact">Contact</Link>
                </li>
                <li>
                    <Link to="/project">Project</Link>
                </li>
            </ul>
            <div className="hamburger" onClick={handleClick}>
                {click ?  <FaTimes size={20} style={{ color: "#fff" }} />: <FaBars size={20} style={{ color: "#fff" }} />}
            </div>
        </div>
    )
}

export default Navbar