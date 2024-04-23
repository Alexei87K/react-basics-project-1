
import './FilmItem.css'

function FilmItemComponent({title, poster, rating}) {
  

  return (
    
    <div className="filmItem">
       <div className="posterBlock">
          <div className='rel-block'>
            <div className='abs-block'>
                <img src='/star.svg' alt="" />
                <span>{rating}</span>
            </div>
            <img src={poster} alt="" />
          </div>
          
          
          
          <div className="poster-title">{title}</div>
          <div className='flexBlock'>
            <img src="like.svg" alt="" />
            <span>в избранное</span>
          </div>
       </div>


    </div>
    
  )
}

export default FilmItemComponent
