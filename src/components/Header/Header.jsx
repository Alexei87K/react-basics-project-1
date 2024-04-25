
import './Header.css'

function HeaderComponent() {
  

  return (
    
      <div className='header'>
        <div>
          <img src="/logo.svg" alt="" />
        </div>
       <div>
          <ul>
            <li><a href="#">Поиск фильмов</a></li>
            <li className='liBlock'><a href="#">Мои фильмы</a><span>2</span></li>
            <li className='liBlock2'><a href="#">Войти</a><img src="/login.svg" alt="" /></li>
          </ul>

         
            
       </div>
      </div>
    
  )
}

export default HeaderComponent
