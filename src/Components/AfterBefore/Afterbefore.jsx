import '../AboutGallery/aboutgallery.scss';

const Afterbefore = () => {
    return (
        <>
        <section id="about-gallery" className="about-gallery_block">
        <div className="wrapper">
            <div className="about-gallery_container">
                <div className="about-gallery_text">
                    <h6 className='aboutgallery'>Bienvenue chez StephStyleCoiffure</h6>
                    <h2 className='aboutgallery-title'>Photo avant/après</h2>
                    <p className='aboutgallery-txt'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Optio doloribus quo reiciendis consequatur unde non ducimus pariatur totam sapiente, animi repellat cupiditate, beatae a repudiandae sit aspernatur repellendus cum facilis!</p>
                </div>
                <div className="about-gallery_content">
                    <img src="/images/coupe-courte.png" alt="" />
                </div>
            </div>
        </div>
        </section> 
        </>
    );
};

export default Afterbefore;