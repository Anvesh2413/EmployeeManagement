import React, { useContext, useEffect, useState } from 'react';
import EmployeeContext from '../../context/employee/EmployeeContext';
import EmployeeCard from './EmployeeCard';
import Dashboard from '../employee/Dashboard'


export default function EmployeeItem() {



  const context = useContext(EmployeeContext);
  const { getAllEmployees, users, id } = context;



  useEffect(async () => {
    await getAllEmployees();




  }, [])

  // SortEmp =(users) =>
  // {

  //   users.sort(function(a, b){
  //     if(a.name < b.name) { return -1; }
  //     if(a.name > b.name) { return 1; }
  //     return 0;
  // });

  // return users;


  // }


  return (<div>

    <div className="container">

      <div className="row py-5 mt-5">
        <div className="col-md-2 col-sm-2" >
          <Dashboard />
        </div>
        <div className="col-md-10 ">
          <div className="row">
            { users.sort(function(a, b){
      if(a.name < b.name) { return -1; }
      if(a.name > b.name) { return 1; }
      return 0;
  }).map(employee =>
              <div className="col-lg-3 col-md-6 col-sm-12" key={employee.id} >
                <EmployeeCard userid={id} key={employee.id} value={employee} />
              </div>)}
          </div>
        </div>
      </div>

    </div>



  </div>




  )
}
