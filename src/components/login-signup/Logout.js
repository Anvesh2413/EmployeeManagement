import React,{useEffect} from 'react'
import {Redirect} from 'react-router-dom'
export default function Logout() {

    useEffect(() => {

                sessionStorage.clear();  
                

    }, [])
    return (
        <div>
           <Redirect to='/' /> 
        </div>
    )
}
