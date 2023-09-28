import React, { useEffect, useState } from 'react'
import Button from '../Elements/Button'
import { useLogin } from '../../../hooks/useLogin'
import { useSelector } from 'react-redux';

const NavBar = () => {

    const username = useLogin();
    const [totalCart, setTotalCart] = useState(0);
    const cart = useSelector((state) => state.cart.data);

    useEffect(() => {
        const sum = cart.reduce((acc, item) => {
            return acc + item.qty
        },0)
        setTotalCart(sum)
    },[cart])

    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location.href = "/login"
    }

  return (
    <div className="flex justify-between bg-blue-600 h-14 text-white items-center px-10 ">
    Navbar
    <div className='flex justify-end items-center'>
        {username}
        <Button classname="ml-5 bg-black" onClick={handleLogout}>
            Logout
        </Button>
        <div className='flex items-center bg-gray-800 p-2 rounded-md ml-5'>
            {totalCart}
        </div>
    </div>

  </div>
  )
}

export default NavBar