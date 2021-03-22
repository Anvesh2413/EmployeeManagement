import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Dashboard from './components/employee/Dashboard';
import EmployeeItem from './components/employee/EmployeeItem';
import Home from './components/employee/Home';
import ViewProfile from './components/employee/ViewProfile';
import Login from './components/login-signup/Login';
import Logout from './components/login-signup/Logout';
import Projects from './components/projects/projects';
import UpdateProfile from './components/employee/UpdateProfile'
import Leaves from './components/leaves/Leaves'
import { EmployeeState } from './context/employee/EmployeeState';
import LeavesDashboard from './components/leaves/LeaveDashboard'
import LeavesRemaining from './components/leaves/LeavesRemaining';
import LeaveChat from './components/leaves/leaveChat';
import ViewLeaves from './components/leaves/ViewLeave';
import Error from './components/layout/Error'
import AccountSetting from './components/employee/AccountSetting';
import Signup from './components/login-signup/Signup';


function App() {
  return (
    <EmployeeState>
      <Router>
      <div className="App">
        <Switch>
          <Route path="/" render={(props)=><Login {...props} />} exact />
          <Route path="/EmployeePortal" render={(props)=><Login {...props} />} exact />
          <Route path="/signup" render={(props)=><Signup {...props} />} exact />
         <Route path='/home' render={(props)=>sessionStorage.getItem('session') != null ? <Home {...props} /> : <Error />} exact />
        
           <Route path="/dashboard" render={(props)=> sessionStorage.getItem('session') != null ? <Dashboard {...props }  /> : <Error/>} exact />
          <Route path="/profile/:id" render={(props)=> sessionStorage.getItem('session') != null ? <ViewProfile {...props }  /> : <Error/>} exact />
          <Route path="/logout" render={(props)=> sessionStorage.getItem('session') != null &&<Logout {...props }  />} exact />
          <Route path="/projects" render={(props)=> sessionStorage.getItem('session') != null ? <Projects {...props }  />: <Error/>} exact />
          <Route path="/employees" render={(props)=> sessionStorage.getItem('session') != null ?<EmployeeItem {...props }  />:<Error/>} exact />
          <Route path="/updateprofile/:id" render={(props)=> sessionStorage.getItem('session') != null ?<UpdateProfile {...props }  /> : <Error/>} exact />
          <Route path="/leaves" render={(props)=> sessionStorage.getItem('session') != null ?<Leaves {...props }  /> : <Error/>} exact />
          <Route path="/leavedashboard" render={(props)=> sessionStorage.getItem('session') != null ? <LeavesDashboard {...props }  /> :<Error/>} exact />
          <Route path="/leavesremaining" render={(props)=> sessionStorage.getItem('session') != null ? <LeavesRemaining {...props }  />:<Error/>} exact />
          <Route path="/leavechat" render={(props)=> sessionStorage.getItem('session') != null &&<LeaveChat {...props }  />} exact />
          <Route path="/viewleave" render={(props)=> sessionStorage.getItem('session') != null ?<ViewLeaves {...props }  /> : <Error/>} exact />
          <Route path="/account/:id" render={(props)=> sessionStorage.getItem('session') != null &&<AccountSetting {...props }  />} exact />
        </Switch>

      
    </div>

      </Router>
       <LeaveChat/>
    </EmployeeState>
   
  );
}

export default App;
