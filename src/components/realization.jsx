import { useState } from "react";
import RealizationTemplate from "./RealizationTemplate";
import RealizationModal from "./RealizationModal";
import realizationData from "../realizationData";
import SkillBtn from "./SkillBtn";
import meHeader from "../assets/personne.png";
import CurveWhiteDark from "../assets/curveWhiteDark.png";
import CurveDarkWhite from "../assets/curveDarkWhite.png";

export default function Realization() {
  const [realization, setRealization] = useState(realizationData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedRealization, setSelectedRealization] = useState(null);

  // Generate a unique set of skills for filtering
  const menuSkill = [
    ...new Set(
      realizationData.flatMap((item) => 
        item.skills.map((skill) => `${skill.skillName}|${skill.skillClass}`)
      )
    ),
  ].map((skillsStr) => {
    const [skillName, skillClass] = skillsStr.split("|");
    return { skillName, skillClass };
  });
  
  const filterSkill = (skillName) => {
    const newRealizationDisplay = realizationData.filter((realizationItem) =>
      realizationItem.skills.some((skill) => skill.skillName === skillName)
    );
    setRealization(newRealizationDisplay);
  };

  const openModal = (realization) => {
    setSelectedRealization(realization);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedRealization(null);
  };

  return (
    <>
      <nav className="realizationNav">
        <div className="curveBox  whiteDark">
          <img className="curve" src={CurveWhiteDark} alt="" />
        </div>
        <div className="col-12">
          <h1>Choisir la spécialisation</h1>
        </div>
        <div className="imgBox col-5">
          <img src={meHeader} alt="header image" />
        </div>
        <div className="col-6 specialityBox">
          <a id="design" className="specialityChoice col-12" href="#">
            <h2>Design</h2>
          </a>
          <a id="developpement" className="col-12 specialityChoice" href="#">
            <h2>Développement</h2>
          </a>
        </div>
        <div className="curveBox  darkWhite">
          <img className="curve" src={CurveDarkWhite} alt="" />
        </div>
      </nav>

      <section id="realization" className="realizationSection">
        <h2>Mes Réalisations:</h2>
        <div className="skillFilter">
          <p className="col-12">Rechercher par compétence</p>
          <SkillBtn filterSkill={filterSkill} menuSkill={menuSkill} />
        </div>
     
          {realization.map((realizationItem, index) => (
            <RealizationTemplate
              key={index}
              realization={realizationItem}
              onOpenModal={() => openModal(realizationItem)}
            />
          ))}
       

        {selectedRealization && (
          <RealizationModal
            isOpen={isModalOpen}
            onClose={closeModal}
            realization={selectedRealization}
          />
        )}
      </section>
    </>
  );
}
