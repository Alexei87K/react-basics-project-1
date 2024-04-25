
import './Button.css'

function ButtonComponent({name}) {

  const btn = 'button' + (name == 'Искать' ? '' : (name == 'Войти в профиль' ? ' ' + 'login' : '') )
  

  return (
    
      <button className={btn}>{name}</button>
    
  )
}

export default ButtonComponent
