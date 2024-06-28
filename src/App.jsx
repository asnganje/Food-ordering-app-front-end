import { useSelector } from "react-redux"
import { Landing } from "./pages";

function App() {

  const user = useSelector((store)=>store.user)
  console.log(user);
  return (
    <div className="text-blue-300">
      App
      <Landing />
    </div>
  )
}
export default App