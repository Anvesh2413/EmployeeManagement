import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EmployeeContext from '../../context/employee/EmployeeContext';

import Dashboard from '../employee/Dashboard';

export default function Leaves() {

    const context = useContext(EmployeeContext);
    const { leaves, applyLeave, profile, updateprofile, remaining_leave } = context;
    const userid = JSON.parse(sessionStorage.getItem('session')).id;
    const [from, setFrom] = useState()
    const [to, setTo] = useState()
    const [type, setType] = useState('')
    const [leave, setLeave] = useState(10)
    const id = leaves.length + 1;




    const leaveApply = (e) => {
        e.preventDefault()

           if(from===undefined||to===undefined)
           {
               window.history.back();
           }

         else{
        const applying = Math.abs(from.getDate() - to.getDate()) + 1;
        if (leave >= applying) {
            applyLeave({ id, from, to, type, userid });


            window.history.back();



        }
        else {
            alert('Leave can not be applied');
        }
    }
    }




    return (
        <div className="container">
            <div className="row py-5">
                <div className="col-md-2">
                    <Dashboard />
                </div>
                <div className="col-md-10">
                    <form onSubmit={(e) => leaveApply(e)}>
                        <div className="wrapper bg-white mt-sm-5">
                            <div className="row py-2">
                                <div className="col-md-6 pt-md-0 pt-3">
                                    <h4 className="pb-4 border-bottom">Apply Leave  </h4>
                                </div>

                            </div>
                            <div className="py-2">
                                <div className="row py-2">
                                    <div className="col-md-6 pt-md-0 pt-3"> <label htmlFor="from">From</label> <input type="date" className="bg-light form-control" onChange={(e) => setFrom(e.target.valueAsDate)} /> </div>
                                    <div className="col-md-6 pt-md-0 pt-3"> <label htmlFor="to">To</label> <input type="date" className="bg-light form-control" onChange={(e) => setTo(e.target.valueAsDate)} /> </div>
                                </div>


                                <div className="row py-2">
                                    <div className="col-md-6"> <label htmlFor="type">Type</label> <select name="type" id="type" className="bg-light" onChange={(e) => setType(e.target.value)}>
                                        <option  >Select Type</option>
                                        <option  >Paid Leave</option>
                                        <option>Unpaid Leave</option>
                                        <option >Work From Home</option>
                                        <option >Sick Leave</option>
                                    </select> </div>


                                </div>
                                <div className="py-3 pb-4 border-bottom"> <button type="submit" className="btn btn-primary mr-3">Apply Leave</button> <button className="btn border button"><Link to='/home'>Cancel</Link></button> </div>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
