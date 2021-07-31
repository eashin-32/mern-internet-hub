import React from 'react';
import InternetImg from '../../../img/frederik-lipfert-exv1JefGzTU-unsplash.jpg';
import ProgressBar from 'react-animated-progress-bar';
import './OurPortfolio.css';
import BusinessConnectivity from '../BusinessConnectivity/BusinessConnectivity';


const OurPortfolio = () => {
    return (
        <section>
            <div className="text-center">
            <p className='h4 text-danger'>Service Value</p>
            <h1>Our Internet Connection</h1>
            </div>
            <div className="row d-flex justify-content-center align-items-center p-5 service-bg">
                <div className="col-md-6">
                    <img className='img-fluid p-4 internet-banner rounded-3' src={InternetImg} alt="" />
                </div>
                <div className="col-md-6">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem odio quasi corporis. Rerum nobis exercitationem rem consectetur, adipisci sapiente aut.</p>
                    
                    <p className="fw-bold">Up Time Guarantee</p>
                    <ProgressBar
                        width="600px"
                        height="10px"
                        rect
                        fontColor="#FFF"
                        percentage="95"
                        rectPadding="1px"
                        rectBorderRadius="20px"
                        trackPathColor="transparent"
                        bgColor="none"
                        trackBorderColor="grey"
                       
                    />
                    <p className="fw-bold">Upload Speed</p>
                    <ProgressBar
                        width="600px"
                        height="10px"
                        rect
                        fontColor="#FFF"
                        percentage="93"
                        rectPadding="1px"
                        rectBorderRadius="20px"
                        trackPathColor="transparent"
                        bgColor="none"
                        trackBorderColor="grey"
                    />
                    <p className="fw-bold">Download Speed</p>
                    <ProgressBar
                        width="600px"
                        height="10px"
                        rect
                        fontColor="#FFF"
                        percentage="90"
                        rectPadding="1px"
                        rectBorderRadius="20px"
                        trackPathColor="transparent"
                        bgColor="#FFFFFF"
                        trackBorderColor="black"
                    />
                    

                </div>
            </div>
            <BusinessConnectivity></BusinessConnectivity>
        </section>
    );
};

export default OurPortfolio;