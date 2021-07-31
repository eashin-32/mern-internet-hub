import React from 'react';
import Quote from '../../../../img/right-quote-sign.png';
import './Review.css'


const Review = ({data}) => {
    
    return (
        <div className='col-md-4 text-center cards'>
            <img className='img-fluid p-2 quote' src={Quote} alt="" />
            <div className="p-5  shadow m-4">
                
                <p className="text-muted">{data.message}</p>
                <div className="d-flex align-items-center justify-content-center">
                    <img className='img-fluid profile-pic' src={data.img} alt="" />
                    <div className="p-2">
                    <h5>{data.name}</h5>
                    <small>{data.company}</small>
                    </div>
                </div>
                
            </div>
        </div>
    );
};

export default Review;