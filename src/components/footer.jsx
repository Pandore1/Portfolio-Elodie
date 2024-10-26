export default function Footer(){
    return (

        <footer>
 
        
                
           
            <h3>Contact</h3>
            <form  className="contactForm" action="">
                <div className="contactInput col-4" > 
                    <label htmlFor="email">Adresse Courriel</label>
                <input type="email" placeholder="Adresse courriel" name="emailInput" required id="email" />

                </div>
             
             
              
            </form>

        </footer>
    )
}