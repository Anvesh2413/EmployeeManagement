import {useReducer} from 'react';
import  EmployeeContext  from "./EmployeeContext";
import { APPLY_LEAVE, GET_ALL_EMPLOYEES, GET_ALL_PROJECTS, GET_EMPLOYEE_COUNT, GET_PROFILE, LOGIN, SEARCH_EMPLOYEE, SIGNUP, UPDATE_PROFILE, VIEW_LEAVES } from "../Types";
import axios from 'axios';
import EmployeeReducer from './EmployeeReducer'

export const EmployeeState = (props) =>
{
    const initialState={
        isLoggedIn:false,
        id:'',
        user:{},
        users:[],
        profile:{},
        loading:false,
        projects:[],
        leaves:[],
        remaining_leave:10,

        
    }

    const [state, dispatch] = useReducer(EmployeeReducer, initialState);

    const loggedin =async (id) =>
    {
       const res= await axios.get(`https://my-json-server.typicode.com/anvesh2413/EmployeeDatabase/employees/${id}`);
      
       dispatch({type:LOGIN,payload:id});
       
    }
    const signedup = async (user) =>{
        const res= await axios.post('https://my-json-server.typicode.com/anvesh2413/EmployeeDatabase/employees',user);

        dispatch({type:SIGNUP,payload:user});
    }
    const getprofile=async (id) =>
    {
        const res=await axios.get(`https://my-json-server.typicode.com/anvesh2413/EmployeeDatabase/employees/${id}`);
        console.log(res.data);
    
        dispatch({type:GET_PROFILE,payload:res.data})
        
    }
    const updateprofile=async (employee,id) =>
    {
        const res=await axios.put(`https://my-json-server.typicode.com/anvesh2413/EmployeeDatabase/employees/${id}`,employee);
        dispatch({type:UPDATE_PROFILE,payload:employee})
    }
    const searchemployee = async(id) =>
    {
        const res=await axios.get(`https://my-json-server.typicode.com/anvesh2413/EmployeeDatabase/employees/${id}`);
        
        dispatch({type:SEARCH_EMPLOYEE,payload:res.data});
        
        
        
    }
    const getAllEmployees=async ()=>
    {
        const res= await axios.get(`https://my-json-server.typicode.com/anvesh2413/EmployeeDatabase/employees`);
        dispatch({type:GET_ALL_EMPLOYEES,payload:res.data})
        
    }
    const getAllProjects=async ()=>
    {
        const res= await axios.get(`https://my-json-server.typicode.com/anvesh2413/EmployeeDatabase/projects`);
        dispatch({type:GET_ALL_PROJECTS,payload:res.data})
        
    }

    const applyLeave=async (leave) =>
    {
        const res= await axios.post(`https://my-json-server.typicode.com/anvesh2413/EmployeeDatabase/leaves`,leave);
        //dispatch({type:APPLY_LEAVE,payload:state.remaining_leave-days})
        
    }
    const viewLeaves=async()=>{
        const res=await axios.get(`https://my-json-server.typicode.com/anvesh2413/EmployeeDatabase/leaves`);
        dispatch({type:VIEW_LEAVES,payload:res.data})
    }

  
  
    return(
        <EmployeeContext.Provider
        value={{
            isLoggedIn:state.isLoggedIn,
            id:state.id,
            user:state.user,
            profile:state.profile,
            users:state.users,
            projects:state.projects,
            leaves:state.leaves,
            remaining_leave:state.remaining_leave,
        
            applyLeave,
            getAllProjects,
            getprofile,
            signedup,
            loggedin,
            updateprofile,
            searchemployee,
            getAllEmployees,
            viewLeaves


        }}
        >
            {props.children}
        </EmployeeContext.Provider>
    )

}