import "./App.css";
import TitleComponent from "./components/Title/Title";
import ButtonComponent from "./components/Button/Button";
import AboutComponent from "./components/About/About";
import HeaderComponent from "./components/Header/Header";
import InputComponent from "./components/Input/Input";

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

      
      
    </div>
    
  );
}

export default App;
