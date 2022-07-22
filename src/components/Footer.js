import React, {useState} from 'react';
import '../style/Footer.scss';
import {FiSend} from 'react-icons/fi';

function Footer() {

    const [showCancelButton, setShowCancelButton] = useState(false); //Bouton annuler
    const [showSendButton, setShowSendButton] = useState(false);  //Bouton envoyer 

     //Les valeurs depuis la forme
    const [formVal, setFormVal] = useState({
        name:'',
        phone:'',
        email:'',
        message:'',
        error: null
    });

    const handleChange = (e) => {
        const {name,value} = e.target
        setFormVal(prevState=>{
            setShowCancelButton(true)
            if (value === '')
                setShowSendButton(false)
            return {
            ...prevState,[name]:value
        }})
        let all_filled = true
        Object.values(formVal).forEach((item)=>{
        if (item === '')
        {
            all_filled = false
        }
        })
        if (all_filled)
        {
        setShowSendButton(true)
        }
    }

    //Efface tous les champs 
    const cancelForm = () =>{
        setShowCancelButton(false)
        setShowSendButton(false)
        setFormVal({
        name:'',
        phone:'',
        email:'',
        message:''
        })
        document.getElementById("contact-form").reset();
    };

    //mois actuel
    const MONTHS = ['Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Decembre'];
    const currentMonthNum = new Date().getMonth();
    const currentMonth = MONTHS[currentMonthNum];

    //année actuelle 
    const currentYear =  new Date().getUTCFullYear();

    return (
        <div id="contact">
            {/* La carte */}
            <div className="map">
                Map
            </div>

            <div className="contact-container">
                <div>
                    <h1 className="footer-title">Contactez-nous</h1>
                    <form id="contact-form">
                        {/* Nom */}
                        <div className="nameField">
                            <input 
                            type="text" 
                            id="name" 
                            name="name" 
                            defaultValue={formVal.name} 
                            onChange={handleChange} 
                            required="required"
                            />
                            {/* <span className="floating-label">Votre nom<span className="star">*</span></span> */}
                        </div>
                        {/*Téléphone*/}
                        <div>
                            <input 
                            type="text" 
                            id="phone" 
                            name="fname" 
                            defaultValue={formVal.fname} 
                            onChange={handleChange} 
                            required="required"
                            />
                            {/* <span className="floating-label">Votre téléphone<span className="star">*</span></span> */}
                        </div>
                        {/* Email */}
                        <div>
                            <input 
                            type="email" 
                            id="email" 
                            name="email"
                            defaultValue={formVal.email} 
                            onChange= {handleChange} 
                            required="required"
                            />
                            {/* <span className="floating-label">Votre émail<span className="star">*</span></span> */}
                        </div>
                        {/* Message */}
                        <div>
                            <textarea
                            name='message' 
                            id="message"
                            placeholder=" " 
                            onChange={handleChange} 
                            required="required"
                            />
                            {/* <span className="floating-label message" >Votre message</span> */}
                        </div>
                        <div className="form-btn">
                            {/* {showCancelButton && ( */}
                            <button onClick={cancelForm} type="button">
                                ANNULER
                            </button>
                            {/* )} */}
                            {/* {showSendButton && ( */}
                            <button
                            type="submit">
                            <FiSend/> ENVOYER
                            </button>
                            {/* )} */}
                        </div>
                    </form>
                </div>   
                <div>
                    <h1 className="footer-title">Nous rencontrer</h1>

                </div>
                <div className="copyright">
                    <hr/>
                    <img src="/gds-footer.png" alt="groupe gds logo"/> 
                    <p>Tous les droits sont réservés Groupe Gds {currentMonth} {currentYear}.</p>
                </div>
            </div>
        </div>
    )
}

export default Footer