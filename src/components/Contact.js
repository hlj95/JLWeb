import React from "react";
import '../styles/Contact.css';

import {
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBCardFooter,
    MDBBtn,
    MDBIcon,
    MDBTextArea,
} from "mdb-react-ui-kit";

function Contact() {
    return (
        <div className="divC">
            <div className="contactDiv"
            >
                <MDBCard >

                    <h3>Contact To Schedule A Free Quote!</h3>
                    <MDBCardBody>



                        <div className="contactForm">

                            <MDBInput className="input-fields" name="" required type="text" label="Name" invalid validation="Please provide your Name" />
                            <br />
                            <MDBInput className="input-fields" name="" required type="text" label="Email" invalid validation="Please provide your email" />
                            <br />
                            <MDBInput className="input-fields" name="" required type="text" label="Phone" invalid validation="Please provide your phone" />
                            <br />

                            <MDBTextArea className="input-fieldsTA" name="" required type="text" label="Message" invalid validation="Please provide your email" />
                            <br />

                            <MDBBtn color='success'>CONTACT NOW!</MDBBtn>
                            <br />

                            <MDBBtn>Call : (000) 000-0000</MDBBtn>
                        </div>
                    </MDBCardBody>
                    <MDBCardFooter>
                        <h4>We Service All Throughout HOUSTON!</h4>
                    </MDBCardFooter>
                </MDBCard>
            </div>
            <div className="workList">
                <h1>
                    Proud Houston Provider
                </h1>
                <h4>
                    Residential / Commercial
                </h4>
                <h4>Interior / Exterior Painting</h4>
                <h4>Whole House Painting</h4>
                <h4>Paint, Trim, Caulk</h4>
                <h4>Drywall Repair & Repaint</h4>
                <h4>Ceiling Textures & Paint</h4>
                <h4>Tape, Bed, & Texture</h4>
            </div>
        </div>
    )
}


export default Contact;


