import React from 'react'
import Lhl_useState from './Component/Lhl_useState'
import Lhl_useEffect from './Component/Lhl_useEffect'
import Lhl_useContext from './Component/Lhl_useContext'
import './App.css'

export default function App() {
  return (
    <div className='container border mt-3'>
      <h1 className='text-center'>Lê Hoàng long - Hook</h1>
      <hr/>
      <Lhl_useState/>
      <hr/>
      <Lhl_useEffect/>
      <hr/>
      <Lhl_useContext/>
    </div>
  )
}
