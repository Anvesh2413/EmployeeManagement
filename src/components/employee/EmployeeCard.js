import React, { useState, useContext, useEffect } from 'react'
import ReactCardFlip from 'react-card-flip'
import EmployeeContext from '../../context/employee/EmployeeContext';
import { Link } from 'react-router-dom'



export default function EmployeeCard(props) {
  const [isFlipped, setFlip] = useState(false);

  const context = useContext(EmployeeContext);
  const { getprofile, id, profile } = context
  useEffect(() => {

    getprofile(id);

  }
    , [])

  return (






    <div >


      <div className="card-transparent" style={{ minHeight: "350px" }}  >
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">

          <div className="card-block special-card" style={{ backgroundColor: "rgba(245,245,245,0.4)" }}>
            <img className="round-img"
              style={{ width: "150px", height: "150px" }} src={props.value.avatar} />


            <div className="card-body">
              <div style={{ minHeight: "135px" }}>
                <h6 className="card-title"><i className="fa fa-user-circle-o"></i> {props.value.name}</h6><br />
                <h9 className="card-title"><i className="fa fa-id-card"></i> {props.value.designation}</h9>
              </div>
              <div className="row">
                <div className="col col-sm-5">
                  <button className="btn btn-dark text-light " onClick={() => setFlip(true)}>More</button></div>
                <div className="col col-sm-5">



                </div>
              </div>

            </div>
          </div>


          <div className="card-block special-card" style={{ backgroundColor: "rgba(245,245,245,0.4)",minHeight: "350px" }}>
            <div className="card-body">

              < div className="card-title"><h5>Information</h5>
              </div>
              <p className="cart-text">
                <div style={{ minHeight: "200px" }}>
                  Name : {props.value.name}<br />
     Designation : {props.value.designation}<br />
     Admin :  {props.value.isAdmin ? (
                    <i className="fas fa-check text-success" />
                  ) : (
                      <i className="fas fa-times-circle text-primary" />
                    )}<br />

     Date of Joining: {props.value.DOJ}<br />
     Location : {props.value.location}<br />


                </div>

              </p>
              <div className="footer">
                <div className="row mt-5">
                  <div className="col col-sm-5">
                    <button className="btn btn-dark text-light" onClick={() => setFlip(false)}>Back</button></div>
                  <div className="col col-sm-5">
                    {/* {profile.isAdmin && (<div>

                      <Link to={`updateprofile/${props.value.id}`}   > <button className="btn btn-dark text-light" >Update</button> </Link>
                    </div>
                    )} */}
                  </div>
                </div>
              </div>
            </div>
          </div>

        </ReactCardFlip>
      </div>







    </div>




  )
}
