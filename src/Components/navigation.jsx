/* eslint-disable react/no-unescaped-entities */
import './_navigation.scss';
import 'react-awesome-slider/dist/styles.css';
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
import { ImScissors } from 'react-icons/im';
import { FiX } from 'react-icons/fi';
import { useState, useEffect } from 'react';
import AwesomeSlider from 'react-awesome-slider';
import withAutoPlay from 'react-awesome-slider/dist/autoplay';

const AutoplaySlider = withAutoPlay(AwesomeSlider)

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
                        <h1>SSC</h1>
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

        <AutoplaySlider
        className="background-banner"
        play={true}
        interval={6000}
        organicArrows={false}
        bullets={false}
        >
        <div data-src="/src/images/Coiffeuse-bg-1.jpg" className='carousel-text wrapper-carrousel'>
            <h2>Bienvenue chez Steph Style Coiffure</h2>
        </div>
        <div data-src="/src/images/Outils-coiffeur-bg.jpg" className='carousel-text wrapper-carrousel'>
            <h2>Steph Style Coiffure</h2>
        </div>
        </AutoplaySlider>
        </>
    );
};

export default Navigation;