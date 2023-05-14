import './prestation.scss';
import prestationData from '../../Data/prestationData.json';
import PrestationCard from './PrestationCard';
import { Link } from 'react-router-dom';

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
                            <Link to={`/prestation/${prestation.id}`}>
                                <PrestationCard
                                picture={prestation.picture}
                                name={prestation.name}
                                alt={prestation.altpicture}
                                price={prestation.price}
                                />
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </div>
        </section> 
        </>
    );
};

export default Prestation;