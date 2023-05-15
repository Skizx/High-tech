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
                    <div className='about-content txt-center'>
                        <h3>Présentation</h3>
                    </div>
                    <div className="about-content_text txt-center">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati sunt vel excepturi. 
                            Natus temporibus beatae tempore officia nam eligendi hic laudantium soluta assumenda,
                            eum minima cupiditate molestiae suscipit nesciunt quisquam.
                        </p>
                    </div>
                </div>
            </div>
        </section>   
        </>
    );
};

export default About;