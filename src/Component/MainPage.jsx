import React, { useState } from 'react';
import { useNavigate } from 'react-router';

const MainPage = () => {
    const navigate = useNavigate();

    const [fruitList, setFruitList] = useState([]);

    const addItem = (event) => {
        event.preventDefault();
        const newFruit = {
        fruit: event.target.elements.fruit.value,
        quantity: event.target.elements.quantity.value
        };
        setFruitList((prevFruitList) => [...prevFruitList, newFruit]);
        event.target.reset();
    };

    const checkout = () => {
        navigate("/checkout", {state: {fruitList}});
    }

    return (
        <>
        <form onSubmit={addItem}>
            Fruit:
            <input type="text" id="fruit" name="fruit"/>
            Quantity:
            <input type="number" id="quantity" name="quantity"/>
            <button type="submit">Add Item</button>
        </form>
        <button type="button" onClick={checkout}>Checkout</button>
        <h2>Items added</h2>
        <ul>
            {fruitList.map((fruit, index) => (
                <li key={index}>
                    Fruit: {fruit.fruit}, Quantity: {fruit.quantity}
                </li>
            ))}
        </ul>
        </>
    );
}

export default MainPage;