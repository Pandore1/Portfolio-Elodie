import { useCallback, useState } from "react"
import './skillCircle.css';


export default function  SkillCircle(){
/*
        const [index,setIndex]=useState(0);
        const length=6;
        const handlePrevious=()=>{
            const newIndex=index-1;
            setIndex(newIndex<0?length-1:newIndex);
        }
        const handleNext=()=>{
            const newIndex=index+1;
            setIndex(newIndex>=length?0:newIndex);
        }*/

    return (

        
        <section className="skillBox col-6">
            <article className="skillItem col-3">
            <div className="imgBox">
                <img src="src\assets\illustrator.png" alt="" />
            </div>
            </article>
            <article className="skillItem col-3">
                <div className="imgBox skillItem col-3">
                    <img src="src\assets\photoshop.png" alt="Photoshop" />
                    </div>

            </article>
            <article className="skillItem col-3">
            
          <div className="imgBox skillItem col-3"><img src="src\assets\wordpress.png" alt="Wordpress" /></div>
                

            </article>
           

  

        </section>
        
    )
}

