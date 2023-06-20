/* eslint-disable react/prop-types */
import './prestation.scss';

const PrestationCard = (props) => {

    return (
        <article>
                <img src={props.picture} alt={props.alt} />
                <figcaption className="card-hover">
                    <div className="border">
                        <h4>{props.name}</h4>
                    </div>
                </figcaption>
                    <div className="title-card">
                        <p>Coiffure {props.title}</p>
                    </div>    
        </article>
    );
};

export default PrestationCard;