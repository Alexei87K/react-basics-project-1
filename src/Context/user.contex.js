import { createContext } from "react";
import { INITIAL_STATE } from '../reducer_user_state';

export const UserContext = createContext(INITIAL_STATE)
// export const UserContext = createContext({
//     isAuth: false,
//     user: '',
// })