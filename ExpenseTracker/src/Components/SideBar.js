import React, { useState } from 'react'
import '../Styles/sideBar.css'
import { sideBarData } from './SideBarData';
import { RiCloseLargeLine } from "react-icons/ri";
import { Link } from 'react-router-dom'
import { TiThMenuOutline } from "react-icons/ti";

function SideBar() {
    const [isOpen, setIsOpen] = useState(false);
        function handleClick(){
            
                setIsOpen(!isOpen)
    }
    return (
        <div className={isOpen === false ? "sideBar" : "active"}>
            {isOpen === false ? <div className='menuSection ' onClick={handleClick} >
                <p className='icon'>{<TiThMenuOutline className='icon' />}</p>
            </div> : 
            <div className='menuSection dashboard' >
                <h3 className='menuName'>Dashboard</h3>
                <p className='icon'>{<RiCloseLargeLine className='icon closeIcon' onClick={handleClick}/>}</p>
            </div>}


            {sideBarData.map((menu, index) => (
                isOpen === false ? <div key={menu.id} className='menuSection' onClick={() => handleClick(menu.id)}>
                    <p className='icon'>{menu.icon}</p>
                </div> :
                    <div key={menu.id} className='menuSection' onClick={() => handleClick(menu.id)}>
                        <p className='icon'>{menu.icon}</p>
                        <h3 className='menuName'>{menu.name}</h3>
                    </div>
            ))}
        </div>
    )
}

export default SideBar
