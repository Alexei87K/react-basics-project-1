import "./App.css";
import TitleComponent from "./components/Title/Title";
import ButtonComponent from "./components/Button/Button";
import AboutComponent from "./components/About/About";
import HeaderComponent from "./components/Header/Header";
import InputComponent from "./components/Input/Input";
import FilmListComponent from "./components/FilmList/FilmList";
import FilmItemComponent from "./components/FilmItem/FilmItem";
import { INITIAL_STATE, changeUserState } from './reducer_user_state';
import { useEffect, useReducer, useState} from 'react';
import films from './films';



function App() {
  
  const [userState, dispatchUserState] = useReducer(changeUserState, INITIAL_STATE);
  const { user, isAuth } = userState;
  const [userInput, setInputUser] = useState('');
  
  
  let [userFromLocalS, setUserFromLocalS] = useState([]); 

  useEffect(() => {
    if(!isAuth){
      localStorage.setItem('data', JSON.stringify(user));
    }   
  }, [isAuth]);

  useEffect(() => {
    userFromLocalS = JSON.parse(localStorage.getItem('data'));
    setUserFromLocalS(userFromLocalS);
    
  }, [isAuth])

  console.log('userFromLocalS ' +  userFromLocalS);

  const onChange = (e) => {
    setInputUser(e.target.value)
  }
  const onClick = (e) => {  
    if (!userInput.length) {
      console.log('Error');
    return;
    }else{
       e.preventDefault();  
        dispatchUserState({type: 'LOGIN', payload: userInput});
    }
         
  }


 
  
  return (
    
    <div>
      <HeaderComponent name={userFromLocalS} isAuth={isAuth} />

      <div className={!isAuth ? "displ-none" : null}>
        <div>Вход</div>
        <InputComponent className="no-icon" valid={userFromLocalS}   onChange={onChange} value={userInput}
                         placeholder="Искать" /> 
        <ButtonComponent name='Войти в профиль' onClick={onClick} />
      </div>

      <div className="flex-box">
        <div className="el-flex-f">

          <TitleComponent />
          <AboutComponent name='szBig' />
      
          <form action="" className="ButtonContainer">
            <InputComponent className="no-icon"  placeholder="Искать" name="myinput" onChange={onChange}  />   {  /* для проверки InputComponent нужно убрать или снять className="no-icon" */}    
            <ButtonComponent name='Искать' />
          </form>

        </div>
        <div className="el-flex-s"></div>
      </div>

      
      <FilmListComponent>
        {films.map(el => (
          <FilmItemComponent 
            title={el.title}
            poster={el.poster}
            rating={el.rating}
            favorites={el.favorites}

           />
        ))}
      </FilmListComponent>
      
    </div>
    
  );
}

export default App;
