
import React from 'react';
import Header from './Header';
import JobContent from './JobContent';

const Dashboard = () => {
  return (
    <div className=" h-screen">
      <main className="flex-1">
        <Header />
      </main>
      <JobContent />
    </div>
  );
}

export default Dashboard;