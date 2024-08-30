import React, { useState } from 'react'
import '../Styles/HomePage.css'
import { IoMdArrowDropdown , IoMdArrowDropup } from "react-icons/io";


function Home() {
    const [isOpen, setIsOpen] = useState(false)
    const [isModelOpen, setIsModelOpen] = useState(false)
    function handleDropdown(){
        setIsOpen(!isOpen)
    }
    function handleModel(e){
        setIsModelOpen(!isModelOpen)
    }
  return (
    <div className='homepage'>
        <section className='headerSection'>
            <div className='dropdown'>
                <div className='dropdown-menu' onClick={handleDropdown}>
                    <span>Choose Account</span>
                    {isOpen===false?
                    <IoMdArrowDropdown className='dropIcon' />:<IoMdArrowDropup className='dropIcon'/>}
                </div>
               
                <div className= {isOpen===false?"dropdownItems close":"dropdownItems open"}>
                    <ul>
                        <li><span>UPI</span></li>
                        <li><span>Ready MAde Cash</span></li>
                    </ul>

                </div>

            </div>
            
            <div className='btngroup'>
                <button className='outline btn green' onClick={handleModel}>Cash In</button>
                <button className='outline btn red' onClick={handleModel}>Cash Out</button>
            </div>
            <div className={isModelOpen===false?"close":"model open"}>
            <button onClick={handleModel} style={{float:'right'}}>Close</button>
            </div>
        </section>
    </div>
  )
}

export default Home
