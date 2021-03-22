import axios from 'axios';
import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import EmployeeContext from '../../context/employee/EmployeeContext';
import Dashboard from './Dashboard'
import EmployeeCard from './EmployeeCard';
export default function UpdateProfile({ match }) {

    const context = useContext(EmployeeContext);
    const { getprofile, profile, updateprofile } = context;
    const [user, setUser] = useState(context.profile)

    useEffect(() => {
        getprofile(match.params.id);

        setUser(profile)

    }, [])
    useEffect(() => {
        setUser(profile)

    }, [profile])


    const deleteEmployee = async () => {
        const res = await axios.delete(`https://my-json-server.typicode.com/anvesh2413/EmployeeDatabase/employees/${match.params.id}`);
        console.log('deleted');
        window.history.back()
    }

    const updateEmployee = async (e) => {
        e.preventDefault();
        await updateprofile(user, user.id);

        window.history.back()



    }


    return (
        <div >
            <div className="container">
                <div className="row mt-5">
                    <div className="col-md-2 col-sm-2" >
                        <Dashboard />
                    </div>
                    {/* <div className="col-md-2 col-sm-2" >
              <EmployeeCard key={user.id} value={user} />
          </div> */}
                    <div className="col-md-8">
                        <form onSubmit={(e) => updateEmployee(e)}>
                            <div className="wrapper bg-white mt-sm-5">
                                <h4 className="pb-4 border-bottom">Account settings</h4>
                                <div className="d-flex align-items-start py-3 border-bottom"> <img src={user.avatar} className="img" alt="" />
                                    
                                </div>
                                <div className="py-2">
                                    <div className="row py-2">
                                        <div className="col-md-6"> <label htmlFor="name"> Name</label> <input type="text" className="bg-light form-control" value={user.name} onChange={(e) => { setUser({ ...user, name: e.target.value }) }} /> </div>
                                        <div className="col-md-6 pt-md-0 pt-3"> <label htmlFor="DOJ">Date of Joining</label> <input type="date" className="bg-light form-control" value={user.DOJ} readOnly /> </div>
                                    </div>
                                    <div className="row py-2">
                                        <div className="col-md-6"> <label htmlFor="password"> Change Password</label> <input type="password" className="bg-light form-control" value={user.password} onChange={(e) => { setUser({ ...user, password: e.target.value }) }} /> </div>
                                        <div className="col-md-6"> <label htmlFor="password"> Confirm  Password</label> <input type="password" className="bg-light form-control" value={user.password} onChange={(e) => { setUser({ ...user, password: e.target.value }) }} /> </div>

                                    </div>
                                    <div className="row py-2">
                                        <div className="col-md-6"> <label htmlFor="email">Email Address</label> <input type="text" className="bg-light form-control" value={user.email} readOnly /> </div>
                                        <div className="col-md-6 pt-md-0 pt-3"> <label htmlFor="phone">Phone Number</label> <input type="tel" className="bg-light form-control" placeholder="+91 " value={user.phone}  onChange={(e) => { setUser({ ...user, phone: e.target.value }) }} /> </div>
                                    </div>
                                    <div className="row py-2">
                                        <div className="col-md-6"> <label htmlFor="designation">Designation</label> <select name="designation" id="designation" className="bg-light" value={user.designation} onChange={(e) => setUser({ ...user, designation: e.target.value })} >
                                            <option >Intern</option>
                                            <option  >Associate Software Engineer</option>
                                            <option>Software Engineer</option>
                                            <option >Senior Software Engineer</option>
                                            <option >Project Manager</option>
                                        </select> </div>
                                        <div className="col-md-6 pt-md-0 pt-3" id="location"> <label htmlFor="location">Location</label>
                                            <div className="arrow"> <select name="location" id="location" className="bg-light" value={user.location} onChange={(e) => setUser({ ...user, location: e.target.value })}>
                                                <option >Pune</option>
                                                <option>Mumbai</option>
                                                <option >Banglore</option>

                                            </select> </div>
                                        </div>
                                    </div>
                                    <div className="py-3 pb-4 border-bottom"> <button type="submit" className="btn btn-primary mr-3">Save Changes</button> <button className="btn border button"><Link to='/employees'>Cancel</Link></button> </div>
                                    <div className="d-sm-flex align-items-center pt-3" id="deactivate">
                                        <div> <b>Deactivate account</b>
                                            <p>Details about your company account and password</p>
                                        </div>
                                        <div className="ml-auto"> <button className="btn danger" onClick={() => deleteEmployee()}>Deactivate</button> </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
