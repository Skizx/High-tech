/* eslint-disable react/prop-types */
import './banner.scss';

const Banner = (props) => {
    return (
        <>
            <div className="wrapper txt-center">
                <h3 className='banner-title'>{props.title}</h3>
                <p className='banner-text'>{props.text}</p>
                <div className="banner-btn">
                    <a href="#" role="button">
                        {props.textButton}
                    </a>
                </div>
            </div>
        </>
    );
};

export default Banner;