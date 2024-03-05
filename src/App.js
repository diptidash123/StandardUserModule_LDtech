import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login/Login';
import ForgotPassword from './Forgotpassword/Forget.jsx'; 
import Homepage from './Homepage/Homepage.js'
import Dashboard from './Dashboard/Dashboard.jsx'
import TimesheetEntry from './TimesheetEntry/timesheet.js'
import Allocated from './Allocated/Allocated.js'
import Rejected from './RejectedStatus/Rejectedstatuspage.js'
import Approved from './Approved/Approved.js'
import Confirm from './Confirm/Confirm.js'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/forgot" element={<ForgotPassword />} />
        <Route path="/homepage" element={<Homepage />} />
        <Route path="/dashboard" element={<Dashboard/>} />
        <Route path="/entry"  element={<TimesheetEntry/>} />
        <Route path="/allocated" element={<Allocated/>} />
        <Route path="/rejected" element={<Rejected/>} />
        <Route path="/approved" element={<Approved/>} />
        <Route path='/confirm' element={<Confirm/>}/>
      </Routes>
    </Router>
  );
}

export default App;
