import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import priceList from './PriceList';

const Checkout = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {fruitList} = location.state;
    const [total, setTotal] = useState(0);
    const [transaction, setTransaction] = useState({
      fruitList: [],
      total: 0
    });

    useEffect(() => {
      let calculatedTotal = 0;
      for(let i = 0; i < fruitList.length; i++){
        const fruitItem = fruitList[i];
        const quantity = fruitItem.quantity;
        const price = priceList[fruitItem.fruit];
        calculatedTotal += price * quantity;
      }
      setTotal(calculatedTotal);
    }, [fruitList]
    );

    const handleClick = (event) => {
      let decision = event.target.id;

      if(decision === "yes"){
        setTransaction({
          fruitList: fruitList,
          total: total
        })
        axios.post('http://localhost:3001/savetransaction',{transaction})
          .then((response) => response.data)
          .then((data) => {
                            console.log(data);
                            navigate("/saved");
                          })
          .catch((error) => console.log(error));

        
      }
      else if (decision === "no"){
        navigate("/main");
      }
    }
    
  return (
    <>
      <h2>The calculated total price is ${total}.</h2>
      <h2>Do you want to save the transaction?</h2>
      <button type = "button" id="yes" onClick={handleClick}>yes</button>
      <button type = "button" id="no" onClick={handleClick}>no</button>
    </>
  )
}

export default Checkout;
