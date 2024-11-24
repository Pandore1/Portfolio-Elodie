import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

export default function Contact() {
  const [state, handleSubmit] = useForm("xeoqllzp");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
}
  return (
    <section id="contact" className="contactSection col-5">
       <div className="col-5 contactMessage">
            {/* <div className="imgBox">
              <img id="star" className="iconSvg" src={Star} alt="" />
              <img className="col-2" src={meHeader} alt="" />
            </div> */}
            <h2>N'hésitez pas à me contacter!</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac
              efficitur mauris. Mauris sit amet elementum metus. Fusce iaculis
              malesuada volutpat. Maecenas sodales rhoncus mauris, sit amet
              tempus dui molestie nec.{" "}
            </p>{" "}
            <button className="downloadCv">
              <a target="_blank" href="./CV.pdf">
                Télécharger CV
              </a>
            </button>
          </div>
      <form id="contactForm" className="contactForm col-5" action="https://formspree.io/f/xeoqllzp" method="POST">
        <h2 className="col-12">Contact</h2>

        <div className="contactInput col-6 ">
          <label htmlFor="name">Nom et prénom</label>
          <input
            type="text"
            placeholder="Nom et Prénom"
            name="nameInput"
            required
            id="name"
          />
                 <ValidationError 
        prefix="Name" 
        field="nameInput"
        errors={state.errors}
      />
        </div>
        <div className="contactInput col-12">
          <label htmlFor="email">Adresse Courriel</label>
          <input
            type="email"
            placeholder="Adresse courriel"
            name="emailInput"
            required
            id="email"
          />
           <ValidationError 
        prefix="Email" 
        field="emailInput"
        errors={state.errors}
      />
        </div>
        <div className="contactInput col-12">
          <label htmlFor="object">Sujet</label>
          <input
            type="text"
            placeholder="Objet du message"
            name="subjectInput"
            id="subject"
          />
                 <ValidationError 
        prefix="Email" 
        field="subjectInput"
        errors={state.errors}
      />
        </div>
        <div className="contactInput col-12">
          <label htmlFor="message">Votre Message</label>
          <textarea
            placeholder="Votre Message"
            name="messageInput"
            required
            id="message"
          ></textarea>
            <ValidationError 
        prefix="Message" 
        field="messageInput"
        errors={state.errors}
      />
        </div>
        <button className="col-6 contactBtn" type="submit" disabled={state.submitting}>
          Envoyer
        </button>
        <div class="g-recaptcha" data-sitekey=""></div>

      </form>
    </section>
  );
}
