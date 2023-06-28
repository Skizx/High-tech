import { useEffect } from "react";
import AboutGallery from "../Components/AboutGallery/AboutGallery";
import Navbar from "../Components/Navbar/Navbar";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

const Galerie = () => {

    useEffect(() => {
        window.scrollTo({
            top:0,
            left:0
        })
    })

    return (
        <>
        <header>
            <Navbar /> 
        </header>
        <main>
            <AboutGallery />
            <Contact />
        </main>
        <footer>
           <Footer />
        </footer>
        </>
    );
};

export default Galerie;