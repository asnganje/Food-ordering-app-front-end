function FormInput({label, name, type, value, changeHandler, placeHolder}) {
  return (
    <div className='grid mb-5'>
        <label htmlFor={name}  className="w-[50vw] font-serif capitalize"> {label || name}</label>
        <input id={name} name={name} className="border-[1px] h-[2.5rem] font-sans font-light rounded-sm shadow-sm border-lytBlueBgColor  w-[40vw] lg:w-[25vw]" onChange={(e)=>changeHandler(e)} value={value} type={type} placeholder={placeHolder}></input>
      </div>
  )
}
export default FormInput