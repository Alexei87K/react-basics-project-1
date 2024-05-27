export const INITIAL_STATE = {
    isAuth: true,
    user: '',
}


export function changeUserState(state, action){
    switch(action.type){
       case 'LOGIN':
        return {...state, isAuth: false, user: action.payload }
       case 'LOGOUT':
        return {...state, user: action.payload.user, isAuth: action.payload.isAuth}
   
    
    }
}

        