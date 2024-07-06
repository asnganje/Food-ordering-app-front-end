function FormInput({label, name, type, value, changeHandler, placeHolder}) {
  return (
    <div className='mb-2'>
        <label htmlFor={name}  className="capitalize"> {label || name}</label>
        <input id={name} name={name} onChange={(e)=>changeHandler(e)} value={value} type={type} placeholder={placeHolder}></input>
      </div>
  )
}
export default FormInput