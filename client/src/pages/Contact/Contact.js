import React from 'react';
import './Contact.css';

function Contact(){
    return (
        <>
        <section className='ContactSection'>
            <h1 className='ContactH1'>GET IN TOUCH!</h1>
            <h3 className='ContactSub'>Please reach out to us with any questions, recommendations, or bugs!</h3>
            <div className='p-e-g-l'>
                <div className = 'Phone'>
                    <h3> Phone Number:<br/> <a href='tel:832-403-0406'>(832)-403-0406</a> </h3>
                </div>
                <div className = 'Email'>
                    <h3>Email:<br/> <a href='mailto://gamefndr@gmail.com'>gamefndr@gmail.com</a></h3>
                </div>
                <div className ='GitHub'>
                    <h3>Git Hub:<br/> <a href='https://github.com/jacobduden'> Jacob Duden</a><br/>
                            <a href='https://github.com/BradenWelsh'> Braden Welsh</a><br/>
                            <a href='https://github.com/enzonsn'> Enzo Sperduti</a><br/>
                            <a href='https://github.com/cooperrc1 '> Cooper Cutbirth </a></h3>
                </div>
                <div className='LinkedIn'>
                    <h3>LinkedIn:<br/> <a href='https://www.linkedin.com/in/jacob-duden-93951a137/'> Jacob Duden </a><br/>
                    <a href='https://www.linkedin.com/in/braden-welsh-678929203/'>Braden Welsh</a></h3>
                </div>
            </div>
        </section>
        </>
    );
}

export default Contact;