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
                <h2 className='menuName'>Dashboard</h2>
                <p className='icon'>{<RiCloseLargeLine className='icon closeIcon' onClick={handleClick}/>}</p>
            </div>}


            {sideBarData.map((menu, index) => (
                isOpen === false ? <div key={menu.id} className='menuSection'>
                    <p className='icon'>{menu.icon}</p>
                </div> :
                    <Link to={menu.path} key={menu.id} className='menuSection'>
                        <p className='icon'>{menu.icon}</p>
                        <span className='menuName'>{menu.name}</span>
                    </Link>
            ))}
        </div>
    )
}

export default SideBar
