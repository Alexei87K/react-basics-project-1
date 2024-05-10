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



function App() {
  
  const [userState, dispatchUserState] = useReducer(changeUserState, INITIAL_STATE);
  const { isUserReadyToSet, values, isValid } = userState;
  

  console.log('isUserReadyToSet ' + isUserReadyToSet);
  console.log('values ' + values.user);
  console.log('isValid ' + isValid);
  
  let [userFromLocalS, setUserFromLocalS] = useState([]);
  

  useEffect(() => {
    if(isUserReadyToSet){
      localStorage.setItem('data', JSON.stringify(values.user));
    }   
  }, [values.user]);

  useEffect(() => {
    userFromLocalS = JSON.parse(localStorage.getItem('data'));
    setUserFromLocalS(userFromLocalS);
    console.log('Получаем ' + userFromLocalS);
  }, [isValid])

    const sizeClass = [
      {
        small: 'szSmall',
        medium: 'szMedium',
        big: 'szBig'
      }
    ]

    const viewButton = [
      {
        login: 'Войти в профиль',
        search: 'Искать',
        

      }
    ]

    const placeholder = [
      {
        searchInput: 'Искать',
        accountInput: 'Войти в аккаунт'
      }
    ]

    const films = [
      {
        title: 'Black Widow',
        poster: '/img/poster1.png',
        rating: 324,
        favorites: 'в избранное'
      },
      {
        title: 'Friends',
        poster: '/img/poster2.png',
        rating: 123,
        favorites: 'в избранное'
      },
      {
        title: 'Loki',
        poster: '/img/poster3.png',
        rating: 235,
        favorites: 'в избранное'
      },
      {
        title: 'How I Met Your Mother',
        poster: '/img/poster4.png',
        rating: 123,
        favorites: 'в избранное'
      },
      {
        title: 'Money Heist',
        poster: '/img/poster5.png',
        rating: 8125,
        favorites: 'в избранное'
      },
      {
        title: 'Friends',
        poster: '/img/poster6.png',
        rating: 123,
        favorites: 'в избранное'
      },
      {
        title: 'The Big Bang Theory',
        poster: '/img/poster7.png',
        rating: 12,
        favorites: 'в избранное'
      },
      {
        title: 'Two And a Half Men',
        poster: '/img/poster7.png',
        rating: 456,
        favorites: 'в избранное'
      }
    ]

 

  const onChange = (e) => {
    
    dispatchUserState({type: 'SET_VALUE', payload:{[e.target.name]: e.target.value }})
   
  }
  const onClick = (e) => {
    e.preventDefault();
    dispatchUserState({type: 'SET_USER'});
  }
  
  return (
    
    <div>
      <HeaderComponent open={isValid} userdate={userFromLocalS} />

    
      <div className={isValid ? "displ-none" : null}>
        <div>Вход</div>
        <InputComponent className="no-icon"  name="user" onChange={onChange} value={values.user}
                        inValidUser={isUserReadyToSet}  placeholder={placeholder[0].accountInput} /> 
        <ButtonComponent name={viewButton[0].login} onClick={onClick} />
      </div>

      <div className="flex-box">
        <div className="el-flex-f">

          <TitleComponent />
          <AboutComponent name={sizeClass[0].big} />
      
          <form action="" className="ButtonContainer">
           
            <InputComponent className="no-icon" placeholder={placeholder[0].searchInput} name="myinput" />   {  /* для проверки InputComponent нужно убрать или снять className="no-icon" */}    
            <ButtonComponent name={viewButton[0].search} />
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
