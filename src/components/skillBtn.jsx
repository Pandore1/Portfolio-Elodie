import { useCallback, useState, useEffect } from "react";


export default function SkillBtn({ filterSkill, menuSkill }) {
    return (
      <div className="filterSkill">
        {menuSkill.map((skill, idx) => {
          return (
            <button 
              key={idx} 
              onClick={() => filterSkill(skill.skillName)} 
              className={`skill ${skill.skillClass}`}
            >
              {skill.skillName}
            </button>
          );
        })}
      </div>
    );
  }