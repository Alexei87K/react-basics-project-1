
import './About.css'

function AboutComponent({name}) {

  
  const p = 'paragraph' + (name ? ' ' + name : '' );
  

  return (
    
      <div className={p}>Введите название фильма, сериала или мультфильма для поиска и добавления в избранное.</div>
    
  )
}

export default AboutComponent
