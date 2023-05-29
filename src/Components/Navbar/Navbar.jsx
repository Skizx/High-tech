import '../_navigation.scss';
import 'react-awesome-slider/dist/styles.css';
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import { FiX } from 'react-icons/fi';
import { useState, useEffect } from 'react';


const Navbar = () => {

    const [mobileMenu , setMobileMenu] = useState(false);


    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
          });

   const navigationLinks = document.querySelectorAll('.navbar-list a');

   navigationLinks.forEach((link) => {
       link.addEventListener('click', () => {
           setMobileMenu(false);
       });
   });
 }, []);

    const handleMobileMenu = () => {
        setMobileMenu(!mobileMenu)
    }

    

    return (
        <>
        <nav className="navbar-block afix">
            <div className="wrapper navbar-flex">
                <div className="navbar-logo">
                    <Link to='/'>
                        <h1>SSC</h1>
                    </Link>
                </div>
                <div id="navbarList" className={`navbar-list ${mobileMenu ? 'show-nav' : 'hide-nav'}`}>
                    <ul className="navbar-ul">
                        <li>
                        <a href='/'>Accueil</a>
                        </li>
                        <li>
                        <a href='/#about'>A propos</a>
                        </li>
                        <li>
                        <a href='/#prestation'>Prestation</a>
                        </li>
                        <li>
                        <a href='/#galerie'>Galerie</a>
                        </li>
                        <li>
                        <a href='/#contact'>Contact</a>
                        </li>
                    </ul>
                </div>
                {!mobileMenu ? 
                <span className="mobile-menu" onClick={handleMobileMenu}>
                    <FaBars />
                </span>
                :
                <span className="mobile-menu" onClick={handleMobileMenu}>
                <FiX />
                </span>
                }
            </div>
        </nav>
</>
    );
};

export default Navbar