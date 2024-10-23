import { useState } from "react";
import OpenMoreBtn from "./moreBtn";

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
    videoYt
}) {
    const [isRealizationOpen, setIsRealizationOpen] = useState(false);

    const realizationModalOpen = () => {
        setIsRealizationOpen(true);
    }
    const realizationModalClose = () => {
        setIsRealizationOpen(false);
    }
    function checkExtension(realizationFile) {
        return realizationFile.split(".").pop().toLowerCase();
      }
    const renderMedia = (fullImage, webSite, videoYt) => {
        // const extension = checkExtension(file);
        
        // Check for iframe source (website)
        if (webSite) {
          return (
            <iframe
              src={webSite}
              title="Embedded Content"
              frameBorder="0"
              style={{ width: "100%", height: "400px" }} // Adjust dimensions as needed
              allowFullScreen
            />
          );
        
        // Check for YouTube video or other video source
        } else if (videoYt) {
          return (
            <video 
            src={videoYt.replace("watch?v=", "embed/")}
              controls 
              style={{ width: "100%", minHeight: "400px" }} 
            />
          );
        
        // Check for image types (e.g., jpg, png, etc.)
        } else if (fullImage) {
          return (
            <img 
              src={fullImage} 
              alt="Realization Media" 
              style={{ width: "100%", height: "auto" }} 
            />
          );
        
        // If the file type is unsupported
        } else {
          return <p>Unsupported file type</p>;
        }
      };
    return (
        <>
            <div id={id} className="realization">
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
                {renderMedia(fullImage|| webSite||videoYt)}
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