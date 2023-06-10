import './gallery.scss';
import { RxScissors } from 'react-icons/rx';
import { Link } from 'react-router-dom';

const Gallery = () => {
    return (
        <>
        <section id="galerie" className="gallery-block">
            <div className="wrapper">
                <div className="flex-center_content">
                    <h2 className="gallery-title txt-center">Galeries photo</h2>
                </div>
                <div className="gallery-container">
                    <figure className="gallery-card">
                            <img src="/images/woman-g3b259a94c_1280.jpg" alt="Femme coiffure dorée" />
                    </figure>
                    <figure className="gallery-card">
                            <img src="/images/woman-g0065de704_1280.jpg" alt="Tresse queue de cheval" />
                    </figure>
                    <figure className="gallery-card">
                            <img src="/images/woman-gd2f852243_1280.jpg" alt="Femme coiffure noir et blanc" />
                    </figure>
                    <figure className="gallery-card">
                            <img src="/images/model-g2fcb247dd_1280.jpg" alt="Enfant sur fond dorée" />
                    </figure>
                    <figure className="gallery-card">
                            <img src="/images/man-gc080c1652_1280.jpg" alt="Homme coiffure noir et blanc" />
                    </figure>
                </div>
                    <div className="see-more">
                        <Link to="/galerie">
                            <div className="gallery-button">
                            <RxScissors />
                            <h3>Voir plus !</h3>
                            </div>
                        </Link>
                    </div>
            </div>
        </section>  
        </>
    );
};

export default Gallery;