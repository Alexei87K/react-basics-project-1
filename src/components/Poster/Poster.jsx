
import styles from './Poster.module.css'

function PosterComponent( {src} ) {

  
 
  

  return (
    
    <img className={styles['poster']} src={src} alt="" />
    
  )
}

export default PosterComponent
