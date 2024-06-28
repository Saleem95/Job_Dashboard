import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Jobs from './Paages/Jobs';
import Message from './Paages/Message';
import Payment from './Paages/Payment';
import Dashboard from './Components/Dashboard';
// import

export default function Routings() {
    return (
        <div>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route path={'/jobs'} element={<Jobs />} className="text-gray-700" />
                    <Route path={'/message'} element={<Message />} className="text-gray-700" />
                    <Route path={'/payments'} element={<Payment />} className="text-gray-700" />
                </Routes>
            </BrowserRouter>
        </div>
    )
}


