import React from 'react';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarker, } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
    return (
        <section className='footer row text-center p-5'>
           <div className="col-md-3">
                <p><FontAwesomeIcon icon={faMapMarker}></FontAwesomeIcon> h#000(0th floor), Road 000, New DOHS, Mohakhali, Dhaka, Bangladesh
                </p>
           </div>
           <div className="col-md-3">
               <p className='mb-3'>Company</p>
               <p className='fw-normal'>About Us</p>
               <p className='fw-normal'>Project</p>
               <p className='fw-normal'>Our Team</p>
               <p className='fw-normal'>Terms and Condition</p>
               <p className='fw-normal'>Submit listing</p>
           </div>
           <div className="col-md-3">
           <p className='mb-3'>Quick Links</p>
               <p className='fw-normal'>Quick links</p>
               <p className='fw-normal'>Rentals</p>
               <p className='fw-normal'>Sales</p>
               <p className='fw-normal'>Contact</p>
               <p className='fw-normal'>Our Blog</p>
           </div>
           <div className="col-md-3">
           <p className='mb-3'>About Us</p>
           <p className='fw-normal'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit atque enim a odio voluptas officia numquam soluta aspernatur eum nemo.</p>
            </div>
        </section>
    );
};

export default Footer;