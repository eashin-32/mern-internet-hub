import React from 'react';
import './Contact.css'

const Contact = () => {
    return (
        <section className='contact-section p-5'>
                <p className='text-center h2'>Let us handle your <br /> project, Professionally</p>

                <form >
                <div className="form p-5">
                    <div className="d-flex px-5">

                        <input className='form-control p-2 mx-2' type="text" placeholder='First Name'/>
                        <input className='form-control p-2 mx-2' type="text" placeholder='Last Name'/>

                    </div>
                    <div className="d-flex p-5">

                        <input className='form-control p-2 mx-2' type="email" placeholder='Email Address'/>
                        <input className='form-control p-2 mx-2' type="text" placeholder='Phone Number'/>

                    </div>
                    <div className="px-5">
                    <textarea className='form-control p-2 mx-2'rows="5" placeholder='Write your message'/>
                    </div>
                    <p className='text-center mt-4'><button type="submit" class="px-5 btn btn-outline-danger">Submit</button></p>
                </div>
                </form>
        </section>
    );
};

export default Contact;