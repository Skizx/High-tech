import { useEffect } from "react";
import AboutGallery from "../Components/AboutGallery/AboutGallery";
import Navbar from "../Components/Navbar/Navbar";
import Afterbefore from "../Components/AfterBefore/Afterbefore";

const Galerie = () => {

    useEffect(() => {
        window.scrollTo({
            top:0,
            left:0
        })
    })

    return (
        <>
        <Navbar /> 
        <AboutGallery />
        <Afterbefore />
        </>
    );
};

export default Galerie;