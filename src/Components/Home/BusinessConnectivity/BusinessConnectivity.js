import React from 'react';
import CountUp from 'react-countup';
import './BusinessConnectivity.css'

const BusinessConnectivity = () => {
    return (
        <div className='mt-5 text-center p-3 bg-danger row connectivity d-flex  align-items-center'>
            <div className="col-md-3">
            <CountUp className='scored' end={20} /><span className='scored'>+</span> <br />
            <span className="p-0 m-0 fs-3 text-white">City Coverage</span>
            </div>
            
            <div className="col-md-3 ">
            <CountUp className='scored' end={10} /><span className='scored'>+</span> <br />
            <span className="p-0 m-0 fs-3 text-white">Internet Package</span>
            </div>
            <div className="col-md-3 ">
            <CountUp className='scored' end={150} /><span className='scored'>+</span> <br />
            <span className="p-0 m-0 fs-3 text-white">Business Partner</span>
            </div>
            <div className="col-md-3 ">
            <CountUp className='scored' end={500} /><span className='scored'>+</span> <br />
            <span className="p-0 m-0 fs-3 text-white">Home Personal</span>
            </div>
            
        </div>
    );
};

export default BusinessConnectivity;