import React from 'react'
import {useForm, ValidationError} from "@formspree/react";
import './contactform.css';

const ContactForm = () => {
    const [state, handleSubmit] = useForm("mlgadabd");
    if (state.succeeded) {
        return <p>Thanks for reaching out, I'll get back to you soon.</p>;
    }
    return (
        <form  className="contact-form" onSubmit={handleSubmit}>

            <div>
                <label htmlFor="email">
                    Email Address
                </label>
                <input
                    className="email"
                    id="email"
                    type="email"
                    name="email"
                />
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
            </div>

            <div>
                <label htmlFor="message">
                    Message
                </label>
                <textarea
                    className="message"
                    id="message"
                    name="message"
                    rows="4"
                />
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
            </div>

            <button type="submit" className="submit-btn" disabled={state.submitting}>
                Submit
            </button>
        </form>
    );
}
export default ContactForm





