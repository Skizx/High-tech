/* eslint-disable react/no-unescaped-entities */
import './about.scss';

const About = () => {
    return (
        <>
        <section id="about" className="about-block">
            <div className="wrapper">
                <div className="flex-center_content">
                    <h2 className="about-title txt-center">A propos</h2>
                </div>
                <div className="about-container">
                    <div className="about-img">
                        <img src="/images/silhouette-3605401.png" alt="Profil" />
                    </div>
                    <div className="about-text_container">
                        <div className='about-content txt-center'>
                            <h3>Présentation</h3>
                        </div>
                        <div className="about-content_text txt-center">
                            <p>Coiffeuse fraîchement diplômée, passionnée par l'art de la coiffure à domicile.
                                Avec une créativité débordante et un sens aiguisé des tendances,
                                j'apporte fraîcheur et dynamisme à chaque séance de coiffure.
                                Faites-moi confiance et profitez de mon expertise émergente pour des coupes modernes, des colorations éclatantes et des styles uniques,
                                le tout dans le confort de votre propre foyer.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>   
        </>
    );
};

export default About;