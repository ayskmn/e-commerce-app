import React from 'react';
import './Subtotal.css';
import {useStateValue } from './StateContext';
import {getCartTotal} from './reducer';

function Subtotal() {
	const [{ cart }, dispatch] = useStateValue();

	return (
	  <div className="subtotal">

		<>
                  <p>
                    Subtotal ({cart.length} items): <small>$</small><strong>{getCartTotal(cart).toFixed(2)}</strong>
                  </p>
                  <small className="subtotal__gift">
                    <input type="checkbox" /> This order contains a gift
                  </small>
                </>	    
		<button>Proceed to Checkout</button>
	  </div>
	);
}
      
export default Subtotal;
