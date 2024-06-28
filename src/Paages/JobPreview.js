import React from 'react';
import Sidebar from '../Components/Sidebar';
import { FaLocationDot } from "react-icons/fa6";
import { TbCoins } from "react-icons/tb";

const JobPreview = () => {
  return (
    <div className="flex job-container">
      <div className='w-100'>
        <div className="bg-white p-6 shadow-sm rounded-lg">
          <h2 className="text-2xl font-bold mb-2">Senior Product Designer <span className="text-xs text-gray-500 ">Posted 2days ago </span><span className="bg-green-100	text-green-600	rounded-full	outline-green-950 p-1 text-xs border"><b className='items-center'>.</b>open</span></h2>
          <p className="shadow-sm text-gray-600 mb-4 loc"><span className='mr-1'><FaLocationDot /></span> Delaware, USA - <span className='mr-1'>    <TbCoins /> </span>    $300k-$400k</p>
          <div className="mb-4 flex skills shadow-sm">
            <div className=''>
              <p className="text-gray-600 mb-4">Skills Required</p>
              <p className=" bg-slate-50	 text-gray-800 text-sm px-2 rounded-full">Figma</p>
              <p className=" bg-slate-50	 text-gray-800 text-sm px-2 rounded-full">Adobe Illustrator</p>
              <p className=" bg-slate-50	 text-gray-800 text-sm px-2 rounded-full">Adobe XD</p>
            </div>
            <div className=''>
              <p className="text-gray-600 mb-4">Preferred Language</p>
              <span className="inline-block  text-gray-800 text-sm px-2 rounded-full">English</span>
            </div>
            <div className=''>
              <p className="text-gray-600 mb-4">Type</p>
              <span className="inline-block text-gray-800">Full Time</span>
            </div>
            <div className=''>
              <p className="text-gray-600 mb-4">Years Of Experience</p>
              <span className="inline-block text-gray-800">3+ Years of Experience</span>
            </div>
          </div>
          <div>
            <p className="text-gray-600 mb-1">About the job</p>
            <p className="text-gray-700">1. work on  the UI/UX research design...</p>
            <p className="text-gray-700">2. Handle the UI/UX research design...</p>
            <p className="text-gray-700">3. Handle the UI/UX research design...</p>
            <p className="text-gray-700">4. Handle the UI/UX research design...</p>
            <p> Benifits:
              <ul className="list-disc ml-10">
                <li>Health Insurance</li>
                <li>PF</li>
              </ul>
              Benifits:
              <ol className="list-disc ml-10">
                <li>Health Insurance</li>
                <li>PF</li>
              </ol>
              Benifits:
              <ol className="list-disc ml-10">
                <li>Health Insurance</li>
                <li>PF</li>
              </ol>
              Work Location : In Person</p>
          </div>
        </div>
        <div className="bg-white p-6 rounded-lg mt-6">
          <h3 className="text-xl font-bold mb-2"><img src="/Images/s.jpg" alt="" className="h-10 w-10 rounded-full"/> Atlassian</h3>
          <div className="flex w-100 ">
            <div className='w-1/2'>
              <p className="text-gray-500 text-xs">Company size<br /><span className="text-base mb-4 block">1k - 2k Employees</span></p>
              <p className="text-gray-500 text-xs">Sector <br /> <span className="text-base mb-4 block"> Information Technology, Infrastructure</span></p>
              <p className="text-gray-500 text-xs">Founded in <br /> <span className="text-base mb-4 block">2019</span></p>
            </div>
            <div className="w-1/2">
              <p className="text-gray-500 text-xs">Type<br /><span className="text-base mb-4 block">Private</span></p>
              <p className="text-gray-500 text-xs">Funding <br /> <span className="text-base mb-4 block"> Bootstrapped</span></p>
              <p className="text-gray-500 text-xs">Founded By <br /> <span className="text-base mb-4 block">Scott Farquhar, Mike Cannon-Brookes</span></p>
            </div>
          </div>
        </div>
      </div>
      <div className='h-lvh'>
        <Sidebar />
      </div>
    </div>
  );
}

export default JobPreview;