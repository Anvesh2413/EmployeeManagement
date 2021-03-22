import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EmployeeContext from '../../context/employee/EmployeeContext';
import Dashboard from '../employee/Dashboard';

export default function LeavesRemaining() {

  const context = useContext(EmployeeContext);
  const { leaves } = context;
  const [consume, setConsumed] = useState(0);


  useEffect(() => {
    var consumed = 0;
    leaves.map(leave => {

      consumed = consumed + (Math.abs(new Date(leave.from).getDate() - new Date(leave.to).getDate())) + 1;

    });

    console.log(consumed)
    setConsumed(consumed)
  }, [])







  return (
    <div className="container">
      <div className="row py-5">
        <div className="col-md-2">
          <Dashboard />
        </div>
        <div className="col-md-10">
          <form>
            <div className="wrapper bg-white mt-sm-5">
              <div className="row py-2">
                <div className="col-md-6 pt-md-0 pt-3">
                  <h6 className="pb-4 border-bottom">Total Leaves    </h6>
                </div>
                <div className="col-md-4 pt-md-0 pt-3">
                  <h6 className="pb-4 border-bottom">24  Days</h6>
                </div>

              </div>
              <div className="row py-2">
                <div className="col-md-6 pt-md-0 pt-3">
                  <h6 className="pb-4 border-bottom">Leaves Consumed    </h6>
                </div>
                <div className="col-md-4 pt-md-0 pt-3">
                  <h6 className="pb-4 border-bottom">{consume}  Days</h6>
                </div>

              </div>
              <div className="row py-2">
                <div className="col-md-6 pt-md-0 pt-3">
                  <h6 className="pb-4 border-bottom">Leaves Balance    </h6>
                </div>
                <div className="col-md-4 pt-md-0 pt-3">
                  <h6 className="pb-4 border-bottom">{24 - consume} Days</h6>
                </div>

              </div>

            </div>
          </form>
        </div>
      </div>
    </div>
  )
}
