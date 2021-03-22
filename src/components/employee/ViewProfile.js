import React, { Fragment, useContext, useEffect } from 'react';
import EmployeeContext from '../../context/employee/EmployeeContext';

import Dashboard from './Dashboard';
import { Link } from 'react-router-dom'

export default function ViewProfile({ match }) {

  const context = useContext(EmployeeContext);
  const { getprofile, profile } = context;
  useEffect(() => {


    getprofile(match.params.id);


  }, []);

  return (
    <div>
      <div className="container" >
        <div className="row py-4">
          <div className="col-md-2 col-sm-2" >
            <Dashboard id={match.params.id} />
          </div>
          <div className="col-md-8 col-sm-8  " style={{marginLeft:"100px"}} >

            {/* <Fragment>
            
        <div className="card mt-2 text-center grid-6">
          <div className="all-center">
            <img
              src='https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg'
              alt=""
              className="round-img "
              style={{ width: "150px" , align:"center"}}
            />
            <div className="m-3">

            <h1 >{profile.name}</h1>
            <h5><i className="fa fa-graduation-cap"></i> {"  "} Designation : {profile.designation}</h5>
            <h5><i className="fa fa-location-arrow"></i>  Contact : {profile.id}</h5>
            <h5><i className="fa fa-calendar-o"></i>      Date of Joining: {profile.DOJ}</h5>
            <h5> <i className="fa fa-map-marker"></i> Location : {profile.location} </h5>
           <h5><i className="fa fa-lock"></i> Admin: {""}
        {profile.isAdmin  ? (
          <i className="fas fa-check text-success" />
        ) : (
          <i className="fas fa-times-circle text-primary" />
        )}
        </h5>
            </div>
           
          </div>
          <div>
          
      
          
          
          </div>
        </div>
       
       
      </Fragment> */}


            <form >
              <div className="wrapper bg-white mt-sm-5">
                <h4 className="pb-4 border-bottom">Your Profile</h4>
                <div className="d-flex align-items-start py-3 border-bottom "> <img src="https://thumbs.dreamstime.com/b/businessman-icon-vector-male-avatar-profile-image-profile-businessman-icon-vector-male-avatar-profile-image-182095609.jpg" className="img" alt="" />

                </div>
                <div className="py-2">
                  <div className="row py-2">
                    <div className="col-md-6"> <label htmlFor="name"> Name : </label> <label>{profile.name}</label> </div>
                    <div className="col-md-6 pt-md-0 pt-3"> <label htmlFor="DOJ">Date of Joining : </label> <label>{profile.DOJ}</label> </div>
                  </div>


                  <div className="row py-2">
                    <div className="col-md-6"> <label htmlFor="email">Email Address  : </label> <label>{profile.email}</label> </div>
                    <div className="col-md-6 pt-md-0 pt-3"> <label htmlFor="phone">Phone Number  : </label><label>{profile.phone}</label></div>
                  </div>
                  <div className="row py-2">
                    <div className="col-md-6"> <label htmlFor="designation">Designation  : </label> <label>{profile.designation}</label>
                    </div>
                    <div className="col-md-6 pt-md-0 pt-3" id="location"> <label htmlFor="location">Location  : </label>
                      <label>{profile.location}</label>
                    </div>
                  </div>
                  <div className="row py-2">
                    <div className="col-md-6"> <label htmlFor="name"> Admin : </label>  {profile.isAdmin ? (
                      <i className="fas fa-check text-success" />
                    ) : (
                        <i className="fas fa-times-circle text-primary" />
                      )} </div>

                    <div className="col-md-6 pt-md-0 pt-3" id="location"> <label htmlFor="id">Identity  : </label>
                      <label>{profile.id}</label>
                    </div>

                  </div>
                  <div className="py-3 pb-4 border-bottom">  </div>
                  <div className="d-sm-flex align-items-center pt-3" id="deactivate">
                    <div> <b>Have Some Changes ?</b>
                      <p>please keep your profile up to date</p>
                    </div>
                    <div className="ml-auto"> <Link to={`/account/${profile.id}`} > <button className="btn btn-outline-success" >Update Profile</button> </Link></div>
                  </div>
                </div>
              </div>
            </form>


          </div>



        </div>









        {/* <LeaveChat /> */}


      </div>
    </div>
  )

}