import React, { useContext, useEffect } from 'react';
import './ServiceCard.css';
import { Link } from 'react-router-dom';
import { userContext } from './../../../App';




const ServiceCard = ({data}) => {
    const [selectedProduct, setSelectedProduct] = useContext(userContext)

    
   
    return (
        <div className='col-md-4'>
            <div className={`text-center p-5 ${data.class}`}>
                <img className='img-fluid w-25 service-logo' src={data.img} alt="" />
                <h3 className=''>{data.title}</h3>
                <p>{data.speed} Mbps Speed</p>
                <hr />
                <p className='h3 text-warning'>{data.price}<span className='h6 text-dark'>/Mo</span></p>
                <Link to='/dash/booking'>
                    <button onClick={() => setSelectedProduct({title:data.title, price:data.price})} className="btn btn-outline-danger p-2">Order Package</button>
                </Link>
            </div>
        </div>
    );
};

export default ServiceCard;