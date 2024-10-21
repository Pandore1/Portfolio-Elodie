import { useState } from "react";
import OpenMoreBtn from "./moreBtn";

export default function RealizationTemplate({
    title,
    id,
    desc,
    type,
    skills,
    previewImage,
    fullImage,
    year,
    gallery,
    iframeSrc,
}) {
    const [isRealizationOpen, setIsRealizationOpen] = useState(false);

    const realizationModalOpen = () => {
        setIsRealizationOpen(true);
    }
    const realizationModalClose = () => {
        setIsRealizationOpen(false);
    }
    function checkExtension(realizationFile){
        return realizationFile.split('.').pop().toLowerCase();
    }
    const renderMedia = (file, iframeSource) => {
        const extension = checkExtension(file);
        if (iframeSource) {
          return (
            <iframe
              src={iframeSource}
              title={title}
              frameBorder="0"
              style={{ width: "100%", height: "100%" }} // Adjust height as needed
            />
          );
        } else if (["jpg", "jpeg", "png", "gif", "bmp", "webp"].includes(extension)) {
          return <img src={file} alt={title} style={{ width: "100%" }} />;
        } else if (["mp4", "webm", "ogg"].includes(extension)) {
          return <video src={file} controls style={{ width: "100%", minHeight:"100%" }} />;
        } else {
          return <p>Unsupported file type</p>;
        }
      };
    return (
        <>
            <div id={id} className="realization col-3">
                <div className="realizationTab">
                    <h3>{title}</h3>
                    <OpenMoreBtn isOpen={true} clicked={realizationModalOpen} />
                </div>
                <div className="imgBox">
                    <img src={previewImage} alt="" />
                    <div className="resumeRealization">
                        <p>{desc}</p>
                        <button onClick={realizationModalOpen}>Voir</button>
                    </div>
                 
                </div>
            </div>
            <div className={`realizationModal ${isRealizationOpen ? 'open' : ''}`}>
             
                <div className="imgBox">
                    {renderMedia(fullImage,iframeSrc)}
                </div>
                <div className="realizationInfo">
                    <OpenMoreBtn isOpen={false} clicked={realizationModalClose} />
                    <h2>{title}</h2>
                    <p>{desc}</p>
                    <p>{year}</p>
                    <div className="skillList">
                        <h3>Compétences nécessaires</h3>
                        {skills.map((skill, index) => (
                            <button disabled key={index} className={`skill ${skill.skillClass}`}>
                                {skill.skillName}
                            </button>
                        ))}
                    </div>
                    <div className="galleryContainer">
                        <h4>Galerie d'image</h4>
                    {gallery.map((image, index) => (
          <div className="imgBox galleryImage" key={index}>
            <img src={image} alt={`Gallery image ${index + 1}`} />
          </div>
        ))}
                    </div>
                  
                </div>
            </div>
        </>
    );
}