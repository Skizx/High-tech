/* eslint-disable react/no-unescaped-entities */
import './_navigation.scss';
import { Link } from "react-router-dom";
import { FaBars } from 'react-icons/fa';
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
                        <a href='#root'>Accueil</a>
                        </li>
                        <li>
                        <a href='#about'>A propos</a>
                        </li>
                        <li>
                        <Link to='/prestation'>Prestation</Link>
                        </li>
                        <li>
                        <Link to='/galerie'>Galerie</Link>
                        </li>
                        <li>
                        <a href='#contact'>Contact</a>
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
        button={false}
        >
        <div data-src="/images/woman-2359562_1920.jpg" alt="Image coiffure femme fond noir" className='carousel-text wrapper-carrousel'>
            <h2>Bienvenue chez Steph Style Coiffure</h2>
        </div>
        <div data-src="/images/pink-hair-1450045_1920.jpg" alt="Image coiffure femme cheveux rose" className='carousel-text wrapper-carrousel'>
            <h2>Hapiness is a good hair day</h2>
        </div>
        <div data-src="/images/hairdresser-4666064_1920.jpg" alt="Image sacoche outils de coiffure" className='carousel-text wrapper-carrousel'>
            <h2>Love is in the hair</h2>
        </div>
        </AutoplaySlider>
        </>
    );
};

export default Navigation;