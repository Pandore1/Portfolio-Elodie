import { useCallback, useState } from "react"
import ArrowScroll from "../assets/arrow.png"
import Logo from "../assets/logo.webp"
import CurveWhitePurple from "../assets/curveWhitePurple.png";
import CurvePurpleWhite from "../assets/curvePurpleWhite.png";
import CurveWhiteDark from "../assets/curveWhiteDark.png";
import Navbar from "./navbar";
export default function Header() {
    return (
        <header className="backgroundHeader" >
      
           
            <div className="logoBox">
            <img className="logo" src={Logo} alt="" />

            </div>
            <Navbar></Navbar>

                <h1>
                    Élodie
                </h1>
                <h3>Développeuse Front-end, Designeuse</h3>
                    
             
               <a href="#about" className="arrowScrollBtn"><img src={ArrowScroll} alt="" /></a>
       
         
               <div className="curveBox whitePurple">
          <img className="curve" src={CurveWhitePurple} alt="" />
        </div>
        </header>
    )
}
