
import styles from './Header.module.css'

function HeaderComponent() {
  

  return (
    
      <div className={styles['header']}>
        <div>
          <img src="/logo.svg" alt="" />
        </div>
       <div>
          <ul>
            <li><a href="#">Поиск фильмов</a></li>
            <li className={styles['liBlock']}><a href="#">Мои фильмы</a><span>2</span></li>
            <li className={styles['liBlock2']}><a href="#">Войти</a><img src="/login.svg" alt="" /></li>
          </ul>

         
            
       </div>
      </div>
    
  )
}

export default HeaderComponent
