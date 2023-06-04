import React from 'react'
import { useNavigate } from 'react-router-dom'

const SaveTransaction = () => {

    const navigate = useNavigate();
   
    const handleClick = () => {
        navigate("/main")
    }

  return (
    <>
      <h1>Transaction saved</h1>
      <button type="button" onClick={handleClick}>Okay</button>
    </>
  )
}

export default SaveTransaction;
