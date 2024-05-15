export const INITIAL_STATE = {
    isAuth: true,
    user: '',
}


export function changeUserState(state, action){
    switch(action.type){
       case 'LOGIN':
        return {...state, isAuth: false, user: action.payload }
       case 'LOGOUT':
        return {...state, isAuth: true, user: ''}

    
    }
}



//   case 'AUTH_OUT':
    //         return {...state, isValid: false  }
    //   case 'SET_VALUE' :
    //     return {...state, values:{...state.values, ...action.payload}   }
    //   case 'RESET' :
    //     return {...state, isUserReadyToSet: true   }
    //   case 'SET_USER' :
    //     const userValidity = state.values.user.trim().length;
    //     const userValue = state.values.user;

    //     // console.log('количество ' + userValidity);
      
    //     return {...state, 
    //         isValid: userValidity ? true : false,
    //         values:{
    //             user:  userValue
    //         },
            
    //         isUserReadyToSet: Boolean(userValidity),
           
    //     }
        