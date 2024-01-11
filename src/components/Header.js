import React from 'react'
import { useSelector } from 'react-redux'

const Header = () => {
    const cart =useSelector((store)=>store.cart.items)
  return (
    <div className='container m-auto'>
        <div className='flex justify-between py-4'>
     <div className='logo'>
       <p className='text-3xl font-bold'>Logo</p>
     </div>
     <div className='menu-items'>
        <ul className='flex gap-20'>
            <li>Home</li>
            <li>About</li>
            <li>Cart ({cart.length})</li>
            <li>Contact</li>
        </ul>
     </div>
     </div>
      
    </div>
  )
}

export default Header
