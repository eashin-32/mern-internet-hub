import React from 'react';
import User1 from '../../../img/ben-den-engelsen-nqEJ548Hqjs-unsplash.jpg';
import User2 from '../../../img/ben-parker-OhKElOkQ3RE-unsplash (1).jpg';
import User3 from '../../../img/christopher-campbell-rDEOVtE7vOs-unsplash.jpg';
import User4 from '../../../img/frederik-lipfert-exv1JefGzTU-unsplash.jpg';
import User5 from '../../../img/timothy-dykes-yd4ubMUNTG0-unsplash.jpg';
import User6 from '../../../img/toa-heftiba-O3ymvT7Wf9U-unsplash.jpg';
import Review from './Review/Review';


const Testimonial = () => {
    const reviewsData = [
        {
            name:'Nash Patrick',
            company:'CEO, Monpal',
            message:' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, tempora. Possimus aut odit, recusandae optio assumenda culpa natus doloremque facilis.',
            img:User1
        },
        {
            name:'Youssef',
            company:'CEO, X-Company',
            message:' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, tempora. Possimus aut odit, recusandae optio assumenda culpa natus doloremque facilis.',
            img:User2
        },
        {
            name:' Katrina Azam',
            company:'CEO, Z-Company',
            message:' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, tempora. Possimus aut odit, recusandae optio assumenda culpa natus doloremque facilis.',
            img:User3
        },
        {
            name:'Zolfekar',
            company:'CEO, Zolzeka',
            message:' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, tempora. Possimus aut odit, recusandae optio assumenda culpa natus doloremque facilis.',
            img:User4
        },
        {
            name:'Mohammad Fahad',
            company:'CEO, Shine World',
            message:' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, tempora. Possimus aut odit, recusandae optio assumenda culpa natus doloremque facilis.',
            img:User5
        },
        {
            name:'Sehrina Masuf',
            company:'CEO, Monpal',
            message:' Lorem ipsum dolor sit amet consectetur, adipisicing elit. Unde, tempora. Possimus aut odit, recusandae optio assumenda culpa natus doloremque facilis.',
            img:User6
        },
    ];
    const first3 = reviewsData.slice(0,3)
    return (
        <div className='mb-5'>
           <p className="text-center fs-2 fw-bold">Testimonial</p>

           <div className="row">
               {
                   first3.map((data, index) => <Review key={index} data={data}></Review>)
               }
           </div>
           <p className='text-center mt-3'><a href="/review"><button className='btn btn-outline-danger'>Check Reviews</button></a></p>
        </div>
    );
};

export default Testimonial;