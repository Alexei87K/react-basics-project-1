
import styles from './About.module.css'

function AboutComponent({name}) {

  
  const p = `${styles['paragraph']}` + (styles[name] ? ' ' + styles[name] : '' );
  

  return (
    
      <div className={p}>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</div>
    
  )
}

export default AboutComponent
