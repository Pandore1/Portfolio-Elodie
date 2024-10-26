import './styles/style.css';


//import imageUrl from "util/types"
import Blob from "./components/blob";
import Header from './components/header';
import Footer from './components/footer';
import Realization from './components/realization';
import Curve from "./assets/curve.png";
function App() {
 

  return (
    <div className='App'>
      
   
      <Header/>
      <main>

        <section id='about' className='aboutSection'>
          
          <h2>À propos</h2>
          <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac efficitur mauris. Mauris sit amet elementum metus. Fusce iaculis malesuada volutpat. Maecenas sodales rhoncus mauris, sit amet tempus dui molestie nec. Nulla nunc elit, iaculis semper sem nec, aliquam sagittis libero. Aliquam erat volutpat. Sed mollis, mi ac feugiat aliquet, nisi dui fringilla neque, vel porta arcu libero ut ipsum. In tincidunt orci quis porttitor ultrices. Nunc consectetur sem quis lacinia cursus.
          </p>
        </section>
      <Realization></Realization>
      <section id='contact' className="contactSection col-4">
            <form  className="contactForm col-5" action="">
            <h2 className="col-12">Contact</h2>
            <input type="file" name="" id="" />
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
                    <label htmlFor="message">Téléphone</label>
                <input type="tel" placeholder="Votre Message" name="phoneInput" required id="phone" />

                </div>
             
              <button className="col-8 contactBtn" type="submit">Envoyer</button>
            </form>
           </section>
      </main>
      <Footer></Footer>
  
      
      
    </div>
  )
}

export default App
