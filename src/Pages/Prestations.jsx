import { useEffect } from "react";
import Navbar from "../Components/Navbar/Navbar";
import Wprestation from "../Components/WPrestation/Wprestation";
import ListPrestation from "../Components/ListPrestation/ListPrestation";
import liPrestation  from "../Data/prestationWomen.json";
import Mprestation from "../Components/Mprestation/Mprestation";

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
            {liPrestation.map((item, index) => (
                <ListPrestation
                key={index}
                title={item.title}
                price={item.price}
                />
            ))}
            </section>
            <Mprestation />
            <section id="list-prestation" className="listprestation-block">
            <ListPrestation 
            title = "Dégradé"
            price = "25"
            />
            <ListPrestation 
            title = "Dégradé"
            price = "25"
            />
            <ListPrestation 
            title = "Dégradé"
            price = "25"
            />
            <ListPrestation 
            title = "Dégradé"
            price = "25"
            />
            <ListPrestation 
            title = "Dégradé"
            price = "25"
            />
            </section>
        </main>
        </>
    );
};

export default Prestations;