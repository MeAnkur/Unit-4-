
// keep the add to cart component here
import React,{useState} from "react";
const CartButton = (props) => {
    //manage state of the count 
    const [count, setCount] = useState(0);
  return <>
  {/* add to cart button */}
  {/* count with - and  + button */}

  <div>
      <button>-</button>
      <p className="count-item">{count}</p>
      <button>+</button>
  </div>
  </>;
};
export default CartButton
