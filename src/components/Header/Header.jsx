import React, { useCallback, useEffect, useRef, useState } from 'react'
import Container from '../Layouts/Container'
import icon from '../../assets/Icon.png'
import search from '../../assets/search.png'
import shape from '../../assets/Shape.png'
import Path from '../../assets/Path.png'
import icon_cart from '../../assets/Icon_cart.png'
import Dropdown from '../Layouts/Dropdown'
import image from '../../assets/Image.png'
import cross from '../../assets/cross.png'

const Header = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [open, setOpen] = useState(false);
    const [show, setShow] = useState(false);
  
  const btnRef = useRef();

  useEffect(() => {
      const closeDropdown = e => {
          if (!btnRef.current.contains(e.target)) {
              setIsOpen(false);
            }
        }
        document.body.addEventListener('click', closeDropdown)
        return () => document.body.removeEventListener('click', closeDropdown)
    }, []);
    
  const acRef = useRef();

  useEffect(() => {
        const closeDropdown = e => {
            if (!acRef.current.contains(e.target)) {
                setOpen(false);
            }
        }
        document.body.addEventListener('click', closeDropdown)
        return () => document.body.removeEventListener('click', closeDropdown)
    }, []);


  const showRef = useRef();

  useEffect(() => {
        const closeDropdown = e => {
            if (!showRef.current.contains(e.target)) {
                setShow(false);
            }
        }
        document.body.addEventListener('click', closeDropdown)
        return () => document.body.removeEventListener('click', closeDropdown)
    }, []);

  return (
    <div className='bg-[#F2F2F2] py-6'>
        <Container>
            <div className='grid grid-cols-3 justify-between items-center px-2 md:px-0'>
                <Dropdown>
                <div className='flex items-center gap-x-2'>
                    <img src={icon} alt="" ref={btnRef} onClick={()=>{
                        setIsOpen(!isOpen);
                    }} className='cursor-pointer'/>
                    <p className='text-primary text-base font-semibold'>Shop by Category</p>
                </div>
                {isOpen && (
                    <ul className='absolute w-[250px] bg-black text-[#BEBEBE] text-base'>
                        <li className='py-4 border-b px-5 border-b-[#2D2D2D] hover:text-white cursor-pointer hover:font-bold hover:ml-2 hover:ease-in-out duration-300'>Accessories</li>
                        <li className='py-4 border-b px-5 border-b-[#2D2D2D] hover:text-white cursor-pointer hover:font-bold hover:ml-2 hover:ease-in-out duration-300'>Furniture</li>
                        <li className='py-4 border-b px-5 border-b-[#2D2D2D] hover:text-white cursor-pointer hover:font-bold hover:ml-2 hover:ease-in-out duration-300'>Electronics</li>
                        <li className='py-4 border-b px-5 border-b-[#2D2D2D] hover:text-white cursor-pointer hover:font-bold hover:ml-2 hover:ease-in-out duration-300'>Clothes</li>
                        <li className='py-4 border-b px-5 border-b-[#2D2D2D] hover:text-white cursor-pointer hover:font-bold hover:ml-2 hover:ease-in-out duration-300'>Bags</li>
                        <li className='py-4 border-b px-5 border-b-[#2D2D2D] hover:text-white cursor-pointer hover:font-bold hover:ml-2 hover:ease-in-out duration-300'>Home Appliances</li>
                    </ul>
                )}
                </Dropdown>
                <div className='bg-[#FFFFFF] rounded flex items-center p-1 md:p-4'>
                    <div className='w-full'>
                    <input type="text" placeholder='Search Products' className='w-full outline-none'/>
                    </div>
                    <div className='mr-0'>
                    <img src={search} alt="" className='cursor-pointer'/>
                    </div>
                </div>
                <div className='flex items-center justify-end gap-x-4 md:gap-x-8'>
                    <Dropdown>
                    <div ref={acRef} onClick={()=>setOpen(!open)} className='flex items-center gap-x-1 cursor-pointer'>
                        <img src={shape} alt=""/>
                        <img src={Path}alt=""/>
                        {open && (
                            <div className='absolute mt-[150px] ml-[-162px] border'>
                                <h2 className='bg-[#2D2D2D] text-base text-center text-white cursor-pointer font-bold py-4 px-12'>My Account</h2>
                                <h2 className='text-[#2D2D2D] text-base text-center bg-white cursor-pointer font-bold py-4 px-12'>Log Out</h2>
                            </div>
                        )}
                    </div>
                    </Dropdown>
                    <Dropdown>
                        <div>
                        <img ref={showRef} onClick={()=>setShow(!show)} src={icon_cart} alt="" className='cursor-pointer'/>
                        {show && (
                            <div className='absolute right-[52px] '>
                                <div className='flex items-center justify-between p-5 bg-[#F2F2F2] md:gap-x-[78px]'>
                                    <div className='flex items-center'>
                                    <img src={image} alt=""  className='text-2xl'/>
                                    <div className='pl-5 text-black font-bold text-base'>
                                        <p className='pb-3'>Black Smart Watch</p>
                                        <p>$44.00</p>
                                    </div>
                                    </div>
                                    <img src={cross} alt="" />
                                </div>
                                <div className='p-5 bg-[#FFFFFF]'>
                                    <div className='pb-3'>
                                        <p className='text-[#767676]'>Subtotal: <span className='text-black font-bold'>$44.00</span></p>
                                    </div>
                                    <div className='flex justify-between'>
                                        <button className='text-black font-bold border border-black py-4 px-10'>View Cart</button>
                                        <button className='bg-primary text-white font-bold py-4 px-10'>Checkout</button>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    </Dropdown>
                </div>
            </div>
        </Container>
    </div>
  )
}

export default Header