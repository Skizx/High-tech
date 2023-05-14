import './prestation.scss';

const PrestationCard = (props) => {

    console.log(props);

    return (
        <article>
                <img src={props.picture} alt={props.alt} />
                <figcaption className="card-hover">
                    <div className="border">
                        <p>{props.name}</p>
                        <p>{props.price} €</p>
                    </div>
                </figcaption>
        </article>
    );
};

export default PrestationCard;