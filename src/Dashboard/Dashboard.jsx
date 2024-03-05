import React from "react";
import "./dashboard.css";
import { useNavigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
function Dashboard() {
  const navigate = useNavigate();

  const entry = () => {
    navigate("/entry");
  };

  const Homepage = () => {
    navigate("/homepage");
  };

  return (
    <div className="main_div container w-75" style={{overflowX:"hidden" , overflowY:"hidden"}}>
      <img src="https://www.ldtech.in/images/logo.png" alt="logo" />
      <div>
        <p className="pe">Employee Dashboard</p>
        <p className="ena">Employee Name: Soumya Behera</p>
        <p className="ena">Role: Developer</p>
        <p className="ena">Project: Peoplesoft</p>
        <p className="ena">Reporting Manager: SK</p>
      </div>
      <div style={{ textAlign: "right", marginTop: "-150px" }}>
        <button
          style={{
            margin: "5px",
            backgroundColor: "skyblue",
            fontWeight: "500",
            width: "100px",
            height: "30px",
          }}
        >
          <p className="anc" onClick={Homepage}>
            HOME
          </p>
          <br></br>
        </button>
        <div
          style={{ display: "flex", textAlign: "right", paddingLeft: "610px" }}
        >
          <p>Week Start Date: </p>
          <div>
            <input type="date" className="form-control" />
          </div>
        </div>
        <div style={{ display: "flex", textAlign: "right", paddingLeft: "610px" }}>
          <p>Week End Date: </p>
          <div>
            <input type="date" className="form-control" />
          </div>
        </div>
        <div className="hts">
          <p>Timesheet Approval Status:</p>
          <div>
            <input type="text" className="forminp" />
          </div>
        </div>
      </div>
      <hr className="w-100" />
      <div className="row row-cols-7 row-cols-lg-7 g-2">
        <div  style={{display:"flex", flexDirection:"row", gap:"85px" , marginLeft:"1rem"}}>
        <p >Date</p>
        <p >Login</p>
        <p >Logout</p>
        <p >Project</p>
        <p >Client</p>
        <p >Activity Hour</p>
        <p >Status</p>
        </div>
        <div className="col">
          <input className="inp" type="text" />
        </div>
        <div className="col">
          <input className="inp" type="text" />
        </div>
        <div className="col">
          <input className="inp" type="text" />
        </div>
        <div className="col">
          <input className="inp" type="text" />
        </div>
        <div className="col">
          <input className="inp" type="text" />
        </div>
        <div className="col">
          <input className="inp" type="text" />
        </div>
        <div className="col">
          <button className="stab" onClick={entry}></button>
        </div>
        <div className="col">
          <input className="inp" type="text" />
        </div>
        <div className="col">
          <input className="inp" type="text" />
        </div>
        <div className="col">
          <input className="inp" type="text" />
        </div>
        <div className="col">
          <input className="inp" type="text" />
        </div>
        <div className="col">
          <input className="inp" type="text" />
        </div>
        <div className="col">
          <input className="inp" type="text" />
        </div>
        <div className="col">
          <button className="stab"></button>
        </div>

        <div className="col">
          <input className="inp" type="text" />
        </div>
        <div className="col">
          <input className="inp" type="text" />
        </div>
        <div className="col">
          <input className="inp" type="text" />
        </div>
        <div className="col">
          <input className="inp" type="text" />
        </div>
        <div className="col">
          <input className="inp" type="text" />
        </div>
        <div className="col">
          <input className="inp" type="text" />
        </div>
        <div className="col">
          <button className="stab"></button>
        </div>
        <div className="col">
          <input className="inp" type="text" />
        </div>
        <div className="col">
          <input className="inp" type="text" />
        </div>
        <div className="col">
          <input className="inp" type="text" />
        </div>
        <div className="col">
          <input className="inp" type="text" />
        </div>
        <div className="col">
          <input className="inp" type="text" />
        </div>
        <div className="col">
          <input className="inp" type="text" />
        </div>
        <div className="col">
          <button className="stab"></button>
        </div>

        <div className="col">
          <input className="inp" type="text" />
        </div>
        <div className="col">
          <input className="inp" type="text" />
        </div>
        <div className="col">
          <input className="inp" type="text" />
        </div>
        <div className="col">
          <input className="inp" type="text" />
        </div>
        <div className="col">
          <input className="inp" type="text" />
        </div>
        <div className="col">
          <input className="inp" type="text" />
        </div>
        <div className="col">
          <button className="stab"></button>
        </div>
        <div className="col">
          <input className="depp" type="text" />
        </div>
        <div className="col">
          <input className="depp" type="text" readOnly />
        </div>
        <div className="col">
          <input className="depp" type="text" readOnly />
        </div>
        <div className="col">
          <input className="depp" type="text" readOnly />
        </div>
        <div className="col">
          <input className="depp" type="text" readOnly />
        </div>
        <div className="col">
          <input className="depp" type="text" readOnly />
        </div>
        <div className="col">
          <input className="depp1" type="text" readOnly />
        </div>
        <div className="col">
          <input className="depp" type="text" />
        </div>
        <div className="col">
          <input className="depp" type="text" readOnly />
        </div>
        <div className="col">
          <input className="depp" type="text" readOnly />
        </div>
        <div className="col">
          <input className="depp" type="text" readOnly />
        </div>
        <div className="col">
          <input className="depp" type="text" readOnly />
        </div>
        <div className="col">
          <input className="depp" type="text" readOnly />
        </div>
        <div className="col">
          <input className="depp1" type="text" readOnly />
        </div>
      </div>
      <br />
      <br />
      <div className="tha">
        <p>Total Activity Hour-</p>
        <input className="inp1" type="text" />
      </div>
    </div>
  );
}

export default Dashboard;
// className="row row-cols-7 row-cols-lg-7 g-2"