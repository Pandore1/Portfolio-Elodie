import { useCallback, useState } from "react"
import ArrowScroll from "../assets/arrow.png"

import Navbar from "./navbar";
export default function Header() {
    return (
        <header>
            <Navbar></Navbar>

            <div className="backgroundHeader">

                <h1>
                    Élodie Picard
                </h1>
                <h2>Développeuse Front-end, Designeuse</h2>
                    
             
               <a href="#about" className="arrowScrollBtn"><img src={ArrowScroll} alt="" /></a>
            </div>
         
          
        </header>
    )
}
