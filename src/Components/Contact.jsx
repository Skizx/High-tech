import './_contact.scss';

import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const [status, setStatus] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_fzu0ra7', 'template_7af5nv9', form.current, 'sMFiTbgIMwwCBsWxQ')
      .then((result) => {
          result.text;
          setStatus('SUCCESS')
      }, (error) => {
         error.text;
      });
  };

  useEffect(() => {
    if(status === 'SUCCESS') {
        alert('Message envoyé avec succes');
    }
  })

  return (
    <section id="contact" className="contact-block">
        <div className="wrapper">
        <div className="flex-center_content">
            <h2 className="contact-title txt-center">Contact</h2>
        </div>
            <div className="contact-text">
                <p>Vous pouvez me contacter pour prendre rendez-vous, ainsi que tout renseignement en remplissant les champs ci-dessous ou par téléphone au xxxxxxx.</p>
            </div>
            <div className="horaire">
                <h2 className='txt-center'>Horaire & informations</h2>
                <div className="horaire-content">
                    <div className="detail-content">
                        <div className="detail-block">
                            <div className="detail-title">
                                <h5>Déplacement</h5>
                            </div>
                            <div className="detail-text">
                                <p>Tous les jours</p>
                            </div>
                        </div>
                        <div className="detail-block">
                            <div className="detail-title">
                                <h5>Déplacement</h5>
                            </div>
                            <div className="detail-text">
                                <p>Tous les jours</p>
                            </div>
                        </div>
                        <div className="detail-block">
                            <div className="detail-title">
                                <h5>Déplacement</h5>
                            </div>
                            <div className="detail-text">
                                <p>Tous les jours</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <form className='contact-form' ref={form} onSubmit={sendEmail}>  
              <label>Nom*</label>
              <input type="text" required='required' name="user_name" />
              <label>Email*</label>
              <input type="email" required='required' name="user_email" />
              <label>Message*</label>
              <textarea required="required" name="message" />
              <input type="submit" value="Envoyer" />
            </form>
        </div>
    </section>
  );
};


export default Contact;