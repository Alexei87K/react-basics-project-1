
import styles from  './Input.module.css';
import classNames from 'classnames/bind';
import { INITIAL_STATE, changeUserState } from '../../reducer_user_state';
import { useRef, useEffect, useReducer, useState, } from 'react';



const cx = classNames.bind(styles);

function InputComponent({className, placeholder, name, onChange, inValidUser = true}) {
  const userRef = useRef();
  const [userState, dispatchUserState] = useReducer(changeUserState, INITIAL_STATE);
  const { isUserReadyToSet, values, isValid } = userState;

  const focusError = (values) => {
    switch(true){
     case (values.user.length === 0):
          console.log('Мы в функции focusError. Да, длина 0');
          userRef.current.focus();
          break;
    }
 }

 useEffect(() => {
  console.log('Внутри useEffect');
   let timerId;
   focusError(values);
   timerId = setTimeout(() => {
    
     console.log('Внутри setTimeout');
     dispatchUserState({type: 'RESET'})
   }, 2000)
   return () => {
    clearTimeout(timerId);
  };
 }, [inValidUser])

console.log('isUserReadyToSet in input component ' + inValidUser);


  const inputClassName = cx(styles['form-style'],{
    [styles['plusPadding']] : !styles[className],

    [styles['invalid']] : !inValidUser
    
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
        <input type="email" ref={userRef} name={name} className={inputClassName} onChange={onChange} placeholder={placeholder} id="logemail" autoComplete="off" />
        <img className={imgClassName} src="/search.svg" alt="" />
      </div>
  
    
  )
}

export default InputComponent
