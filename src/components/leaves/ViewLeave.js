import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EmployeeContext from '../../context/employee/EmployeeContext';
import Dashboard from '../employee/Dashboard';
import LeaveCard from './LeaveCard';

export default function ViewLeaves() {

    const context = useContext(EmployeeContext);

    const { leaves } = context;

    useEffect(() => {

        console.log(leaves)

    }, [])







    return (
        <div className="container">
            <div className="row py-5">
                <div className="col-md-2">
                    <Dashboard />
                </div>
                <div className="col-md-10 mt-5 text-center"  >


                    <div className="card bg-dark text-light">
                        <div className="card-body">
                            <div className="row">
                                <div className="col-md-2">
                                    <h7>SNO.</h7>
                                </div>
                                <div className="col-md-2">
                                    <h7>From</h7>
                                </div>
                                <div className="col-md-2">
                                    <h7>To</h7>
                                </div>
                                <div className="col-md-3">
                                    <h7>Days</h7>
                                </div>
                                <div className="col-md-3">
                                    <h7>Type</h7>
                                </div>
                            </div>
                        </div>
                    </div>


                    {leaves.map(leave => <LeaveCard key={leave.id} leave={leave} />)}


                </div>



            </div>
        </div>

    )
}
