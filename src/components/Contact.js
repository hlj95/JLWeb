import React from "react";
import '../styles/Contact.css';

function Contact() {
        return (
            <div className="div">
                <div className="contactDiv">
                <h1>Contact To Schedule A Free Quote
                    !</h1>
      
                  
                    <div className="contactForm">

                        <br></br>
                        <input className="contactInput" required placeholder="Name:" type='text' label="username" invalid validation="Required Input" />
                        <br/>
                        <input  className="contactInput" required placeholder="E-Mail:" type='text' label="username" invalid validation="Required Input" />
                        <br/>
                        <input className="contactInput" required placeholder="Phone:" type='text' label="username" invalid validation="Required Input" />
                        <br/>

                        <input className="contactInput" required placeholder="Name" type='text' label="username" invalid validation="Required Input" />
                        <br/>
                        <input className="contactInput" required placeholder="Name" type='text' label="username" invalid validation="Required Input" />

                    </div>

                </div>

            </div>
        )
    }


export default Contact;


