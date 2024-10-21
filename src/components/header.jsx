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
                <h5>Développeuse Front-end, Designeuse</h5>
                    
             
                <button className="arrowScrollBtn"><a href="#about"><img src={ArrowScroll} alt="" /></a></button>
            </div>
         
          
        </header>
    )
}
