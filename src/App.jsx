import "./App.css";
import TitleComponent from "./components/Title/Title";
import ButtonComponent from "./components/Button/Button";
import AboutComponent from "./components/About/About";

function App() {
    const sizeClass = [
      {
        small: 'szSmall',
        medium: 'szMedium',
        big: 'szBig'
      }
    ]

  return (
    <>
      <TitleComponent />
      <AboutComponent name={sizeClass[0].big} />
      <div class="container">
        <ButtonComponent />
      </div>
      
    </>
  );
}

export default App;
