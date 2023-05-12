import './_navigation.scss';
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import { FiX } from 'react-icons/fi'
import { useState, useEffect } from 'react';

const Navigation = () => {

    const [mobileMenu , setMobileMenu] = useState(false);

    const [scroll, setScroll] = useState(false);


    useEffect(() => {
    window.addEventListener("scroll", () => {
     setScroll(window.scrollY > 20);
   });
 }, []);

    const handleMobileMenu = () => {
        setMobileMenu(!mobileMenu)
    }

    return (
        <>
        <nav className={`navbar-block ${scroll ? 'afix' : ''}`}>
            <div className="wrapper navbar-flex">
                <div className="navbar-logo">
                    <Link to='/'>
                        My logo
                    </Link>
                </div>
                <div id="navbarList" className={`navbar-list ${mobileMenu ? 'show-nav' : 'hide-nav'}`}>
                    <ul className="navbar-ul">
                        <li>
                        <Link to='/'>Accueil</Link>
                        </li>
                        <li>
                        <Link to='shop'>Setup</Link>
                        </li>
                        <li>
                        <Link to='#'>A propos</Link>
                        </li>
                        <li>
                        <Link to='#'>Contact</Link>
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

        <section className="background-home"></section> 
        </>
    );
};

export default Navigation;