import React from "react";
import OpenMoreBtn from "./moreBtn";

export default function RealizationTemplate({ realization, onOpenModal }) {
  const { title, desc, previewImage } = realization;

  return (
    <article className="realization col-3">
      <div className="realizationTab">
        <h3 className="realizationTitle">{title}</h3>
        <OpenMoreBtn isOpen={true} clicked={onOpenModal} />
      </div>
      <div className="imgBox">
        <img src={previewImage} alt={title} />
        <div className="resumeRealization">
          <p>{desc}</p>
          <button onClick={onOpenModal}>Voir</button>
        </div>
      </div>
    </article>
  );
}
