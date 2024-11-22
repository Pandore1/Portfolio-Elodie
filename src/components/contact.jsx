
export default function Contact() {
  const handleSubmit = (event) => {
    event.preventDefault(); // Empêche le rechargement de la page

    const form = event.target;
    const formData = new FormData(form);

    const jsonData = {};
    formData.forEach((value, key) => {
      jsonData[key] = value;
    });

    fetch("../contact.php", {
      method: "POST",
      mode: "cors",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(jsonData),
    })
      .then((response) => response.text())
      .then((message) => {
        alert(message); // Affiche le message de succès ou d'erreur
      })
      .catch((err) => {
        console.error("Erreur lors de l'envoi : ", err);
      });
  };

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
      <form id="contactForm" className="contactForm col-5" onSubmit={handleSubmit}>
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
        </div>
        <div className="contactInput col-12">
          <label htmlFor="object">Téléphone</label>
          <input
            type="text"
            placeholder="Objet du message"
            name="objectInput"
            id="object"
          />
        </div>
        <div className="contactInput col-12">
          <label htmlFor="message">Votre Message</label>
          <textarea
            placeholder="Votre Message"
            name="message"
            required
            id="message"
          ></textarea>
        </div>
        <button className="col-6 contactBtn" type="submit">
          Envoyer
        </button>
      </form>
    </section>
  );
}
