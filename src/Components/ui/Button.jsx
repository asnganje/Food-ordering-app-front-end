function Button({btnName, handleClick, children}){
return (
    <button onClick={handleClick} className="text-white rounded-md font-serif text-lg bg-orange-500 py-2 px-4 capitalize">{children?children:btnName}</button>
  )
}
export default Button;