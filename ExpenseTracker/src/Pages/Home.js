import React, { useState } from 'react'
import '../Styles/HomePage.css'
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { useSelector } from 'react-redux';

function Home() {
    const accountList = useSelector(state => state.userAccount.users)
    const [isOpen, setIsOpen] = useState(false)
    const [isModelOpen, setIsModelOpen] = useState(false)
    const [selectionList, setSelectionList] = useState("Choose Account")
    function handleDropdown() {
        setIsOpen(!isOpen)
    }
    function handleModel(e) {
        setIsModelOpen(true)
    }
    const handledropDownValue = (value) => {
        setSelectionList(value)
        setIsOpen(false)
    }
    return (
        <div className='homepage'>

            {/* Home Header */}

            <section className='headerSection'>
                <div className='dropdown'>
                    <div className='dropdown-menu' onClick={handleDropdown}>
                        <span>{selectionList}</span>
                        {isOpen === false ?
                            <IoMdArrowDropdown className='dropIcon' /> : <IoMdArrowDropup className='dropIcon' />}
                    </div>
                    <div className={isOpen === false ? "dropdownItems close" : "dropdownItems open"}>
                        {accountList.map((data, index) => (
                            <ul key={index}>
                                <li onClick={() => handledropDownValue(data.name)}><span>{data.name}</span></li>
                            </ul>

                        ))}
                    </div>
                </div>
                <div className='btngroup'>
                    <button className='outline btn green' onClick={handleModel}>Cash In</button>
                    <button className='outline btn red' onClick={handleModel}>Cash Out</button>
                </div>
                <div className={isModelOpen === false ? "close" : "model open"}>
                    <button onClick={()=>setIsModelOpen(false)} style={{ float: 'right' }}>Close</button>
                </div>
            </section>
        </div>
    )
}

export default Home
