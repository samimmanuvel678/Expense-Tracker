import React from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Account from './Pages/Account'
import SideBar from './Components/SideBar'
import Transaction from './Pages/Transaction'
import Home from './Pages/Home'
import Header from './Components/Header'

function App() {
  return (
    <div className='app'>
      <Header/>
      <SideBar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/account' element={<Account/>}/>
        <Route path='/transaction' element={<Transaction/>}/>
      </Routes>
    </div>
  )
}

export default App
