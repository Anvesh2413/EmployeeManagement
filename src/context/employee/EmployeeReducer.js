import {APPLY_LEAVE, DELETE_EMPLOYEE, GET_ALL_EMPLOYEES, GET_ALL_PROJECTS, GET_EMPLOYEE_COUNT, GET_PROFILE, LOGIN,SEARCH_EMPLOYEE,SET_LOADING,SIGNUP, UPDATE_PROFILE, VIEW_LEAVES} from '../Types'
export default (state,action)=>
{
    switch(action.type){
        case SET_LOADING:
            return{
                ...state,
                loading:true,
            }
        case LOGIN:
            return{
                ...state,
                isLoggedIn:true,
                id:action.payload,
                loading:false,
            };
        case SIGNUP:
            return{
                ...state,
                user:action.payload,
                loading:false
            }

        case GET_PROFILE:
            return{
                ...state,
                profile:action.payload,
                loading:false
            }
        case UPDATE_PROFILE:
            return{
                ...state,
                profile:action.payload,
                loading:false
            }
        
      case SEARCH_EMPLOYEE:
            
                return{
                    ...state,
                    users:action.payload,
                    loading:false
                }
        case GET_ALL_EMPLOYEES:
            return{
                ...state,
                users:action.payload
            }
            case GET_ALL_PROJECTS:
                return{
                    ...state,
                    projects:action.payload,
                }
            case APPLY_LEAVE:
                return{
                    ...state,
                    remaining_leave:action.payload,
                }
            case VIEW_LEAVES:
                return{
                    ...state,
                    leaves:action.payload,
                }
            
          
        default:
            return {...state};
             
    }
}