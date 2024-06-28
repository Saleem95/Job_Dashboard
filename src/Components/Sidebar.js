import React from 'react';
import { FaRegMessage, FaEye } from "react-icons/fa6";
import { FiUserCheck, FiUsers } from "react-icons/fi";
import { MdDeleteOutline, MdOutlineEdit } from "react-icons/md";


const Sidebar = () => {
  return (
    <>
      <div className='sidebar'>
        <aside className=" w-64 p-4 h-lvh	">
          <div className='flex button-grp'>
            <button className="bg-red-500 text-white px-2 py-2 rounded"><i><MdDeleteOutline /></i>Delete job</button>
            <button className="bg-blue-500 text-white px-2 py-2 rounded ml-2"><i><MdOutlineEdit /></i>Edit job</button>
          </div>
          <nav className='p-4'>
            <ul>
              <li className="mb-4"><i><FiUsers /></i><button className="text-gray-700">Applicants</button><span >400</span></li>
              <li className="mb-4"><i><FiUserCheck /></i><button className="text-gray-700">Matches</button><span >100</span></li>
              <li className="mb-4"><i><FaRegMessage /></i><button className="text-gray-700">Messages</button><span >140</span></li>
              <li className="mb-4"><i><FaEye /></i><button className="text-gray-700">View</button><span >800</span></li>
            </ul>
          </nav>
        </aside>
      </div>
    </>
  );
}

export default Sidebar;