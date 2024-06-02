export const INITIAL_STATE = {
    isAuth: false,
    user: '',
}


export function changeUserState(state, action){
    switch(action.type){
       case 'LOGIN':
        return {...state, isAuth: true, user: action.payload }
       case 'LOGOUT':
        return {...state, user: action.payload.user, isAuth: action.payload.isAuth}
   
    
    }
}

        