export const INITIAL_STATE = {
    isValid: false,
        
    
    values: {
        user: ''
    },
    isUserReadyToSet: true,
    
}


export function changeUserState(state, action){
    switch(action.type){
        case 'AUTH_OUT':
            return {...state, isValid: false  }
      case 'SET_VALUE' :
        return {...state, values:{...state.values, ...action.payload}   }
      case 'RESET' :
        return {...state, isUserReadyToSet: true   }
      case 'SET_USER' :
        const userValidity = state.values.user.trim().length;
        const userValue = state.values.user;

        // console.log('количество ' + userValidity);
      
        return {...state, 
            isValid: userValidity ? true : false,
            values:{
                user:  userValue
            },
            
            isUserReadyToSet: Boolean(userValidity),
           
        }
        
    }
}
