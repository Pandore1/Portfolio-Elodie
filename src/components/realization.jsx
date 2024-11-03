import { useState } from "react";
import RealizationTemplate from "./realizationTemplate";
import realizationData from "../realizationData";
import SkillBtn from "./skillBtn";
import meHeader from "../assets/personne.png";
import Curve from "../assets/curve.png";
import CurveWhitePurple from "../assets/curveWhitePurple.png";
import CurvePurpleWhite from "../assets/curvePurpleWhite.png";
import CurveWhiteDark from "../assets/curveWhiteDark.png";
import CurveDarkWhite from "../assets/curveDarkWhite.png";

export default function Realization() {
  const [realization, setRealization] = useState(realizationData);

  const menuSkill = [
    ...new Set(
      realizationData.flatMap((item) => 
        item.skills.map((skill) => `${skill.skillName}|
          ${skill.skillClass}`)
         
      
      )
    ),
  ].map((skillsStr)=>{
    const [skillName,skillClass] = skillsStr.split("|");
    return{skillName,skillClass};
  });
  
  const filterSkill = (skillName) => {
    const newRealizationDisplay = realizationData.filter((realizationItem) =>
      realizationItem.skills.some((skill) => skill.skillName === skillName) // Correct filtering condition
    );
    setRealization(newRealizationDisplay);
  };

return (
  <>
    <nav className="realizationNav">
 
    <div className="curveBox">
      <img  className="curve whiteDark" src={CurveWhiteDark} alt="" />

      </div>
      <div className="col-12">
      <h1 >Choisir la spécialisation</h1>

      </div>
      <div className="imgBox col-5">
        <img src={meHeader} alt="" />
      </div>
      <div className="col-6 specialityBox">
       
          <a id="design" className="specialityChoice col-12" href="">
            <h2>Design</h2>
          </a>
        
        
          <a id="developpement" className="col-12 specialityChoice" href=""> <h2>Développement</h2></a>
         
        
      </div>
      <div className="curveBox">
      <img  className="curve darkWhite" src={CurveDarkWhite} alt="" />

      </div>

    </nav>
    <section id="realization" className="realizationSection">
      <h2>Mes Réalisations:</h2>
      <div className="skillFilter">
        <p className="col-12">Rechercher par compétence</p>
        <SkillBtn filterSkill={filterSkill} menuSkill={menuSkill} />
      </div>
      {realization.map((realizationItem, idx) => ( // Render filtered realizations
        <RealizationTemplate 
          key={idx}
          id={idx}
          title={realizationItem.title}
          desc={realizationItem.desc}
          skills={realizationItem.skills}  
          type={realizationItem.type}
          year={realizationItem.year}
          previewImage={realizationItem.previewImage}

          fullImage={realizationItem.fullImage}
          videoYt={realizationItem.videoYt}
          webLink={realizationItem.webLink}
          gallery={realizationItem.gallery}
  
        />
      ))}
    </section>
  </>
);
}