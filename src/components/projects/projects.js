import React, { useContext, useEffect } from 'react';
import Dashboard from '../employee/Dashboard'
import EmployeeContext from '../../context/employee/EmployeeContext';
import ProjectCard from './ProjectCard';

export default function Projects() {
    const context = useContext(EmployeeContext);
    const { getAllProjects, projects, id } = context;
    useEffect(() => {
        getAllProjects();
    }
        , [])
    return (<div>

      

        <div className="row py-5">
            <div className="col-md-2">
                <Dashboard />
            </div>
            <div className="col-md-10">
                <div className="row mt-5">





                    { projects.map(project =>
                        <div className="col-lg-3 col-md-6 col-sm-12" key={project.id} >
                            <ProjectCard key={project.name} value={project} />
                        </div>)}
                </div>
            </div>
        </div>
    </div>
    )
}
