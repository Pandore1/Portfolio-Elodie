import { useState } from "react";
import RealizationTemplate from "./realizationTemplate";
import RealizationModal from "./realizationModal";
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
 
        
      <section id="realization" className="realizationSection">
        <nav className="skillFilter">
                <h2>Mes Réalisations:</h2>
          <p className="col-12">Rechercher par compétence</p>
          <SkillBtn filterSkill={filterSkill} menuSkill={menuSkill} />
        </nav>
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
