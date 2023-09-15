import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import "./../Styles/Contact.css";

const msg = "Your message has been submitted.";

export default function Contact() {
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);

    const handleClick = () => {
    };

    return (
        <>
        <div className="global-padding">
            <section className="formulario-contendor">
                <Form className='f1' action="/contacto" method="post">
                    <Form.Group className="mb-3" controlID="exampleForm.ControlInput1">
                        <Form.Label className="descriptionFormulario">Name</Form.Label>
                        <Form.Control type="text" placeholder="" name="name" required />
                        </Form.Group>
                
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className="descripcionFormulario">Phone Number
                    </Form.Label>
                    <Form.Control type="text" placeholder="" name="phone" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label className="descripcionFormulario">Email address
                    </Form.Label>
                    <Form.Control type="email" placeholder="" name="email" required />
                    </Form.Group>

                    <Form.Group className="input-group mb-3">
            <label className="input-group-text" htmlFor="inputGroupSelect01">
              Options
            </label>
            <select className="form-select" id="inputGroupSelect01">
              <option selected>Choose from the Options...</option>
              <option value="1">Movies</option>
              <option value="2">Booking</option>
              <option value="3">Membership</option>
              <option value="4">Other</option>
            </select>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label className="descripcionFormulario">Enquiry</Form.Label>
            <Form.Control as="textarea" rows={3} name="enquiry" required />
          </Form.Group>
          <div className="botoneEnviar">
            {showSuccessMessage ? (
              <p>
              Your message has been successfully sent. We look forward 
              to connecting with you soon.</p>
            ) : null}
            <button
              className="btn btn-primary descripcionFormulario"
              type="button"
              onClick={handleClick}
            >
              Submit
            </button>
<br />
<br />
            <p>Experience an ultimate cinema destination where every visit feels like an opening day.</p>
          </div>
                        </Form>
                        </section>
                        </div></>
    )
}