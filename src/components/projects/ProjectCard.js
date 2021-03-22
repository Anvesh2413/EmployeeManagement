import React, { useState } from 'react'
import ReactCardFlip from 'react-card-flip'



export default function ProjectCard(props) {
  const [isFlipped, setFlip] = useState(false);
  return (






    <div className="container" >



      <div className="card" style={{ minHeight: "235px", margin: "25px", backgroundColor: "white" }} onMouseEnter={() => setFlip(true)} onMouseLeave={() => setFlip(false)} >
        <ReactCardFlip isFlipped={isFlipped} flipDirection="horizontal">

          <div className="card-block special-card" >
            <img className="round-img"
              style={{ width: "175px", height: "100px" }} src={props.value.avatar} alt="Card image cap" />
            <div className="card-body">
              <h5 className="card-title"><i className="fa fa-user-circle-o"></i> {props.value.name}</h5>





            </div>
          </div>


          <div className="card-block special-card" style={{ backgroundColor: "rgba(245,245,245,0.4)" }}>
            <div className="card-body">

              <h5 className="card-title">Project Info</h5>
              <p className="cart-text">
                Project Name: {props.value.name}<br />
        Start Date  : {props.value.start} <br />
        End Date    : {props.value.end} <br />
              </p>
            </div>
          </div>
        </ReactCardFlip>
      </div>


    </div>




  )
}
