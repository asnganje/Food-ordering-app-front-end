import { useSelector } from "react-redux"

function App() {

  const user = useSelector((store)=>store.user)
  console.log(user);
  return (
    <div className="text-blue-300">App</div>
  )
}
export default App