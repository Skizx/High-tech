/* eslint-disable react/prop-types */
import './listprestation.scss';

const ListPrestation = (props) => {
    return (
        <>
            <div className="wrapper">
                <ul className="list-container">
                    <li>{props.title}  <span>{props.price}€</span></li>
                </ul>
            </div> 
        </>
    );
};

export default ListPrestation;