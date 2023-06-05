import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import priceList from './PriceList';

const SaveTransaction = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const {fruitList} = location.state;
    const [total, setTotal] = useState(0);

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
      if(event.target.id === "yes"){
        const transaction = {
          fruitList: fruitList,
          total: total
        }
        axios.post('http://localhost:3001/savetransaction',{transaction})
          .then((response) => response.data)
          .then((data) => {
                            console.log(data);
                            navigate("/saved");
                          })
          .catch((error) => console.log(error));

        
      }
      else if (event.target.id === "no"){
        navigate("/");
      }
    }
    
  return (
    <>
      <h2>The calculated total price is ${total.toFixed(2)}.</h2>
      <h2>Do you want to save the transaction?</h2>\
      <div className="main-buttons">
        <button type = "button" id="yes" onClick={handleClick}>yes</button>
        <button type = "button" id="no" onClick={handleClick}>no</button>
      </div>
      
    </>
  )
}

export default SaveTransaction;
