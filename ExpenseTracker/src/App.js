import React from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Account from './Pages/Account'
import SideBar from './Components/SideBar'
import Transaction from './Pages/Transaction'

function App() {
  return (
    <div className='app'>
      <SideBar/>
      <Routes>
        <Route path='/account' element={<Account/>}/>
        <Route path='/transaction' element={<Transaction/>}/>
      </Routes>
    </div>
  )
}

export default App
