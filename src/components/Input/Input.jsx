
import './Input.css'

function InputComponent({className}) {
  const fs = 'form-style' + (className ? '' : ' ' + 'plusPadding')
  const ic = 'input-icon uil uil-at' + (className ? ' ' + className : '');


  return (
    
    
      <div className="form-group">
        <input type="email" name="logemail" className={fs} placeholder="Your Email" id="logemail" autoComplete="off" />
        <img className={ic} src="/search.svg" alt="" />
      </div>
  
    
  )
}

export default InputComponent
