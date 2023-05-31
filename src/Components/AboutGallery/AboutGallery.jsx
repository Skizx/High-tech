import './aboutgallery.scss';

const AboutGallery = () => {
    return (
        <>
        <section id="about-gallery" className="about-gallery_block">
        <div className="wrapper">
            <div className="about-gallery_container">
                <div className="about-gallery_text">
                    <h6 className='aboutgallery'>Galerie</h6>
                    <h2 className='aboutgallery-title'>La galerie photo SSC</h2>
                    <p className='aboutgallery-txt'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio doloribus quo reiciendis consequatur unde non ducimus pariatur totam sapiente, animi repellat cupiditate, beatae a repudiandae sit aspernatur repellendus cum facilis!</p>
                </div>
                <div className="about-gallery_content">
                    <img src="/images/carre-plongeant.png" alt="" />
                </div>
            </div>
        </div>
        </section> 
        </>
    );
};

export default AboutGallery;