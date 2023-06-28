import './_contact.scss';

import { useRef, useState } from 'react';
import { FaHome, FaPhoneSquareAlt, FaMailBulk } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const [status, setStatus] = useState(false);

  function refresh() {
    window.top.location.reload()
  }

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fzu0ra7', 'template_7af5nv9', form.current, 'sMFiTbgIMwwCBsWxQ')
      .then((result) => {
          result.text;
          setStatus(true)
          setTimeout(refresh, 3000)
      }, (error) => {
         error.text;
      });
  };

  return (
    <>
    {status ? (
       
<section id="contact" className="contact-block">
            <div className="wrapper">
            <div className="flex-center_content">
                <h2 className="contact-title txt-center">Contact</h2>
            </div>
                <div className="contact-text">
                    <p>Vous pouvez me contacter pour prendre rendez-vous, ainsi que tout renseignement en remplissant les champs ci-dessous ou par téléphone au A venir.</p>
                </div>
                <div className="horaire">
                    <div className="formulaire-group">
                        <div className="horaire-content">
                            <div className="detail-content">
                    <h2 className=''>Horaire & informations</h2>
                                <div className="detail-block">
                                    <div className="detail-title">
                                        <FaHome />
                                        <h3>Déplacement</h3>
                                    </div>
                                    <div className="detail-text">
                                        <p>Tous les jours</p>
                                    </div>
                                </div>
                                <div className="detail-block">
                                    <div className="detail-title">
                                        <FaPhoneSquareAlt />
                                        <h3>Téléphone</h3>
                                    </div>
                                    <div className="detail-text">
                                        <p>A Venir</p>
                                    </div>
                                </div>
                                <div className="detail-block">
                                    <div className="detail-title">
                                        <FaMailBulk />
                                        <h3>Email</h3>
                                    </div>
                                    <div className="detail-text">
                                        <p>prochainement</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <form className='contact-form' ref={form} onSubmit={sendEmail}>
                            <div className="form-title">
                                <h4>Formulaire de contact</h4>
                            </div>  
                            <label htmlFor="user_name1">Nom :*</label>
                            <input type="text" required='required' name="user_name" placeholder='Prenom' id='user_name1' />
                            <label htmlFor="user_email1">Email :*</label>
                            <input type="email" required='required' name="user_email" placeholder='Adressmail@gmail.com' id='user_email1' />
                            <label htmlFor="message1">Message :*</label>
                            <textarea required="required" name="message" placeholder='Bonjour, je souhaiterais...' id='message1'/>
                            <input type="submit" value="Envoyer" />
                            </form>
                            </div>
                    </div>
            </div>
            <div className="succes-message_block">
                <p className='succes-message'>Message envoyé avec succés !</p>
            </div>
        </section>
        
    ) : (
        <section id="contact" className="contact-block">
            <div className="wrapper">
            <div className="flex-center_content">
                <h2 className="contact-title txt-center">Contact</h2>
            </div>
                <div className="contact-text">
                    <p>Vous pouvez me contacter pour prendre rendez-vous, ainsi que tout renseignement en remplissant les champs ci-dessous ou par téléphone au A venir.</p>
                </div>
                <div className="horaire">
                    <div className="formulaire-group">
                        <div className="horaire-content">
                            <div className="detail-content">
                    <h2 className=''>Horaire & informations</h2>
                                <div className="detail-block">
                                    <div className="detail-title">
                                        <FaHome />
                                        <h3>Déplacement</h3>
                                    </div>
                                    <div className="detail-text">
                                        <p>Tous les jours</p>
                                    </div>
                                </div>
                                <div className="detail-block">
                                    <div className="detail-title">
                                        <FaPhoneSquareAlt />
                                        <h3>Téléphone</h3>
                                    </div>
                                    <div className="detail-text">
                                        <p>A venir</p>
                                    </div>
                                </div>
                                <div className="detail-block">
                                    <div className="detail-title">
                                        <FaMailBulk />
                                        <h3>Email</h3>
                                    </div>
                                    <div className="detail-text">
                                        <p>Prochainement</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                            <form className='contact-form' ref={form} onSubmit={sendEmail}>
                            <div className="form-title">
                                <h4>Formulaire de contact</h4>
                            </div>  
                            <label htmlFor="user_name1">Nom :*</label>
                            <input type="text" required='required' name="user_name" placeholder='Prenom' id='user_name1' />
                            <label htmlFor="user_email1">Email :*</label>
                            <input type="email" required='required' name="user_email" placeholder='Adressmail@gmail.com' id='user_email1' />
                            <label htmlFor="message1">Message :*</label>
                            <textarea required="required" name="message" placeholder='Bonjour, je souhaiterais...' id='message1'/>
                            <input type="submit" value="Envoyer" />
                            </form>
                            </div>
                    </div>
            </div>
        </section>
        )}
    </>
      );
    };


export default Contact;