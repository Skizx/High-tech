import './_footer.scss';
import { AiOutlineInstagram , AiOutlineTwitter, AiOutlineCopyrightCircle } from 'react-icons/ai';
import { FaFacebookF } from 'react-icons/fa';

const Footer = () => {
    return (
        <>
        <section id="footer" className="footer-block">
            <div className="wrapper txt-center">
                <h4 className='footer-title'>Suivez-moi</h4>
                <div className="footer-list_img">
                    <img src="/images/30221.jpg" alt="" />
                    <img src="/images/cahier-fournitures-beaute.jpg" alt="" />
                    <img src="/images/tondeuses-ciseaux-plat.jpg" alt="" />
                    <img src="/images/tondeuses-ciseaux-plat.jpg" alt="" />
                    <img src="/images/30221.jpg" alt="" />
                </div>
                <div className="footer-list_icon">
                    <a href="#">
                        <AiOutlineInstagram />
                    </a>
                    <a href="#">
                        <FaFacebookF />
                    </a>
                    <a href="#">
                        <AiOutlineTwitter />
                    </a>
                </div>
                <p>Copyright <AiOutlineCopyrightCircle /> 2023</p>
            </div>
        </section>
        </>
    );
};

export default Footer;