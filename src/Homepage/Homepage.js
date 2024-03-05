import './Homepage.css';
import { PieChart } from '@mui/x-charts/PieChart';
import React, { useState } from 'react';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';
import { useNavigate } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";


const approved=10;
const rejected=12;
const pendings=8;
function App() {
  const [date, setDate] = useState(new Date());

  const onChange = (newDate) => {
    setDate(newDate);
  };
  
  const navigate=useNavigate();

  const Dashboard =()=>{
      navigate('/dashboard');
  }
  const Assigned =()=>{
    navigate('/allocated');
}
const Rejected =()=>{
  navigate('/rejected');
}
const Login =()=>{
  navigate('/');
}
const Approved=() =>{
  navigate('/approved')
}
  const [chartData] = useState([
    {
      data: [
        { id: 0, value: rejected,  color: 'yellow' },
        { id: 1, value: approved,  color: 'green' }
      ],
    },
  ]);

  const approve= chartData[0].data[0].color;
  const reject= chartData[0].data[1].color;

    
  
  return (
    
    <div className="Home">
      <div className='titlebar'>
        <img className='logo' src='https://www.ldtech.in/images/logo.png' alt='logo' ></img>
        <h1 className='title'>Time Sheet Application</h1>
      </div>
      <div className='sidebar'>
        <div className='box1'>
          <button className='btn'onClick={Dashboard} style={{alignItems:"center" , justifyContent:"center", marginLeft:"3rem"}}>
            <h5> Employee Dashboard</h5>
          </button>
        </div> 
        <div className='box1'>
          <button className='btn' onClick={Assigned} style={{alignItems:"center" , justifyContent:"center", marginLeft:"3rem"}}>
            <h5>Allocated Activity</h5>
          </button>
        </div>
        <div className='box1'>
          <button className='btn' onClick={Approved} style={{alignItems:"center" , justifyContent:"center", marginLeft:"3rem"}}>
            <h5>Approved Timesheets </h5>
          </button>
        </div>
        <div className='box1'>
          <button className='btn' onClick={Rejected} style={{alignItems:"center" , justifyContent:"center", marginLeft:"3rem"}}>
            <h5>Rejected Timesheets</h5>
          </button>
        </div>
        <div className='box1'>
          <button className='btn' onClick={Login} style={{alignItems:"center" , justifyContent:"center", marginLeft:"3rem"}}>
            <h5>SignOut</h5>
          </button>
        </div>
      </div>
      <div className='sidebar1'>
          <div className='box2'>
            <p className='paragraph'>You have no pending action</p>
            <img className='action' src='https://cdn-icons-png.flaticon.com/128/4303/4303922.png' alt='cross' ></img>
            </div>
          <div className='status'>
              <div className='box3'>
                <span>{approved}</span>
                <h4>Approved &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <img src='https://cdn-icons-png.flaticon.com/128/1442/1442912.png' className='tic' alt='approve'></img>
                </h4>
              </div>
              <div className='box3'>
                <span>{rejected}</span>
                <h4>Rejected &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <img src='https://cdn-icons-png.flaticon.com/128/1617/1617543.png' className='tic' alt='reject'></img>
                </h4>
              </div>
              <div className='box3'>
                <span>{pendings}</span>
                <h4>Pendings &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                  <img src='https://cdn-icons-png.flaticon.com/128/833/833602.png' className='tic' alt='pending'></img>
                </h4>
              </div>
              
          </div>
      </div>
      
      <div className='space'>
          <div className='space1' style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <div className='pie'>
              <PieChart
                  series={chartData}
                  width={250}
                  height={250}
              />
              <div>
                Total no. of status: {approved+rejected}
              </div>
              <div>
                <button style={{ background:approve, height: '20px', width: '20px' }}/>&nbsp;&nbsp; Rejected status: {rejected}
              </div>
              <div>
                <button style={{ background:reject, height: '20px', width: '20px' }}/>&nbsp;&nbsp;&nbsp; Approved status: {approved}
              </div>
            </div>
          </div>

          <div className='space2' >
            <Calendar onChange={onChange} value={date} />
          </div>

      </div> 
     
    </div>
  );
}

export default App;



