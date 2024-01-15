import React from 'react'
import Header from '../Header/Header'
import './Main.scss'
import Navigation from '../Navigation/Navigation'
import Offer from '../../Offer/Offer'

function Main() {
  return (
    <div className='main-page'>
        <Header/>
        <Navigation/>
        <Offer/>
    </div>
  )
}

export default Main