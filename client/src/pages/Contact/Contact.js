import React from 'react';
import './Contact.css';

function Contact(){
    return (
        <>
        <section className='ContactSection'>
            <h1 className='ContactH1'>GET IN TOUCH!</h1>
            <h3 className='ContactSub'>Please reach out to us with any questions, recommendations, or bugs!</h3>
                <div className = 'email-phone'>
                    <h3> Phone Numbers: <a href='tel:832-403-0406'>(832)-403-0406</a><br/>
                    <br/>
                         Email: <a href='mailto://steamoverlook@gmail.com'>steamoverlook@gmail.com</a>
                    </h3>
                </div>
        </section>
        </>
    );
}

export default Contact;