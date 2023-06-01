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
                        <Link to="/galerie">
                            <img src="/images/coupe-courte.png" alt="" />
                        </Link>
                    </figure>
                    <figure className="gallery-card">
                        <Link to="/galerie">
                            <img src="/images/coupe-courte.png" alt="" />
                        </Link>
                    </figure>
                    <figure className="gallery-card">
                        <Link to="/galerie">
                            <img src="/images/coupe-courte.png" alt="" />
                        </Link>
                    </figure>
                    <figure className="gallery-card">
                        <Link to="/galerie">
                            <img src="/images/coupe-courte.png" alt="" />
                        </Link>
                    </figure>
                    <figure className="gallery-card">
                        <Link to="/galerie">
                            <div className="gallery-button">
                            <RxScissors />
                            <p>Voir plus !</p>
                            </div>
                        </Link>
                    </figure>
                </div>
            </div>
        </section>  
        </>
    );
};

export default Gallery;