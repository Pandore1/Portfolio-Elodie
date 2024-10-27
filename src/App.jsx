import './styles/style.css';


//import imageUrl from "util/types"
import Header from './components/header';
import Realization from './components/realization';
import meHeader from "./assets/personne.png";
import Star from "./assets/star.svg";
import Splash from "./assets/splash.svg";
import CurveWhitePurple from "./assets/curveWhitePurple.png";
import CurvePurpleWhite from "./assets/curvePurpleWhite.png";
import CurveWhiteDark from "./assets/curveWhiteDark.png";
function App() {
 

  return (
    <div className='App'>
      
   
      <Header/>
      <main>

        <section id='about' className='aboutSection col-5'>
          
          <h2>À propos</h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac efficitur mauris. Mauris sit amet elementum metus. Fusce iaculis malesuada volutpat. Maecenas sodales rhoncus mauris, sit amet tempus dui molestie nec. 
          <br/> Nulla nunc elit, iaculis semper sem nec, aliquam sagittis libero. Aliquam erat volutpat. Sed mollis, mi ac feugiat aliquet, nisi dui fringilla neque, vel porta arcu libero ut ipsum. In tincidunt orci quis porttitor ultrices. Nunc consectetur sem quis lacinia cursus.
          </p>
        </section>
      <Realization></Realization>
      <section id='contact' className="contactSection">
        <div  className='col-5 contactMessage'>
        
        <div className='imgBox'>
          <img id='star' className='iconSvg' src={Star} alt="" />
         <img className='col-2' src={meHeader} alt="" /></div>
       

        <h3>N'hésitez pas à me contacter!</h3>
       
      <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac efficitur mauris. Mauris sit amet elementum metus. Fusce iaculis malesuada volutpat. Maecenas sodales rhoncus mauris, sit amet tempus dui molestie nec. </p>    <button  className='downloadCv'>
            <a target="_blank" href="./CV.pdf">Télécharger CV</a>

            </button>
        </div>
        
            <form  className="contactForm col-5" action="">
            <h2 className="col-12">Contact</h2>
         
            <div className="contactInput " > 
                    <label htmlFor="name">Nom et prénom</label>
                <input type="name" placeholder="Nom et Prénom" name="nameInput" required id="name" />

                </div>
                <div className="contactInput " > 
                    <label htmlFor="email">Adresse Courriel</label>
                <input type="email" placeholder="Adresse courriel" name="emailInput" required id="email" />

                </div>
                <div className="contactInput" > 
                    <label htmlFor="phone">Téléphone</label>
                <input type="tel" placeholder="Téléphone" name="phoneInput" required id="phone" />

                </div>
                <div className="contactInput" > 
                    <label htmlFor="message">Votre Message</label>
                    <textarea placeholder="Votre Message" name="phoneInput" required id="message"  ></textarea>

                </div>
             
              <button className="col-8 contactBtn" type="submit">Envoyer</button>
            </form>
           </section>
      </main>
      <footer>
        <img src={CurveWhiteDark} className='curve whitePurple' alt="" />
 
        
 <p>Élodie Picard 2024</p>



</footer>
      
      
    </div>
  )
}

export default App
