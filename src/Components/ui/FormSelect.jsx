import { useState } from "react"
import { locations } from "../../utils/locations"

function FormSelect() {
  const [selected, setSelected] = useState('')

  const changeHandler = (e) => {
    const value = e.target.value
    setSelected(value)
  }
  return (
    <div>
      <select
        value={selected}
        onChange={changeHandler}
        className="p-4 text-xl focus:outline-none font-serif rounded-md cursor-pointer w-[100%]"
      >
        <option value="" disabled className="cursor-pointer">Select a location</option>
        {
          locations.map((location)=> {
            const {id, label} = location
            return(
              <option value={label} key={id}>
                {label}
              </option>
            )
          })
        }
      </select>
    </div>
  )
}
export default FormSelect