
import styles from  './Input.module.css';
import classNames from 'classnames/bind';
import { INITIAL_STATE, changeUserState } from '../../reducer_user_state';
import { useRef, useEffect, useReducer, useState, } from 'react';

  

const cx = classNames.bind(styles);

function InputComponent({className, name, valid = '', placeholder, onChange, value}) {
  const userRef = useRef();
  const [userState, dispatchUserState] = useReducer(changeUserState, INITIAL_STATE);
  const { user, isAuth } = userState;
  console.log('input user ' + user);
  console.log('input isAuth ' + isAuth);

//   const focusError = (valid) => {
//     switch(true){
//      case (valid.length === 0):
//           userRef.current.focus();
//           break;
//     }
//  }

//  useEffect(() => {

//    let timerId;
//    focusError(valid);
//    timerId = setTimeout(() => {
    
     
//     //  dispatchUserState({type: 'RESET'})
//    }, 2000)
//    return () => {
//     clearTimeout(timerId);
//   };
//  }, [])




  const inputClassName = cx(styles['form-style'],{
    [styles['plusPadding']] : !styles[className],
    // [styles['invalid']] : !isAuth
    
  });
  // debugger;
  const imgClassName = cx(
    styles['input-icon'],
    styles['uil'],
    styles['uil-at'],
    className && styles[className],
  );

  return (
    
    
      <div className={styles['form-group']}>
        <input type="email" value={value} ref={userRef} name={name} className={inputClassName} onChange={onChange} placeholder={placeholder} id="logemail" autoComplete="off" />
        <img className={imgClassName} src="/search.svg" alt="" />
      </div>
  
    
  )
}

export default InputComponent
