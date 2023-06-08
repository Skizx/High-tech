/* eslint-disable react/prop-types */
import './listprestation.scss';

const ListPrestation = (props) => {
    return (
        <>
                <ul className="list-container">
                    <li>{props.title}  <span>{props.price}€</span></li>
                </ul>
                <img src={props.image} alt="" />
        </>
    );
};

export default ListPrestation;