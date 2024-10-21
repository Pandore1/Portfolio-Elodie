import { useCallback, useState, useEffect } from "react"
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

export default function Navbar(){
    const [burgerOpen, setBurgerOpen] = useState(false);
    useEffect(() => {
        Events.scrollEvent.register('begin', (to,element)=>{
            console.log('begin',to,element);
        });

        Events.scrollEvent.register('end', (to, element) => {
            console.log('end', to, element);
          });


          scrollSpy.update();

          return () => {
            Events.scrollEvent.remove('begin');
            Events.scrollEvent.remove('end');
          }
      
    }, []);
    const toggleBurgerNav=()=>{
    setBurgerOpen(!burgerOpen);
}
    return(
        <nav  className={`menuBox${burgerOpen?' open':''}`}>
            <div className="burgerIcon" onClick={toggleBurgerNav}>
                <div className="burgerLine">

                </div>

            </div>
            <ul className="menu col-5">
                <li className="tab"><a className="tabLink" link-name='Accueil' href="">Accueil</a></li>
                <li className="tab"><a className="tabLink" link-name='Réalisation' href="#realization">Réalisation</a></li>
                <li className="tab"><a className="tabLink" link-name='Contact' href="#contact">Contact</a></li>

            </ul>
        </nav>
    )
}
