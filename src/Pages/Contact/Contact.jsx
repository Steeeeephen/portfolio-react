import React, {useEffect} from 'react'
import Header from "../../Components/Header/Header.jsx";
import ContactForm from "../../Components/ContactForm/ContactForm.jsx";
import './contact.css'

const Contact = () => {

    useEffect(() => {
        document.title = "Contact Me - stephenzalalas.dev"
    }, []);

    return (
        <>
            <Header />


            <div className="contact-container container">

                <section>
                    <h1>Contact</h1>

                    <ContactForm />

                </section>

            </div>

        </>
    )
}
export default Contact
