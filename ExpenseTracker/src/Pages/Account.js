import React, { useState } from 'react'
import "../Styles/Account.css"
import { IoClose } from "react-icons/io5";
import {useDispatch, useSelector} from 'react-redux'
import { addAccount } from '../Features/Account/accountSlices';
import {  } from 'react-redux';
import { MdDeleteOutline } from "react-icons/md";

function Account() {
  const dispatch=useDispatch()
  const accountList = useSelector(state=>state.userAccount.users)
  const [isCreateAccountModal, setIsCreateAccountModal]=useState(true)
  const [isExsistingAccountModal, setIsExsistingAccountModal]=useState(false)
  const [input, setInput] = useState("")
  const handleCreateAccount=()=>{
    setIsCreateAccountModal(true)
    setIsExsistingAccountModal(false)
  }
  const handleExsistingAccount=()=>{
    setIsCreateAccountModal(false)
    setIsExsistingAccountModal(true)
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(addAccount(input))
    setInput("")
  }
  return (
    <div className='accountpage'>
      <div className='containerBox'>
      <div className='section1'>
      <button onClick={handleCreateAccount} className='createBtn'>Create Account</button>
        <button onClick={handleExsistingAccount} className='createBtn'>Exsisting Account</button>
      </div>
      <hr/>
        <div className={isCreateAccountModal === false ? "createAccount close" : "createAccount open"}>
          {/* Form */}
          <form onSubmit={handleSubmit} className='form'>
            <input type='text' placeholder='Enter Your Account Name...' value={input} onChange={(e) => setInput(e.target.value)} />
            <button type='submit'>Create Account</button>
          </form>
        </div>
        <div className={isExsistingAccountModal === false ? "list close":"list open"}>
          {accountList.map((user, index) => (
            <ul key={index} className='list'>
              <li><h3>{user.name}</h3> <MdDeleteOutline className='icon' /></li>
            </ul>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Account