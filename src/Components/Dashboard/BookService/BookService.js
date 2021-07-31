import React from 'react';
import { useForm } from "react-hook-form";
import'./BookService.css'
import { FaCreditCard } from 'react-icons/fa';
import { productContext, userContext } from './../../../App';
import Sidebar from '../Sidebar/Sidebar';

const BookService = (props) => {
    const [loggedInUser, setLoggedInUser] = React.useContext(userContext)
   
    const [selectedProduct, setSelectedProduct] = React.useContext(productContext)

    const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  
        console.log(selectedProduct)
    return (
        <div>
            <Sidebar />
        <div className='containerz'>
            <div className="SectionTitle">
                <h2>Book</h2>
            </div>
           <div className="SectionMain">
              <form onSubmit={handleSubmit(onSubmit)}>
          
                  <input defaultValue={loggedInUser.name} {...register("name", { required: true})} />
                  {errors.name && <span>This field is required</span>}
                  
                  <input defaultValue={loggedInUser.email} {...register("email", { required: true })} />
                  {errors.email && <span>This field is required</span>}

                  <input defaultValue={props.details} className='mb-3' {...register("serviceName", { required: true })} />
                  {errors.serviceName && <span>This field is required</span>}
                  
                  <small className='text-muted small-tag'>Pay with</small>
                  <p className='option'>
                   <FaCreditCard/> Credit card
                  </p>
                  <input className='mt-3' placeholder='Card Number' {...register("cardNumber", { required: true })} />
                  {errors.cardNumber && <span>This field is required</span>}

                  <input className='small-input' placeholder='MM/YY' {...register("serviceName", { required: true })} />
                  {errors.serviceName && <span>This field is required</span>}

                  <input className='small-input' placeholder='CVC' {...register("serviceName", { required: true })} />
                  {errors.serviceName && <span>This field is required</span>} <br />
                  <small className='fw-bold'>Your service charge will be </small>
                  <input className='button btn btn-danger' type="submit" />
                </form>
           </div>
        </div>
        </div>
    );
};

export default BookService;