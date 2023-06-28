import { useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Wprestation from "../Components/WPrestation/Wprestation";
import ListPrestation from "../Components/ListPrestation/ListPrestation";
import liPrestation  from "../Data/prestationWomen.json";
import Mprestation from "../Components/Mprestation/Mprestation";
import BannerWomen from "../Components/BannerWomen/BannerWomen";
import BannerMen from "../Components/BannerMen/BannerMen";
import Eprestation from "../Components/EPrestation/Eprestation";
import Bannerchild from "../Components/BannerChild/Bannerchild";
import Contact from "../Components/Contact";
import Footer from "../Components/Footer";

const Prestations = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0
        })
    })

    const coiffure = "COIFFURE";

    return (
        <>
        <header>
            <Navbar />
        </header>
        <main>
            <BannerWomen />
            <Wprestation />
            <section id="list-prestation" className="listprestation-block">
            <div className="wrapper">
            <div className="list-container">
                <h3>{coiffure}</h3>
                {liPrestation.map((item, index) => (
                    <ListPrestation
                    key={index}
                    title={item.title}
                    price={item.price}
                    />
                ))}
            </div>
            </div>
            </section>
            <BannerMen />
            <Mprestation />
            <section id="list-prestation" className="listprestation-block">
            <div className="wrapper">
            <div className="list-container">
                <h3>{coiffure}</h3>
                <ListPrestation
                title = "Dégradé"
                price = "24"
                />
                <ListPrestation
                title = "Coupe effilée"
                price = "34"
                />
                <ListPrestation
                title = "Coloration Homme"
                price = "49"
                />
                <ListPrestation
                title = "Coupe undercut"
                price = "20"
                />
                <ListPrestation
                title = "Man bun"
                price = "28"
                />
                </div>
            </div>
            </section>
            <Bannerchild />
            <Eprestation />
            <section id="list-prestation" className="listprestation-block">
            <div className="wrapper">
            <div className="list-container">
                <h3>{coiffure}</h3>
                <ListPrestation
                title = "Shampooing coiffage"
                price = "12"
                />
                <ListPrestation
                title = "Shampooing coupe coiffage"
                price = "24"
                />
                <ListPrestation
                title = "Coloration Enfant"
                price = "39"
                />
                <ListPrestation
                title = "Shampooing coupe coiffage étudiants"
                price = "10"
                />
                <ListPrestation
                title = "Shampooing coupe coiffage enfants -12 ans"
                price = "15"
                />
                </div>
            </div>
            </section>
            <Contact />
        </main>
        <footer>
           <Footer />
        </footer>
        </>
    );
};

export default Prestations;