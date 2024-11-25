import "./styles/style.css";

//import imageUrl from "util/types"
import Header from "./components/header";
import Realization from "./components/realization";
import Contact from "./components/contact";

import CurveWhitePurple from "./assets/curveWhitePurple.png";

function App() {
 
  return (
    <div className="App">
      <Header />
      <main>
        <section id="about" className="aboutSection col-4">
          <h2>À propos</h2>
          <p>
          Bonjour, 
Je m’appelle Élodie Picard. Je suis passionnée par la nature, la science et les animaux. J’ai intégré le Cégep de Matane en 2023, dans la technique d’intégration multimédia. Je suis plutôt doué dans tous les domaines. Bien que j’aie un penchant pour le développement web ainsi que le design graphique. Je m’intéresse au développement front-end ainsi qu’à la création d’univers graphique, passant par les personnages et l’environnement visuel. Je suis très curieuse et engagée à faire le meilleur travail possible et à surpassé les attentes demandées.

          </p>
        </section>
        <Realization></Realization>
        <Contact></Contact>
        

      </main>
      <footer>
        <div className="curveBox whitePurple">
          <img className="curve" src={CurveWhitePurple} alt="" />
        </div>

        <p>Élodie Picard 2024</p>
      </footer>
    </div>
  );
}

export default App;
