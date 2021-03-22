import React, { useState, useContext } from 'react';
import EmployeeContext from '../../context/employee/EmployeeContext'
import { Redirect } from 'react-router-dom'

export default function Signup() {

   const [user, setUser] = useState({
      id: "",
      email: "",
      name: "",
      password: "",
      designation: "",
      location: "",
      DOJ: "",
      phone: "",
      Projects: [],
      isAdmin: false,
      avatar:''
   })

   const logincontext = useContext(EmployeeContext);

   const onSubmit = async (e) => {
      e.preventDefault();
      await logincontext.signedup(user);
      window.history.back();





   }

   return (
      <div>





         <div>
            <div className="sidenav">
               <div className="login-main-text">
                  <h2>Welcome<br /> Employee Portal</h2>
                  <p>Login or register from here to access.</p>
               </div>
            </div>
            <div className="main">

               <div className="col-md-6 col-sm-12">
                  <div className="signup-form">
                     <form >
                        <div className="form-group">
                           <label>Identity</label>
                           <input name="id" className="form-control" placeholder="Enter ID" type="email" onChange={(e) => setUser({ ...user, id: e.target.value })} required></input>
                        </div>
                        <div className="form-group">
                           <label>Email</label>
                           <input name="id" className="form-control" placeholder="Enter Email" type="email" onChange={(e) => setUser({ ...user, email: e.target.value })} required></input>
                        </div>
                        <div className="form-group">
                           <label>Name</label>
                           <input name="name" className="form-control" placeholder="Enter Full Name" type="text" onChange={(e) => setUser({ ...user, name: e.target.value })} required></input>
                        </div>
                        <div className="form-group">
                           <label>Gender</label>
                           <select className="form-control" onChange={(e) => setUser({ ...user, avatar: e.target.value })} required>
                              <option value="https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg" >Male</option>
                              <option value="https://www.pngarts.com/files/3/Employee-Avatar-PNG-Pic.png" >Female</option>
                            
                           </select>
                        </div>
                        <div className="form-group">
                           <label>Phone</label>
                           <input name="phone" className="form-control" placeholder="Enter Phone" type="text" onChange={(e) => setUser({ ...user, phone: e.target.value })} required></input>
                        </div>
                        <div className="form-group">
                           <label>Password</label>
                           <input name="password" className="form-control" placeholder="Choose Password" type="password" onChange={(e) => setUser({ ...user, password: e.target.value })} required></input>
                        </div>
                        <div className="form-group">
                           <label>Designation</label>
                           <select className="form-control" onChange={(e) => setUser({ ...user, designation: e.target.value })} required>
                              <option >Intern</option>
                              <option  >Associate Software Engineer</option>
                              <option>Software Engineer</option>
                              <option >Senior Software Engineer</option>
                              <option >Project Manager</option>
                           </select>
                        </div>
                        <div className="form-group">
                           <label>Location</label>
                           <select className="form-control" onChange={(e) => setUser({ ...user, location: e.target.value })} required>
                              <option>Pune</option>
                              <option>Mumbai</option>
                              <option>Banglore</option>
                           </select>
                        </div>
                        <div className="form-group">
                           <label>Date of Joining</label>
                           <input name="DOJ" className="form-control" placeholder="DOJ" type="date" onChange={(e) => setUser({ ...user, DOJ: e.target.value })} required></input>
                        </div>
                        <button type="submit" onClick={(e) => onSubmit(e)} className="btn btn-block btn-black">Signup</button>

                     </form>
                  </div>
               </div>
            </div>
         </div>














      </div>
   )
}
