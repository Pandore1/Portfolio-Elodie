import React from "react";
import OpenMoreBtn from "./moreBtn";

export default function RealizationModal({ isOpen, onClose, realization }) {
  if (!isOpen || !realization) return null;

  const { title, desc, webLink, videoYt, gallery, fullImage, skills, year,task } = realization;

  const renderMedia = () => {
    if (videoYt && videoYt.includes("youtube")) {
      const embedUrl = videoYt.replace("watch?v=", "embed/");
      return (
        <iframe
          className="ytVideo"
          src={embedUrl}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ maxWidth: "100%",minWidth:"90%", minHeight: "70%",maxHeight:"fit-content"}}
        />
      );
    }

    if (fullImage) {
      return <img src={fullImage} alt="Realization Media"/>;
    }

    return <p>Unsupported file type</p>;
  };

  return (
    <article className="realizationModal open">
      <span className="realizationTab">
        <h3 className="realizationTitle">{title}</h3>
        <OpenMoreBtn isOpen={false} clicked={onClose} />
      </span>

    <div className="fullImageContainer">
        {renderMedia()}
      </div>

      <div className="realizationInfo">
        <div>
          <h3>Description</h3>
          <p>{desc}</p>
          <p>{year}</p>


          {task && (
            <>
            <h3>Mon rôle dans le projet</h3>
            <p>{task}</p>
            </>
          )}
      </div>
        

        <div className="skillList">
          <h3>Compétences nécessaires</h3>
          {skills.map((skill, index) => (
            <button
              key={index}
              className={`skill ${skill.skillClass}`}
              disabled
            >
              {skill.skillName}
            </button>
          ))}
        </div>

        {gallery && (
          <div className="galleryContainer">
            <h3>Galerie d'image</h3>
            {gallery.map((image, index) => (
              <div className="imgGallery imgBox col-3" key={index}>
                <img src={image} alt={`Gallery image ${index + 1}`} />
              </div>
            ))}
          </div>
        )}

        {webLink && (
          <button className="visitSiteBtn">
            <a target="_blank" rel="noopener noreferrer" href={webLink}>
              Visiter le site
            </a>
          </button>
        )}
      </div>
  
  
    </article>
  );
}
