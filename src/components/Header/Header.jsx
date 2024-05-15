
import styles from './Header.module.css'
import { INITIAL_STATE, changeUserState } from '../../reducer_user_state';
import { useRef, useEffect, useReducer, useState, } from 'react';

function HeaderComponent({name, isAuth}) {
  const [userState, dispatchUserState] = useReducer(changeUserState, INITIAL_STATE);
  

  const onClickHeader = (e) => {
    console.log('onClickHeader');
    e.preventDefault();
    localStorage.clear();
    dispatchUserState({type: 'LOGOUT'});
    
  }

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
            {!isAuth ? (<><div className={styles['forFlexHeaderPaddingR']} >{name}</div><div onClick={onClickHeader}>Выйти</div></>) : (<div>Войти</div>)}
          </div>
       </div>
      </div>
    
  )
}

export default HeaderComponent
