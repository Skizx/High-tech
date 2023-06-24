import './gallery.scss';
import ModalImage from "react-modal-image";


const Gallery = () => {
    return (
        <>
        <section id="galerie" className="gallery-block">
            <div className="wrapper">
                <div className="flex-center_content">
                    <h2 className="gallery-title txt-center">Galeries photos</h2>
                </div>
                    <p className='txt-center'>Quelques exemples de mes réalisations.</p>
                <div className="gallery-container">
                    <figure className="gallery-card">
                            <ModalImage
                            small = {"/images/carre-plongeant.png"} 
                            medium = {"/images/carre-plongeant.png"}
                            alt= "Photo femme coupe carre"
                            className='modal-image'
                            />  
                    </figure>
                    <figure className="gallery-card">
                            <ModalImage
                            small = {"/images/woman-g0065de704_1280.jpg"} 
                            medium = {"/images/woman-g0065de704_1280.jpg"}
                            alt= "Photo cheveux tressé"
                            className='modal-image'
                            />  
                    </figure>
                    <figure className="gallery-card">
                            <ModalImage
                            small = {"/images/woman-gd2f852243_1280.jpg"} 
                            medium = {"/images/woman-gd2f852243_1280.jpg"}
                            alt= "Photo femme fond noir&blanc"
                            className='modal-image'
                            />  
                    </figure>
                    <figure className="gallery-card">
                            <ModalImage
                            small = {"/images/model-g2fcb247dd_1280.jpg"} 
                            medium = {"/images/model-g2fcb247dd_1280.jpg"}
                            alt= "Photo fille blonde dans un champ"
                            className='modal-image'
                            />  
                    </figure>
                    <figure className="gallery-card">
                            <ModalImage
                            small = {"/images/man-gc080c1652_1280.jpg"} 
                            medium = {"/images/man-gc080c1652_1280.jpg"}
                            alt= "Homme coiffure fond noir&blanc"
                            className='modal-image'
                            />  
                    </figure>
                </div>
            </div>
        </section>  
        </>
    );
};

export default Gallery;