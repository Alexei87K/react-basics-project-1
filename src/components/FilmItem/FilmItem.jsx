
import styles from './FilmItem.module.css'
import PosterComponent from "../Poster/Poster";
import ButtonComponent from "../Button/Button";
import RatingComponent from "../Rating/Rating";

function FilmItemComponent({title, poster, rating, favorites}) {
  

  return (
    
    <div className={styles['filmItem']}>
       <div className={styles['posterBlock']}>
          <div className={styles['rel-block']}>
            <div className={styles['abs-block']}>
                <img src='/star.svg' alt="" />
                <RatingComponent rating={rating} />
            </div>
            <PosterComponent src={poster}  />
          </div>
          
          
          
          <div className={styles['poster-title']}>{title}</div>
          <div className={styles['flexBlock']}>
            <img src="like.svg" alt="" />
            <ButtonComponent name={favorites} />
          </div>
       </div>


    </div>
    
  )
}

export default FilmItemComponent
