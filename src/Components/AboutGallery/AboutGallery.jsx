/* eslint-disable react/no-unescaped-entities */
import './aboutgallery.scss';
import { Gallery } from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
import slides from '../../Data/slides';
import { useState } from 'react';

const AboutGallery = () => {

    const [index, setIndex] = useState(-1);

    const handleClick = (index) => setIndex(index);

    return (
        <>
        <section id="about-gallery" className="about-gallery_block">
        <div className="wrapper">
            <div className="about-gallery_container">
                <div className="about-gallery_text">
                    <p className='aboutgallery'>Galerie photos</p>
                    <h2 className='aboutgallery-title'>La galerie photo SSC</h2>
                    <p className='aboutgallery-txt'>Explorez notre superbe galerie photo où nous présentons fièrement notre travail. Plongez-vous dans un monde visuel captivant rempli de magnifiques coiffures, de coupes tendance et de styles uniques. Laissez-vous inspirer par nos réalisations artistiques et découvrez les nombreuses possibilités qui s'offrent à vous. Que vous recherchiez des idées pour une coupe courte moderne, des coiffures tressées élégantes ou des looks audacieux, notre galerie est un véritable trésor d'inspiration capillaire. Profitez de cette expérience visuelle immersive et laissez-nous vous guider vers le style qui vous ressemble</p>
                </div>
                <div className="about-gallery_content">
                    <Gallery images={slides}
                    enableImageSelection={false}
                    onClick={handleClick}
                    />
                    <Lightbox 
                    slides={slides}
                    open={index >=0}
                    index={index}
                    close={() => setIndex(-1)}
                    />
                </div>
            </div>
        </div>
        </section> 
        </>
    );
};

export default AboutGallery;