
import styles from './FilmList.module.css'

function FilmListComponent({ children }) {
  

  return (
    
    <div className={styles['filmList']}>
        {children}
    </div>
    
  )
}

export default FilmListComponent
