import React, { useContext, useState, useEffect } from 'react'
import EmployeeContext from '../../context/employee/EmployeeContext'
import { Link } from 'react-router-dom'
import Dashboard from '../employee/Dashboard'
export default function AccountSetting({ match }) {

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




    const updateEmployee = (e) => {
        e.preventDefault();
        updateprofile(user, user.id);
        window.history.back();
    }


    return (
        <div>
            <div className="row py-4">
                <div className="col-md-2 col-sm-2" >
                    <Dashboard id={match.params.id} />
                </div>
                <div className="col-md-9 col-sm-2 ml-5" >
                    <form onSubmit={(e) => updateEmployee(e)}>
                        <div className="wrapper bg-white mt-sm-5">
                            <h4 className="pb-4 border-bottom">Account settings</h4>
                            <div className="d-flex align-items-start py-3 border-bottom"> <img src={user.avatar} className="img" alt="" />
                                <div className="pl-sm-4 pl-2" id="img-section"> <b>Profile Photo</b>
                                    <p>Accepted file type .png. Less than 1MB</p> <button className="btn button border"><b><input type="file" onChange={(e) => console.log(e.target.value)} /></b></button>
                                </div>
                            </div>
                            <div className="py-2">
                                <div className="row py-2">
                                    <div className="col-md-6"> <label htmlFor="name"> Name</label> <input type="text" className="bg-light form-control" value={user.name} onChange={(e) => { setUser({ ...user, name: e.target.value }) }} /> </div>
                                    <div className="col-md-6 pt-md-0 pt-3"> <label htmlFor="DOJ">Date of Joining</label> <input type="date" className="bg-light  form-control" value={user.DOJ} readOnly disabled={true} /> </div>
                                </div>
                                <div className="row py-2">
                                    <div className="col-md-6"> <label htmlFor="password"> Change Password</label> <input type="password" className="bg-light form-control" value={user.password} onChange={(e) => { setUser({ ...user, password: e.target.value }) }} /> </div>
                                    <div className="col-md-6"> <label htmlFor="password"> Confirm  Password</label> <input type="password" className="bg-light form-control" value={user.password} onChange={(e) => { setUser({ ...user, password: e.target.value }) }} /> </div>

                                </div>
                                <div className="row py-2">
                                    <div className="col-md-6"> <label htmlFor="email">Email Address</label> <input type="text" className="bg-light form-control" value={user.email} /> </div>
                                    <div className="col-md-6 pt-md-0 pt-3"> <label htmlFor="phone">Phone Number</label> <input type="tel" className="bg-light form-control" placeholder="+91 " value={user.phone} onChange={(e) => { setUser({ ...user, phone: e.target.value }) }} /> </div>
                                </div>
                                <div className="row py-2">
                                    <div className="col-md-6"> <label htmlFor="designation">Designation</label> <select name="designation" id="designation" className="bg-light" value={user.designation} readOnly disabled={true}>
                                        <option  >Associate Software Engineer</option>
                                        <option>Software Engineer</option>
                                        <option >Senior Software Engineer</option>
                                        <option >Project Manager</option>
                                    </select> </div>
                                    <div className="col-md-6 pt-md-0 pt-3" id="location"> <label htmlFor="location">Location</label>
                                        <div className="arrow"> <select name="location" id="location" className="bg-light" value={user.location} readOnly disabled={true}>
                                            <option >Pune</option>
                                            <option>Mumbai</option>
                                            <option >Banglore</option>

                                        </select> </div>
                                    </div>
                                </div>
                                <div className="py-3 pb-4 "> <button type="submit" className="btn btn-primary mr-3">Save Changes</button> <button className="btn border button"><Link to={`/profile/${user.id}`}>Cancel</Link></button> </div>

                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}
