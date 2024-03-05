import React, { useState } from "react";
import Datepicker from "react-datepicker";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Allocated.css";
// import logo from "../Assets/logo.png";
import "react-datepicker/dist/react-datepicker.css";
import { FaCalendarAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
function Timesheet() {
  const [logDate, setLogDate] = useState("");
  const [logIn, setLogIn] = useState("");
  const [logOut, setLogOut] = useState("");
  const [grossHours, setGrossHours] = useState("");
  const [activityHours, setActivityHours] = useState("");
 
 
//   const Buttons =() => {
//     return(
//       <div style={{marginLeft:"28rem" , marginTop:"13px"}}>
//         <a href="#" className="btn btn-light">Submit</a>
//         <a href="#" className="btn btn-light">Cancel</a>
//         <a href="#" className="btn btn-primary">Back</a>
//       </div>
//     )
//   }
  const navigate=useNavigate();

  const Homepage = () =>{
    navigate('/homepage')
  }
  const [rows, setRows] = useState([{ id: 1 }]);
 
  const Row = ({ id, removeRow }) => (
    <div
      className="row row-cols-8 row-cols-lg-8 g-2 row3 full3"
      style={{ marginLeft: "20px" }}
    >
      <div className="col" style={{ marginLeft: "13px" }}>
        <select
          id="projectDropdown"
          style={{
            appearance: "none",
            border: "1px solid #ccc",
            padding: "5px",
            borderRadius: "4px",
            paddingRight: "48px",
            marginTop: "10px",
          }}
        >
          <option value="project1"> &#9660;</option>
          <option value="project2">PSFT</option>
          <option value="project3">SAP</option>
        </select>
      </div>
      <div className="col" style={{ marginRight: "3px" }}>
        <select
          id="projectDropdown"
          style={{
            appearance: "none",
            border: "1px solid #ccc",
            padding: "5px",
            borderRadius: "4px",
            paddingRight: "48px",
            marginTop: "10px",
          }}
        >
          <option value="project1"> &#9660;</option>
          <option value="project2">Support</option>
          <option value="project3">Testing</option>
          <option value="project3">Upgrade</option>
        </select>
      </div>
      <div className="col">
        <select
          id="projectDropdown"
          style={{
            appearance: "none",
            border: "1px solid #ccc",
            padding: "5px",
            borderRadius: "4px",
            paddingRight: "50px",
            marginTop: "10px",
          }}
        >
          <option value="project1" style={{ marginLeft: "20px" }}>
            {" "}
            &#9660;
          </option>
          <option value="project2">Fluid</option>
          <option value="project3">Testing</option>
        </select>
      </div>
      <div className="col" style={{ display: "flex", gap: "5px" }}>
        <input
          type="text"
          style={{
            border: "1px solid #ccc",
            // padding: "5px",
            borderRadius: "4px",
            width: "98px",
            marginTop: "10px",
          }}
        />
      </div>
      <div className="col" style={{ display: "flex", gap: "5px" }}>
        <input
          type="text"
          style={{
            border: "1px solid #ccc",
            padding: "5px",
            borderRadius: "4px",
            width: "78px",
            marginTop: "10px",
          }}
        />
      </div>
      <div className="col" style={{ display: "flex", gap: "5px" }}>
        <input
          type="text"
          style={{
            border: "1px solid #ccc",
            padding: "5px",
            borderRadius: "4px",
            width: "108px",
            marginTop: "10px",
          }}
        />
      </div>
      <div className="col" style={{ display: "flex", gap: "5px" }}>
        <input
          type="text"
          style={{
            border: "1px solid #ccc",
            padding: "5px",
            borderRadius: "4px",
            width: "108px",
            marginTop: "10px",
          }}
        />
        <div>
          <button
            className="remove-row-btn"
            onClick={() => removeRow(id)}
            style={{ marginTop: "0.7rem" }}
          >
            -
          </button>
        </div>
      </div>
    </div>
  );
 
  const addRow = () => {
    const newRow = { id: rows.length + 1 };
    setRows([...rows, newRow]);
  };
 
  const removeRow = (rowId) => {
    if (rows.length > 1) {
      const updatedRows = rows.filter((row) => row.id !== rowId);
      setRows(updatedRows);
    }
  };
 
  const EmployeeData = () => {
    return (
      <div>
        <br></br>
        <h2 className="heading" style={{ fontSize: "25px" }}>
          Activity Allocation:
        </h2>
        <p>
          <strong style={{ fontsize: "15px" }}>Employee Name:</strong>
          Saraswati Senapati
          <br></br>
          <br></br>
          <strong style={{ fontsize: "15px" }}>Employee ID:</strong>
          LD0001
        </p>
        
        <p>
          <strong style={{ fontsize: "15px" }}>Role:</strong>Developer
        </p>
        <p>
          <strong style={{ fontsize: "15px" }}>Reporting Manager:</strong>
          DiptiRanjan Dash
        </p>
      </div>
    );
  };
  // export default EmployeeData;
  function CustomInput({ value, onClick }) {
    return (
      <div className="input-group">
        <input
          type="text"
          className="form-control"
          value={value}
          onClick={onClick}
        />
        <div className="input-group-append">
          <div className="input-group-text">
            <FaCalendarAlt />
          </div>
        </div>
      </div>
    );
  }
  const WeekCalendar = () => {
    const [selectedDate, setDate] = useState(null);
    return (
      <div className="row" style={{ width: "200px" }}>
        <Datepicker
          selected={selectedDate}
          onChange={(date) => setDate(date)}
          customInput={<CustomInput />}
        />
      </div>
    );
  };
 
  // export default WeekCalender
  return (
    <div className="d-flex  justify-content-center align-items-center ">
      <div className="container">
        <div className="abc" >
          <img src="https://www.ldtech.in/images/logo.png" style={{marginTop:"2rem", marginLeft:"1 rem"}}/>
          <div >
           <input type="submit" value={"Home"} className="homeee"  onClick={Homepage}style={{marginLeft:"57rem", width:"70px", backgroundColor:"skyblue", height:"40px" , marginTop:"-1rem"}}></input>
          </div>
        </div>
        <div className="row" style={{ display: "flex" }}>
          <div className="col-6">{EmployeeData()}</div>
 
          <div className="col-6" style={{ display: "flex", marginTop: "2rem" }}>
            <div
              className="row"
              style={{ fontSize: "18px", marginLeft: "5rem" }}
            >
              Alloted Date: {WeekCalendar()}
            </div>
            <br></br>
            {/* <div class="col">
            <input type='button' value={"Home"} className="Home_Button" id="homeclick"></input>
            </div> */}
            {/* <div
              className="row"
              style={{ fontSize: "18px", marginLeft: "5rem" }}
            >
              Week End Date: {WeekCalendar()}
            </div> */}
          </div>
        </div>
 
        <div className="bg-secondary h-40px">
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "50px",
              marginLeft: "40px",
            }}
          >
            <div>
              <label htmlFor="logDate">Log Date</label>
              <br></br>
              <input
                type="text"
                id="logDate"
                value={logDate}
                onChange={(e) => setLogDate(e.target.value)}
                style={{
                  background: "grey",
                  fontSize: " 12px",
                  paddingBottom: "10px",
                  marginTop: "10px",
                  marginRight: "10px",
                }}
              />
            </div>
            <div>
              <label htmlFor="logIn">Log In</label>
              <br></br>
              <input
                type="text"
                id="logIn"
                value={logIn}
                onChange={(e) => setLogIn(e.target.value)}
                style={{
                  background: "grey",
                  fontSize: " 12px",
                  paddingBottom: "10px",
                  marginTop: "10px",
                  marginRight: "10px",
                }}
              />
            </div>
            <div>
              <label htmlFor="logOut">Log Out</label>
              <br></br>
              <input
                type="text"
                id="logOut"
                value={logOut}
                onChange={(e) => setLogOut(e.target.value)}
                style={{
                  background: "grey",
                  fontSize: " 12px",
                  paddingBottom: "10px",
                  marginTop: "10px",
                  marginRight: "10px",
                }}
              />
            </div>
            <div>
              <label htmlFor="grossHours">Gross Hours</label>
              <br></br>
              <input
                type="text"
                id="grossHours"
                value={grossHours}
                onChange={(e) => setGrossHours(e.target.value)}
                style={{
                  background: "grey",
                  fontSize: " 12px",
                  paddingBottom: "10px",
                  marginTop: "10px",
                  marginRight: "10px",
                }}
              />
            </div>
            <div>
              <label htmlFor="activityHours">Activity Hours</label>
              <br></br>
              <input
                type="text"
                id="activityHours"
                value={activityHours}
                onChange={(e) => setActivityHours(e.target.value)}
                style={{
                  background: "grey",
                  fontSize: " 12px",
                  paddingBottom: "10px",
                  marginTop: "10px",
                  marginRight: "50px",
                }}
              />
            </div>
          </div>
          <br></br>
 
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              gap: "85px",
              fontSize: "16px",
              marginLeft: "3rem",
            }}
          >
            <div>Project:</div>
            <div>Project Type:</div>
            <div>Activity :</div>
            <div>Start Time:</div>
            <div>End Time:</div>
            <div>Description:</div>
            <div>Remark:</div>
          </div>
          <div>
            {rows.map((row) => (
              <Row key={row.id} id={row.id} removeRow={removeRow} />
            ))}
            <div className="add-row-btn-div">
              <button
                className="add-row-btn"
                onClick={addRow}
                style={{ marginLeft: "64rem" }}
              >
                +
              </button>
            </div>
          </div>
          <div
            style={{
              display: "flex",
              gap: "10px",
              marginLeft: "50rem",
              marginTop: "40px",
            }}
          >
            {/* <label htmlFor="project">Approval Status: </label>
            <div style={{ gap: "5px" }}>
              <input
                type="text"
                style={{
                  border: "1px solid #ccc",
                  padding: "5px",
                  borderRadius: "4px",
                  width: "158px",
                }}
              />
            </div> */}
          </div>
        </div>
        <div>
          {/* {Buttons()} */}
        </div>
      </div>
    </div>
  );
}
// }
export default Timesheet;
 