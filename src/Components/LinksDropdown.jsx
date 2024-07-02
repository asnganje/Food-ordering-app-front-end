import { useState } from "react"
import {FaAlignLeft } from "react-icons/fa"
import { useDispatch} from "react-redux"
import { showMenu } from "../redux/slices/dropDownSlice"

function LinksDropdown() {
const dispatch = useDispatch()

const showDropDownMenu = () => {
  dispatch(showMenu())
}
  return (
        <button className="block md:hidden" onClick={showDropDownMenu}>
          <FaAlignLeft />
        </button>
  )
}
export default LinksDropdown