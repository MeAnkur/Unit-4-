import React from 'react'


const Form = () => {
  return (
    <div>
      <form>
          
          <input type="text" name="userName" required/>
          <input type="number" name="cardNumber" required/>
          <input type="month" name="cardMonth" required/>
          <input type="number" name="cvv" required/>
          <p>Payment amount: 12 300₹</p> 
      </form>
    </div>
  )
}

export default Form
