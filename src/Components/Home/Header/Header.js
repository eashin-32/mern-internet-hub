import React from 'react';
import HeaderImg from '../../../img/andres-urena-iU8fDX7xnzM-unsplash.jpg'

const Header = () => {
    return (
        <header className='row d-flex justify-content-center align-items-center p-5'>
           
            <div className="col-md-6 p-5">
                <h1>Get Fastly Connection & Unlimited Surface Your World</h1>
                <p className="text-muted">Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam incidunt repellendus nesciunt cum expedita consequuntur, optio possimus tempore dolorum, officiis dolorem reprehenderit iusto odio eius vel? Exercitationem quia impedit pariatur.</p>
                <button className='btn btn-outline-danger'>Buy a Package</button>
            </div>
            <div className="col-md-6">
                <img className='img-fluid w-75 rounded-3' src={HeaderImg} alt="" />
            </div>
            
        </header>
    );
};

export default Header;