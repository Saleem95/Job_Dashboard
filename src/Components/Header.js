import React from 'react';
import { FaRegBell } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { GiReceiveMoney, GiGymBag } from "react-icons/gi";
import { FaRegMessage } from "react-icons/fa6";


const Header = () => {
    return (
        <header className="bg-gray-100 p-4 flex justify-between items-center header">
            <span className='bg-stone-300 p-2'>Logo</span>
            <nav className="flex space-x-4">
                <Link to={'/jobs'} className="text-gray-700" ><i><GiGymBag /></i>Jobs</Link>
                <Link to={'/message'} className="text-gray-700" ><i><FaRegMessage /></i>Messages</Link>
                <Link to={'/payments'} className="text-gray-700" ><i><GiReceiveMoney /></i>Payments</Link>
            </nav>
            <div className="flex items-center space-x-2">
                <span className="font-bold"><i><FaRegBell /></i></span>
                <img src="/Images/s.png" alt="Profile" className="h-10 w-10 rounded-full" />
            </div>
        </header>

    );
}

export default Header;

