import React from 'react'
import styled from"styled-components";

import "./CreditCard.styles.css"

const CreditCard = ({name,num,exp,cvv}) => {
    
// const Container = styled.div`
// display:flex;
// `;

  return (
      
    <div className="container">
      <div className="card_brand">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png"/>
              
          </div>
      <div className="card_symbol">
          <img src="https://graphicriver.img.customer.envatousercontent.com/files/265622399/preview.jpg?auto=compress%2Cformat&q=80&fit=crop&crop=top&max-h=8000&max-w=590&s=1d89b87c64c9dfd180d74f9d54b5c203"/>
      </div>
        <div className="card_number">{num}</div>   
      <div className="card_footer">

          <div>CARDHOLDER
          <br/>{name}
          </div>

          <div>EXPIRES
          <br/>  {exp}
          </div>

          <div>CVV
          <br/>  {cvv}
          </div>
          
       </div>   

    </div>
    
  )
}

export default CreditCard
