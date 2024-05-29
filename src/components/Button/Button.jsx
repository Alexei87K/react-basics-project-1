
import styles from './Button.module.css'

function ButtonComponent({name, onClick}) {

  const btn = (name == 'Искать' ? `${styles['button']}` : (name == 'Войти в профиль' ? `${styles['button']}` + ' ' +  `${styles['login']}` : (name == 'в избранное' ? ' ' +  `${styles['like-btn']}` : '')) )
  

  return (
    
      <button className={btn} onClick={onClick}>{name}</button>
    
  )
}

export default ButtonComponent
