import React from 'react'
import './App.css'
import {Routes, Route} from 'react-router-dom'
import Account from './Pages/Account'
import SideBar from './Components/SideBar'

function App() {
  return (
    <div className='app'>
      <SideBar/>
      <Routes>
        <Route path='/account' element={<Account/>}/>
      </Routes>
    </div>
  )
}

export default App
