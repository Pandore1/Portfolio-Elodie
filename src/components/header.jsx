import { useCallback, useState } from "react"
import ArrowScroll from "../assets/arrow.png"
import Logo from "../assets/logo.webp"

import Navbar from "./navbar";
export default function Header() {
    return (
        <header className="backgroundHeader" >
      
           
            <div className="imgBox logoBox">
            <img className="logo" src={Logo} alt="" />

            </div>
            <Navbar></Navbar>

                <h1>
                    Élodie
                </h1>
                <h3>Développeuse Front-end, Designeuse</h3>
                    
             
               <a href="#about" className="arrowScrollBtn"><img src={ArrowScroll} alt="" /></a>
       
         
          
        </header>
    )
}
