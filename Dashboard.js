import React from 'react';
import './Dashboard.css';

function Dashboard_IPAssets(){
  return (
    <div className="frame1">
      <p>Frame 1 for the IPAssets.</p>
    </div>
  );
}

function Dashboard_Publications(){
  return(
  <div className="frame2">
    <p>Frame 2 for the Publications</p>
  </div>
  );
}


function Dashboard() {
  return (
    <div className='dashboard'>
      <div className='dashboardTitle'>
      <h6>DASHBOARD</h6>
      </div>
        <Dashboard_IPAssets />
        <Dashboard_Publications />
    </div>
  )
}

export default Dashboard