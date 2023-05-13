/* eslint-disable react/no-unescaped-entities */
import './banner.scss';

const Banner = () => {
    return (
        <>
        <section id="banner" className="banner-block">
            <div className="wrapper txt-center">
                <h3 className='banner-title'>Bonjour et bienvenue à toute et tous !</h3>
                <p className='banner-text'>Je m'appelle Stéphanie, je me déplace dans les Hauts-de-France, pour pratiquer la coiffure à domicile.</p>
                <div className="banner-btn">
                    <a href="#" role="button">
                        En savoir plus
                    </a>
                </div>
            </div>
        </section> 
        </>
    );
};

export default Banner;