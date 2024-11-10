import React from "react";
import OpenMoreBtn from "./moreBtn";

export default function RealizationModal({ isOpen, onClose, realization }) {
  if (!isOpen || !realization) return null;

  const { title, desc, webLink, videoYt, gallery, fullImage, skills, year } = realization;

  const renderMedia = () => {
    if (videoYt && videoYt.includes("youtube")) {
      const embedUrl = videoYt.replace("watch?v=", "embed/");
      return (
        <iframe
          className="ytVideo fullImageModal"
          src={embedUrl}
          title={title}
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          style={{ width: "100%", height: "auto" }}
        />
      );
    }

    if (fullImage) {
      return <img src={fullImage} className="fullImageModal" alt="Realization Media" style={{ width: "100%", height: "auto" }} />;
    }

    return <p>Unsupported file type</p>;
  };

  return (
    <div className="realizationModal open col-12">
      <div className="realizationTab">
        <h2 className="realizationTitle col-12">{title}</h2>
        <OpenMoreBtn isOpen={false} clicked={onClose} />
      </div>

      <div className="imgBox fullImageContainer col-6">
        {renderMedia()}
      </div>

      <div className="realizationInfo col-5">
        <div className="descriptionBox">
          <h3 className="col-12">Description</h3>
          <p>{desc}</p>
          <p>{year}</p>
        </div>

        <div className="skillList">
          <h3 className="col-12">Compétences nécessaires</h3>
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
            <h3 className="col-12">Galerie d'image</h3>
            {gallery.map((image, index) => (
              <div className="imgGallery imgBox col-6" key={index}>
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
    </div>
  );
}
