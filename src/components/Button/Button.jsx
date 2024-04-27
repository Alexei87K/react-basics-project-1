
import styles from './Button.module.css'

function ButtonComponent({name}) {

  const btn = (name == 'Искать' ? `${styles['button']}` : (name == 'Войти в профиль' ? `${styles['button']}` + ' ' +  `${styles['login']}` : (name == 'в избранное' ? ' ' +  `${styles['like-btn']}` : '')) )
  

  return (
    
      <button className={btn}>{name}</button>
    
  )
}

export default ButtonComponent
