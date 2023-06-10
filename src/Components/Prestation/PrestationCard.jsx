/* eslint-disable react/prop-types */
import './prestation.scss';

const PrestationCard = (props) => {

    return (
        <article>
                <img src={props.picture} alt={props.alt} />
                <figcaption className="card-hover">
                    <div className="border">
                        <p>{props.name}</p>
                    </div>
                </figcaption>
        </article>
    );
};

export default PrestationCard;