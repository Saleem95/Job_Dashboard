import React from 'react'

export default function Subnav() {
    return (
        <div className='subnav'>
            <div className='subnav-links'>
                <nav className='p-1'>
                    <ul>
                        <li className=""><button className="text-gray-950">Applicants</button></li>
                        <li className=""><button className="text-gray-950">Matches</button></li>
                        <li className=""><button className="text-gray-950">Messages</button></li>
                        <li className=""><button className="text-gray-950">View</button></li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}
