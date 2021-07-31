import React from 'react';
import serviceLogo from '../../../img/high-speed.png';
import ServiceCard from '../ServiceCard/ServiceCard';
import './Services.css'

const Services = () => {
    const servicesInfo =[
        {  
            title:'Personal Starter',
            speed:'25',
            price:'$15',
            class:'first',
            img: serviceLogo
        },
        {
            title:'Personal Medium',
            speed:'5o',
            price:'$25',
            class:'middle',
            img: serviceLogo
        },
        {
            title:'Business Starter',
            speed:'150',
            price:'$75',
            class:'last',
            img: serviceLogo
        }
    ]
    return (
        <section className='service-section'>
            <h3 className='text-center'>Our Awesome <span className='text-danger'>Services</span></h3>
            <div className="row p-5">
                {
                    servicesInfo.map((data, index) => <ServiceCard key={index} data={data}></ServiceCard>)
                }
            </div>
        </section>
    );
};

export default Services;