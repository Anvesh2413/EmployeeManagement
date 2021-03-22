import React, { useContext, useState, useEffect } from 'react';
import { Link, Redirect } from 'react-router-dom';
import EmployeeContext from '../../context/employee/EmployeeContext';
import Dashboard from '../employee/Dashboard';
import LeaveChat from './leaveChat';

export default function LeaveDashboard() {

    const context = useContext(EmployeeContext);
    const { viewLeaves } = context;
    useEffect(() => {
        viewLeaves();

    }, [])

    return (
        <div >
            <div className="container">
                <div className="row py-5">
                    <div className="col-md-2">
                        <Dashboard />
                    </div>

                    <div className="col-md-3 mt-4 mr-5" style={{marginLeft:"150px"}}>
                        <Link to="/leaves">
                            <div className="wrapper  mt-sm-5" style={{ minHeight: "225px", color: "white", backgroundColor: "#99e6e6" }} >
                                <div className="row py-2">
                                    <div className="col-md-3 pt-md-0 pt-3">

                                        <h4><i className="fa fa-calendar-times-o fa-3x " aria-hidden="true"></i></h4> <br />
                                        <h5>Apply Leave</h5>

                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-md-3 mt-4 ml-5 mr-5">
                        <Link to="/leavesremaining" >
                            <div className="wrapper  mt-sm-5" style={{ minHeight: "225px", color: "white", backgroundColor: "#DAF7A6" }}>
                                <div className="row py-2">
                                    <div className="col-md-3 pt-md-0 pt-3">

                                        <h4><i className="fa fa-calculator fa-3x " aria-hidden="true"></i></h4> <br />
                                        <h5>Leaves Remaining</h5>

                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>


                    <div className="col-md-3 " style={{ marginLeft: "500px" }}>
                        <Link to='/viewleave'>
                            <div className="wrapper  mt-sm-5" style={{ minHeight: "225px", color: "white", backgroundColor: "#F5CBA7 " }}>
                                <div className="row py-2">
                                    <div className="col-md-3 pt-md-0 pt-3">

                                        <h4><i className="fa fa-file-text-o fa-3x " aria-hidden="true"></i></h4> <br />
                                        <h5>View Leaves</h5>

                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>





                </div>
            </div>
        
        </div>
    )
}
