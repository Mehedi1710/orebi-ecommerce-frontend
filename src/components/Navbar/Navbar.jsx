import React, { useState } from 'react'
import logo from '../../assets/Logo.png'
import Container from '../Layouts/Container'
import { FaBars } from "react-icons/fa";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    const [show, setShow] = useState(false);
    const handleClick = () => {
        setShow(!show);
    }
  return (
    <nav>
        <Container>
        <div className='md:flex items-center px-2 md:px-0'>
            <div className='md:w-2/5 py-2 md:py-8'>
            <div className='flex items-center justify-between'>
            <div >
                <img src={logo} alt="" loading='lazy' />
            </div>
            <div className='md:hidden cursor-pointer' onClick={handleClick}>{show ?<RxCross2 size={20} className='font-bold'/> : <FaBars />}</div>
            </div>
            </div>
            <div className={`md:w-3/5 md:bg-white md:static absolute duration-300 ease-linear ${show ? 'top-[30px]' : 'top-[-150px]'}`}>
                <ul className={`md:flex gap-x-10 text-[18px] font-bold`}>
                    <NavLink to="" className={({isActive})=>`hover:text-primary hover:cursor-pointer ${isActive ? 'text-primary' : 'text-[#767676]' }`}>Home</NavLink>
                    <NavLink to="/shop" className={({isActive})=>`hover:text-primary hover:cursor-pointer ${isActive ? 'text-primary' : 'text-[#767676]' }`}>Shop</NavLink>
                    <NavLink to="/about" className={({isActive})=>`hover:text-primary hover:cursor-pointer ${isActive ? 'text-primary' : 'text-[#767676]' }`}>About</NavLink>
                    <NavLink to="/contacts" className={({isActive})=>`hover:text-primary hover:cursor-pointer ${isActive ? 'text-primary' : 'text-[#767676]' }`}>Contacts</NavLink>
                    <NavLink to="/journal" className={({isActive})=>`hover:text-primary hover:cursor-pointer ${isActive ? 'text-primary' : 'text-[#767676]' }`}>Journal</NavLink>
                </ul>
            </div>
        </div>
        </Container>
    </nav>
  )
}

export default Navbar