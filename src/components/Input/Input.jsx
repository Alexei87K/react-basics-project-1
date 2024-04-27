
import styles from  './Input.module.css'

function InputComponent({className}) {
  const fs = `${styles['form-style']}` + (className ? '' : ' ' + `${styles['plusPadding']}`);
  const ic = `${styles['input-icon']} ${styles['uil']} ${styles['uil-at']}` + (className ? ' ' + `${styles[className]}` : '');


  return (
    
    
      <div className={styles['form-group']}>
        <input type="email" name="logemail" className={fs} placeholder="Your Email" id="logemail" autoComplete="off" />
        <img className={ic} src="/search.svg" alt="" />
      </div>
  
    
  )
}

export default InputComponent
