import React from 'react'
import "./PaymentSuccessfull.css"
import { useNavigate } from 'react-router'

function PaymentSuccessfull() {
  const navigate = useNavigate()
  const handleNavigate = ()=>{
    navigate("/")
  }
  return (
    <div className='PaymentSuccessfull_Parent'>
        <div className='PaymentSuccessfull_Child'>
            <h1>SuccessFully Booked</h1>
            <button onClick={handleNavigate}>Click To continue</button>
        </div>
    </div>
  )
}

export default PaymentSuccessfull