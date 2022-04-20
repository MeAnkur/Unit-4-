import React, { useState,useRef } from 'react'
import CreditCard from './CreditCard'

import "./CreditCard.styles.css"

const Form = () => {

    const [Data,setData]=useState({})
    const form=useRef()

    const handelSubmit=(e)=>{
        e.preventDefault();
        form.current.reset();  
        // console.log(Data.cardNumber);    
    }

    const handelChange = (e)=>{
        const inputname=e.target.name;
        setData({...Data,
            [inputname]:e.target.value,
        });    
    }


  return (
    <div className="form">
      <form onSubmit={handelSubmit} ref={form} className="form_inner">  
          <h1>Payment details</h1>
          <label>CARDHOLDER NAME</label>        
          <input type="text" name="userName" onChange={handelChange} required/><br/>         
          <label>CARD NUMBER</label>     
          <input type="number" name="cardNumber" onChange={handelChange} required/><br/>
          <div className="form_footer">
              <div>
              <label>EXPIRY</label>
          <input type="month" name="cardMonth" onChange={handelChange} required/><br/>
              </div>
                <div>
                <label>CVV</label>
          <input type="number" name="cvv" onChange={handelChange} required/>
                </div>

          </div>
          
          <p>Payment amount: <span>12 300₹</span></p>
          <input type="submit" value="PAY" /><br/><br/>
          <CreditCard name={Data.userName} num={Data.cardNumber} exp={Data.cardMonth} cvv={Data.cvv}/>
          
      </form>
    </div>
  )
}

export default Form
