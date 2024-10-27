import { useState } from "react";
import OpenMoreBtn from "./moreBtn";
import CurveWhitePurple from "../assets/curveWhitePurple.png";

export default function RealizationTemplate({
  title,
  id,
  desc,
  type,
  skills,
  year,
  gallery,
  previewImage,
  fullImage,
  webSite,
  videoYt,
}) {
  const [isRealizationOpen, setIsRealizationOpen] = useState(false);

  const realizationModalOpen = () => {
    setIsRealizationOpen(true);
  };
  const realizationModalClose = () => {
    setIsRealizationOpen(false);
  };

  function checkExtension(realizationFile) {
    return realizationFile.split(".").pop().toLowerCase();
  }

  const renderMedia = (fullImage, webSite, videoYt) => {
    if (webSite) {
      return (
        <iframe
          src={webSite}
          title="Embedded Content"
          frameBorder="0"
          style={{ width: "100%", height: "400px" }}
          allowFullScreen
        />
      );
    }

    const youtubeUrl = fullImage || videoYt;
    if (
      youtubeUrl &&
      (youtubeUrl.includes("youtube.com") || youtubeUrl.includes("youtu.be"))
    ) {
      const embedUrl = youtubeUrl.includes("watch?v=")
        ? youtubeUrl.replace("watch?v=", "embed/")
        : youtubeUrl.replace("youtu.be/", "youtube.com/embed/");

      return (
        <iframe
          className="ytVideo"
          src={embedUrl}
          title="YouTube video player"
          frameBorder="0"
          style={{ minWidth: "80%", height:"90%"}}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      );
    }

    if (videoYt && ["mp4", "webm", "ogg"].includes(checkExtension(videoYt))) {
      return (
        <video
          src={videoYt}
          controls
          style={{ width: "100%", minHeight: "400px" }}
        />
      );
    }

    if (
      fullImage &&
      ["jpg", "jpeg", "png", "gif", "bmp", "webp"].includes(
        checkExtension(fullImage)
      )
    ) {
      return (
        <img
          src={fullImage}
          alt="Realization Media"
          style={{ width: "100%", height: "auto" }}
        />
      );
    }

    return <p>Unsupported file type</p>;
  };
  return (
    <>
      <article id={id} className="realization col-3">
        <div className="realizationTab">
          <h3 className="realizationTitle">{title}</h3>
          <OpenMoreBtn isOpen={true} clicked={realizationModalOpen} />
        </div>
        <div className="imgBox">
          <img src={previewImage} alt="" />
          <div className="resumeRealization">
            <p>{desc}</p>
            <button onClick={realizationModalOpen}>Voir</button>
          </div>
        </div>
      </article>
      <article
        className={`realizationModal ${isRealizationOpen ? "open" : ""}`}
      >
        <div className="realizationTab">
          
          <h2 className="realizationTitle col-12">{title}</h2>
          <OpenMoreBtn isOpen={false} clicked={realizationModalClose} />
        </div>
        <div className="col-12 realizationContent">
        <div className="imgBox">
          {renderMedia(webSite || videoYt || fullImage)}
        </div>
        <div className="realizationInfo col-6 container">
          <div className="descriptionBox">
          <h3 className="col-12">Description</h3>
          <p>{desc}</p>
          <p>{year}</p>
          </div>
    
          <div className="skillList">
            <h3 className="col-12">Compétences nécessaires</h3>
            {skills.map((skill, index) => (
              <button
                disabled
                key={index}
                className={`skill ${skill.skillClass}`}
              >
                {skill.skillName}
              </button>
            ))}
          </div>
          <div className="galleryContainer">
            <h3 className="col-12">Galerie d'image</h3>
            {gallery.map((image, index) => (
              <div className="imgGallery imgBox col-6" key={index}>
                <img src={image} alt={`Gallery image ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
        </div>
        
        <div className="curveBox">
      <img  className="curve whitePurple" src={CurveWhitePurple} alt="" />

      </div>
      </article>
    </>
  );
}
