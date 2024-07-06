function Button({btnName, handleClick, children}){
return (
    <button onClick={handleClick} className="text-xs sm:text-sm">{children?children:btnName}</button>
  )
}
export default Button;