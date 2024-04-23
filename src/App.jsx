import "./App.css";
import TitleComponent from "./components/Title/Title";
import ButtonComponent from "./components/Button/Button";
import AboutComponent from "./components/About/About";
import HeaderComponent from "./components/Header/Header";
import InputComponent from "./components/Input/Input";
import FilmListComponent from "./components/FilmList/FilmList";
import FilmItemComponent from "./components/FilmItem/FilmItem";


function App() {
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
        search: 'Искать'
      }
    ]

    const films = [
      {
        title: 'Black Widow',
        poster: '/img/poster1.png',
        rating: 324
      },
      {
        title: 'Friends',
        poster: '/img/poster2.png',
        rating: 123
      },
      {
        title: 'Loki',
        poster: '/img/poster3.png',
        rating: 235
      },
      {
        title: 'How I Met Your Mother',
        poster: '/img/poster4.png',
        rating: 123
      },
      {
        title: 'Money Heist',
        poster: '/img/poster5.png',
        rating: 8125
      },
      {
        title: 'Friends',
        poster: '/img/poster6.png',
        rating: 123
      },
      {
        title: 'The Big Bang Theory',
        poster: '/img/poster7.png',
        rating: 12
      },
      {
        title: 'Two And a Half Men',
        poster: '/img/poster7.png',
        rating: 456
      }
    ]

  return (
    
    <div>
      <HeaderComponent />

      <div className="flex-box">
        <div className="el-flex-f">

          <TitleComponent />
          <AboutComponent name={sizeClass[0].big} />
      
          <form action="" className="ButtonContainer">
            <InputComponent  />   {  /* для проверки InputComponent нужно убрать или снять className="no-icon" */}
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

           />
        ))}
      </FilmListComponent>
      
    </div>
    
  );
}

export default App;
