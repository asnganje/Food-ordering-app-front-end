function Button({btnName, handleClick}){
return (
    <button onClick={handleClick} className="text-xs sm:text-sm">{btnName}</button>
  )
}
export default Button;