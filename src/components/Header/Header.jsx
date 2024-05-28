
import styles from './Header.module.css'
import { UserContext } from '../../Context/user.contex';
import { useContext } from "react";



function HeaderComponent({ onLogout }) {
  const { userState, dispatchUserState } = useContext(UserContext);
  console.log('Header.jsx user ' + userState.user);
  console.log('Header.jsx isAuth ' + userState.isAuth);
  

  return (
    
      <div className={styles['header']}>
        <div>
          <img src="/logo.svg" alt="" />
        </div>
       <div className={styles['forFlexHeader']}>
          <ul>
            <li><a href="#">Поиск фильмов</a></li>
            <li className={styles['liBlock']}><a href="#">Мои фильмы</a><span>2</span></li>
            {/* <li className={styles['liBlock2']}><a href="#">Войти</a><img src="/login.svg" alt="" /></li> */}
          </ul>    
          <div className={styles['forFlexHeader']}>
            {userState.isAuth ? (<><div className={styles['forFlexHeaderImg']}><div>{userState.user}</div><img src="/account.svg" alt="" /></div><div className={styles['forFlexHeaderPaddingL']} onClick={onLogout}>Выйти</div></>) : (<div>Войти</div>)}
          </div>
       </div>
      </div>
    
  )
}

export default HeaderComponent
