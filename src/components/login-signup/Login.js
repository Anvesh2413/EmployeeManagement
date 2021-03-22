import React, { useState, useEffect, useContext } from 'react'
import { Link } from 'react-router-dom'
import { Redirect } from 'react-router-dom';
import EmployeeContext from '../../context/employee/EmployeeContext'
import axios from 'axios'

export default function Login() {

   const [username, setUsername] = useState('');
   const [password, setPassword] = useState('');
   const logincontext = useContext(EmployeeContext);

   const [isLoggedIn, setisLoggedIn] = useState(false)




   const varifyUser = async (e) => {
      e.preventDefault();
      const response = await axios.get(`https://my-json-server.typicode.com/anvesh2413/EmployeeDatabase/employees/${username}`);
      console.log(response)

      if (response.data.id === username && response.data.password === password) {
         const session = {
            id: username,
            password: password,
            isLoggedIn: true,
         }
         sessionStorage.setItem('session', JSON.stringify(session));

         logincontext.loggedin(username);
         setisLoggedIn(true);

      }
   }


   return (
      isLoggedIn ? <div>
         <Redirect to='/home' />

      </div> :
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
                     <div className="login-form">
                        <form onSubmit={(e) => varifyUser(e)}>
                           <div className="form-group">
                              <label>User Name</label>
                              <input name="username" type="text" onChange={(e) => setUsername(e.target.value)} className="form-control" placeholder="User Name" autoComplete="off" />
                           </div>
                           <div className="form-group">
                              <label>Password</label>
                              <input name="password" type="password" onChange={(e) => setPassword(e.target.value)} className="form-control" placeholder="Password" />
                           </div>
                           <button type="submit" className="btn btn-block btn-black">Login</button>
                           <button type="submit" className="btn btn-block btn-black" onClick={(e)=>{setUsername('Shrivastava_av');
                        
                        setPassword('Anvesh@1234');

                        
                        }}>Company Single Sign-on </button>
                           {/* <Link to='/signup'>  <button type="submit" className="btn btn-block btn-secondary">Register</button></Link> */}
                        </form>
                     </div>
                  </div>
               </div>
            </div>


         </div>
   )
}

