
import styles from  './Input.module.css';
import classNames from 'classnames/bind';

import { forwardRef } from 'react';

  

const cx = classNames.bind(styles);

const InputComponent = forwardRef(function InputComponent({className, name, placeholder, onChange, value, ...props}, ref) {
 
  

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
        <input type="email" value={value} ref={ref} name={name} className={inputClassName} onChange={onChange} placeholder={placeholder} id="logemail" autoComplete="off" {...props} />
        <img className={imgClassName} src="/search.svg" alt="" />
      </div>
  
    
  )
})

export default InputComponent
