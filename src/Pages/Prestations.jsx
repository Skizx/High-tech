import { useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Wprestation from "../Components/WPrestation/Wprestation";
import ListPrestation from "../Components/ListPrestation/ListPrestation";
import liPrestation  from "../Data/prestationWomen.json";
import Mprestation from "../Components/Mprestation/Mprestation";
import BannerWomen from "../Components/BannerWomen/BannerWomen";
import BannerMen from "../Components/BannerMen/BannerMen";

const Prestations = () => {

    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0
        })
    })

    return (
        <>
        <header>
            <Navbar />
        </header>
        <main>
            <Wprestation />
            <section id="list-prestation" className="listprestation-block">
            <div className="wrapper">
                {liPrestation.map((item, index) => (
                    <ListPrestation
                    key={index}
                    title={item.title}
                    price={item.price}
                    />
                ))}
            </div>
            </section>
            <BannerWomen />
            <Mprestation />
            <section id="list-prestation" className="listprestation-block">
            <div className="wrapper">
                <ListPrestation
                title = "Shampooing + coiffage"
                price = "24"
                />
                <ListPrestation
                title = "Shampooing + coupe + coiffage"
                price = "34"
                />
                <ListPrestation
                title = "Coloration Homme"
                price = "49"
                />
                <ListPrestation
                title = "Shampooing + coupe + coiffage étudiants (du lundi au mercredi)"
                price = "20"
                />
                <ListPrestation
                title = "Shampooing + coupe + coiffage enfants -12 ans"
                price = "28"
                />
            </div>
            </section>
            <BannerMen />
        </main>
        </>
    );
};

export default Prestations;