import { useState } from "react";
import RealizationTemplate from "./realizationTemplate";
import realizationData from "../realizationData";
import SkillBtn from "./skillBtn";
import meHeader from "../assets/personne.png";
import Curve from "../assets/curve.png";


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
 
      {/* <img  className="separationCurve" src={Curve} alt="" /> */}
    
      <h1>Choisir la spécialiation</h1>
      <div className="imgBox col-5">
        <img className="" src={meHeader} alt="" />
      </div>
      <div className="col-6 specialityBox">
        <div id="design" className="specialityChoice">
          <a href="">
            <h2>Design</h2>
          </a>
        </div>
        <div id="developpement" className="specialityChoice">
          <h2>Développement</h2>
        </div>
      </div>
    </nav>
    <section id="realization" className="realizationSection">
      <h2>Mes Réalisations:</h2>
      <div className="skillFilter col-12">
        <p>Rechercher par compétence</p>
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
          webSite={realizationItem.webSite}
          gallery={realizationItem.gallery}
  
        />
      ))}
    </section>
  </>
);
}