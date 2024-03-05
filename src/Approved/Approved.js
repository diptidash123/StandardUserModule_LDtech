import React from 'react'
import './Approved.css';
import {useNavigate} from 'react-router-dom';
export default function Rejectedstatuspage() {


    const navigate=useNavigate();

    const Homepage=() =>{
        navigate('/homepage')
    }
    return (
        <>
            <div className="fullpagecontainer">
                <div className="topcontainer">
                    <div class="split left">
                        <div class="centered1">
                            <img src="https://www.ldtech.in/images/logo.png" alt="companylogo" className='imagelogo' />
                            <p className="header">Employee Dashboard</p>
                            <p className="alignleft">Employee Name: Dipti Ranjan Dash</p>
                            <p className="alignleft">Role: Test Engineer</p>
                            <p className="alignleft">Project: Telenor,Oracle</p>
                            <p className="alignleft">Reporting Manager:SK</p>
                        </div>
                    </div>
                    <div class="split right">
                        <div class="centered2">
                            <input type='button' value={"Home"} onClick={Homepage} className="Home_Button" id="homeclick"></input>
                            <table>
                                <tr>
                                    <td className="align">Week Start Date:</td>
                                    <td><input type='date' className="weekdate"></input></td>
                                </tr>
                                <tr>
                                    <td className="align">Week End Date:</td>
                                    <td><input type='date' className="weekdate"></input></td>
                                </tr>
                            </table>
                            <tr>
                                <td id="Timeapprovalstatus">Timesheet Approval Status:</td> <input type="button" value={"Approved"} className="ApprovaLButton" />
                            </tr>
                        </div>
                    </div>
                </div>
                <hr></hr>
                <table>
                    <tr>
                      <th className='table_headings_first_row_alignment'>Date</th>
                      <th className='table_headings_first_row_alignment'>Login</th>
                      <th className='table_headings_first_row_alignment'>Logout</th>
                      <th className='table_headings_first_row_alignment'>Project</th>
                      <th className='table_headings_first_row_alignment'>Client</th>
                      <th className='table_headings_first_row_alignment'>Activity Hour</th>
                      <th className='table_headings_first_row_alignment'>Status</th>
                    </tr>
                    <tr>
                        <td className="row_data_information"><input type="text" className="sizeadjustbale" /></td>
                        <td className="row_data_information"><input type="text" className="sizeadjustbale" /></td>
                        <td className="row_data_information"><input type="text" className="sizeadjustbale" /></td>
                        <td className="row_data_information"><input type="text" className="sizeadjustbale" /></td>
                        <td className="row_data_information"><input type="text" className="sizeadjustbale" /></td>
                        <td className="row_data_information"><input type="text" className="sizeadjustbale" /></td>
                        <td className="row_data_information"><input type="text" className="sizeadjustbale"
                            id="tablerow1" /></td>
                    </tr>
                    <tr>
                        <td className="row_data_information"><input type="text" className="sizeadjustbale" /></td>
                        <td className="row_data_information"><input type="text" className="sizeadjustbale" /></td>
                        <td className="row_data_information"><input type="text" className="sizeadjustbale" /></td>
                        <td className="row_data_information"><input type="text" className="sizeadjustbale" /></td>
                        <td className="row_data_information"><input type="text" className="sizeadjustbale" /></td>
                        <td className="row_data_information"><input type="text" className="sizeadjustbale" /></td>
                        <td className="row_data_information"><input type="text" className="sizeadjustbale" id="tablerow2" /></td>
                    </tr>
                    <tr>
                        <td className="row_data_information"><input type="text" className="sizeadjustbale" /></td>
                        <td className="row_data_information"><input type="text" className="sizeadjustbale" /></td>
                        <td className="row_data_information"><input type="text" className="sizeadjustbale" /></td>
                        <td className="row_data_information"><input type="text" className="sizeadjustbale" /></td>
                        <td className="row_data_information"><input type="text" className="sizeadjustbale" /></td>
                        <td className="row_data_information"><input type="text" className="sizeadjustbale" /></td>
                        <td className="row_data_information"><input type="text" className="sizeadjustbale" id="tablerow3" /></td>
                    </tr>
                    <tr>
                        <td className="row_data_information"><input type="text" className="sizeadjustbale" /></td>
                        <td className="row_data_information"><input type="text" className="sizeadjustbale" /></td>
                        <td className="row_data_information"><input type="text" className="sizeadjustbale" /></td>
                        <td className="row_data_information"><input type="text" className="sizeadjustbale" /></td>
                        <td className="row_data_information"><input type="text" className="sizeadjustbale" /></td>
                        <td className="row_data_information"><input type="text" className="sizeadjustbale" /></td>
                        <td className="row_data_information"><input type="text" className="sizeadjustbale" id="tablerow4" /></td>
                    </tr>
                    <tr>
                        <td className="row_data_information"><input type="text" className="sizeadjustbale" /></td>
                        <td className="row_data_information"><input type="text" className="sizeadjustbale" /></td>
                        <td className="row_data_information"><input type="text" className="sizeadjustbale" /></td>
                        <td className="row_data_information"><input type="text" className="sizeadjustbale" /></td>
                        <td className="row_data_information"><input type="text" className="sizeadjustbale" /></td>
                        <td className="row_data_information"><input type="text" className="sizeadjustbale" /></td>
                        <td className="row_data_information"><input type="text" className="sizeadjustbale" id="tablerow5" /></td>
                    </tr>
                    <tr>
                        <td className="row_data_information"><input type="text" className="sizeadjustbale" disabled /></td>
                        <td className="row_data_information"><input type="text" className="sizeadjustbale" disabled /></td>
                        <td className="row_data_information"><input type="text" className="sizeadjustbale" disabled /></td>
                        <td className="row_data_information"><input type="text" className="sizeadjustbale" disabled /></td>
                        <td className="row_data_information"><input type="text" className="sizeadjustbale" disabled /></td>
                        <td className="row_data_information"><input type="text" className="sizeadjustbale" disabled /></td>
                        <td className="row_data_information"><input type="text" className="sizeadjustbale" disabled id="tablerow6" /></td>
                    </tr>
                    <tr>
                        <td className="row_data_information"><input type="text" className="sizeadjustbale" disabled /></td>
                        <td className="row_data_information"><input type="text" className="sizeadjustbale" disabled /></td>
                        <td className="row_data_information"><input type="text" className="sizeadjustbale" disabled /></td>
                        <td className="row_data_information"><input type="text" className="sizeadjustbale" disabled /></td>
                        <td className="row_data_information"><input type="text" className="sizeadjustbale" disabled /></td>
                        <td className="row_data_information"><input type="text" className="sizeadjustbale" disabled /></td>
                        <td className="row_data_information"><input type="text" className="sizeadjustbale" disabled id="tablerow7" /></td>
                    </tr>
                </table>
                <div style={{marginLeft:"61rem"}}>
                    <p>Total Activity Hour: <input type="submit" value={"32Hr"} id="totaltimebutton_lastcontainer" /> </p>
                </div>
            </div>
        </>

    )
}