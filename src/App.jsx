import "./styles/style.css";

//import imageUrl from "util/types"
import Header from "./components/header";
import Realization from "./components/realization";
import Contact from "./components/contact";
import Splash from "./assets/splash.svg";
import CurveWhitePurple from "./assets/curveWhitePurple.png";
import CurvePurpleWhite from "./assets/curvePurpleWhite.png";
import CurveWhiteDark from "./assets/curveWhiteDark.png";
function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <section id="about" className="aboutSection">
          <h2>À propos</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. In ac
            efficitur mauris. Mauris sit amet elementum metus. Fusce iaculis
            malesuada volutpat. Maecenas sodales rhoncus mauris, sit amet tempus
            dui molestie nec.
            <br /> Nulla nunc elit, iaculis semper sem nec, aliquam sagittis
            libero. Aliquam erat volutpat. Sed mollis, mi ac feugiat aliquet,
            nisi dui fringilla neque, vel porta arcu libero ut ipsum. In
            tincidunt orci quis porttitor ultrices. Nunc consectetur sem quis
            lacinia cursus.
          </p>
        </section>
        <Realization></Realization>
        <Contact></Contact>
        

      </main>
      <footer>
        <div className="curveBox">
          <img className="curve whiteDark" src={CurveWhiteDark} alt="" />
        </div>

        <p>Élodie Picard 2024</p>
      </footer>
    </div>
  );
}

export default App;
