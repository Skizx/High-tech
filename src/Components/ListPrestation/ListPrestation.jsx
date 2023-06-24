/* eslint-disable react/prop-types */
import './listprestation.scss';
import { ImScissors } from 'react-icons/im';

const ListPrestation = (props) => {
    return (
        <>
                
            <div className='prestations'>
                <div className="prestations-text">
                    <h4>{props.title}</h4>
                </div>
                <p className='prestations-text--p'>{props.price}€</p>
                <div className="prestations_animation">
                    <div className="icon-presta">
                        <ImScissors />
                    </div>
                </div>
            </div>
                
        </>
    );
};

export default ListPrestation;