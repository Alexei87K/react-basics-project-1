import "./App.css";
import TitleComponent from "./components/Title/Title";
import ButtonComponent from "./components/Button/Button";
import AboutComponent from "./components/About/About";
import HeaderComponent from "./components/Header/Header";
import InputComponent from "./components/Input/Input";
import FilmListComponent from "./components/FilmList/FilmList";
import FilmItemComponent from "./components/FilmItem/FilmItem";
import { INITIAL_STATE, changeUserState } from './reducer_user_state';
import { useEffect, useReducer, useState, useRef} from 'react';
import films from './films';



function App() {
  
  const [userState, dispatchUserState] = useReducer(changeUserState, INITIAL_STATE);
  const { user, isAuth } = userState;
  const [userInput, setInputUser] = useState('');

  const userRef = useRef();

  useEffect(() => {
   let userFromLocalS = JSON.parse(localStorage.getItem("data"));
    if (userFromLocalS) {
       dispatchUserState({type: 'LOGIN', payload: userFromLocalS});
    }
  }, []);

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
       localStorage.setItem('data', JSON.stringify(userInput));
       userRef.current.focus();
       console.log(userRef.current.value);
      
    }    
  }

  const onLogout = (e) => {
    e.preventDefault();
    console.log('onLogout');
    localStorage.clear();
    userRef.current.focus();
    dispatchUserState({type: 'LOGOUT', payload: {isAuth: true, user: ''}});
    
    
  }

  

 
 console.log('Сначала здесь!');
  
  return (
    
    <div>
      <HeaderComponent name={user} isAuth={isAuth} onLogout={onLogout}  />
       <div className="wrapper-block">
          <div className={!isAuth ? "displ-none" : null}>
            <div className="colorText">Вход</div>
            <InputComponent className="no-icon" onChange={onChange} value={userInput} ref={userRef}
                            placeholder="Искать"  /> 
            <ButtonComponent className="noMarginLeft" name='Войти в профиль' onClick={onClick} />
          </div>
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
