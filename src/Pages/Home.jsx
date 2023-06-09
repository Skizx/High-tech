import Navigation from "../Components/navigation";
import About from "../Components/About/About";
import Banner from "../Components/Banner/Banner";
import Gallery from "../Components/Gallery/Gallery";
import Prestation from "../Components/Prestation/Prestation";
import bannerData from '../Data/bannerData.json';
import Footer from "../Components/Footer";
import Contact from "../Components/Contact";

const Home = () => {
    return (
        <>
        <header>
            <Navigation />
        </header>
        <main>
            <section id="banner-welcome" className="banner-block">
            {bannerData.map((item , index) => (
            <Banner
            key={index}
            title={item.title}
            text={item.text}
            textButton={item.textButton}
            />
            ))}
            </section>
             <About />
             <Prestation />
             <section id="banner-contact" className="banner-block">
            <Banner
            title= "Vous pouvez aussi me contacter"
            text= "Pour tous renseignement concernant les tarifs et les zones de deplacement"
            textButton= "Contact"
            />
             </section>
             <Gallery />
             <Contact />
        </main>
        <footer>
           <Footer />
        </footer>
        </>
    );
};

export default Home;