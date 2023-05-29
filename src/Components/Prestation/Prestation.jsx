import './prestation.scss';
import prestationData from '../../Data/prestationData.json';
import PrestationCard from './PrestationCard';
import { Link } from 'react-router-dom';
import { RxScissors } from 'react-icons/rx';

const Prestation = () => {
    return (
        <>
        <section id="prestation" className="prestation-block">
        <div className="wrapper">
            <div className="txt-center flex-center_content">
                <h3 className='prestation-title'>Prestations & Tarifs</h3>
            </div>
            <div className="card-block">
                <div className="card-container">
                    {prestationData.map((prestation, id) => (
                        <div className='card-prestation' key={id}>
                            <Link to="/prestation">
                                <PrestationCard
                                picture={prestation.picture}
                                name={prestation.name}
                                alt={prestation.altpicture}
                                price={prestation.price}
                                />
                            </Link>
                        </div>
                    ))}
                        <figure className="gallery-card">
                        <Link to="/galerie">
                        <div className="gallery-button">
                        <RxScissors />
                        <p>Voir plus!</p>
                        </div>
                        </Link>
                    </figure>
                </div>
            </div>
        </div>
        </section> 
        </>
    );
};

export default Prestation;