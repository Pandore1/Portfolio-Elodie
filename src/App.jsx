import './style.css';


//import imageUrl from "util/types"
import Blob from "./components/blob";
import Header from './components/header';
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
      </main>
      <footer>
        <h2>Contact</h2>
          
      </footer>
  
      
      
    </div>
  )
}

export default App
