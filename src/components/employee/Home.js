import React, { useContext, useEffect, useState } from 'react';
import EmployeeContext from '../../context/employee/EmployeeContext';
import Dashboard from '../employee/Dashboard'
import PersonIcon from '@material-ui/icons/Person';
import EmpChart from '../layout/EmpChart';
import ProjectChart from '../layout/ProjectChart'
import LeaveChat from '../leaves/leaveChat';
import axios from 'axios';




export default function Home() {



    const userData = useContext(EmployeeContext);
    const { id, users, projects, getAllEmployees, getAllProjects } = userData;

    useEffect(async () => {

        getAllProjects();
        getAllEmployees();





    }
        , [])

    return (
        <div>

            <div className="container">
                <div className="row py-5">
                    <div className="col-md-2">

                        <Dashboard />

                    </div>

                    <div className="col-md-3 ml-5">
                        <div className="wrapper  mt-sm-5" style={{ minHeight: "225px", color: "white", backgroundColor: "#99e6e6" }}>
                            <div className="row py-2">
                                <div className="col-md-6 pt-md-0 pt-3">
                                    <h4><i className="fa fa-users fa-3x " aria-hidden="true"></i>     </h4>
                                </div>
                                <div className="col-md-6 pt-md-0 pt-3">
                                    <h4 className="fs-3 pt-2 pl-3 fw-600">{users.length}</h4>
                                </div>
                            </div>
                            <div className="row pt-2 ">
                                <h3 className="myalign">Head Count</h3>
                            </div>



                        </div>
                    </div>


                    <div className="col-md-3">
                        <div className="wrapper  mt-sm-5" style={{ minHeight: "225px", color: "white", backgroundColor: "#e699ff" }}>
                            <div className="row py-2">
                                <div className="col-md-6 pt-md-0 pt-3">
                                    <h4><i className="fa fa-briefcase fa-3x " aria-hidden="true"></i>     </h4>
                                </div>
                                <div className="col-md-6 pt-md-0 pt-3">
                                    <h4 className="fs-3 pt-2 pl-3 fw-600">{projects.length}</h4>
                                </div>
                            </div>
                            <div className="row pt-2 ">
                                <h3 className="myalign">Projects </h3>
                            </div>



                        </div>
                    </div>


                    <div className="col-md-3">
                        <div className="wrapper  mt-sm-5" style={{ minHeight: "225px", color: "white", backgroundColor: "#F5CBA7" }}>
                            <div className="row py-2">
                                <div className="col-md-6 pt-md-0 pt-3">
                                    <h4><i className="fa fa-user-plus fa-3x " aria-hidden="true"></i>     </h4>
                                </div>
                                <div className="col-md-6 pt-md-0 pt-3">
                                    <h4 className="fs-3 pt-2 pl-3 fw-600">10</h4>
                                </div>
                            </div>
                            <div className="row pt-2 ">
                                <h3 className="myalign">Vacancies</h3>
                            </div>



                        </div>
                    </div>




                </div>

            </div>

            <div className="row">

                <div className="col-md-5" style={{ marginLeft: "180px" }}>

                    <EmpChart />


                </div>
                <div className="col-md-5">
                    <ProjectChart />
                </div>
            </div>

        </div>




    )
}
