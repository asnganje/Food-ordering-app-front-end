import { quickProducts } from "../utils/qProducts"

function QuickProducts() {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 pt-[5vh] pb-[20vh]">
      {quickProducts.map((product)=> {
        const { id, meal, label, description} = product
        return (
                <div key={id} className="grid grid-cols-2 gap-4 bg-white shadow-xl z-0 hover:mr-8 transition-all duration-500 hover:z-50 hover:shadow-2xl cursor-pointer">
                  <img src={meal} alt="label" className="h-[10rem] w-[10rem] rounded-md"/>
                  <div>
                    <h3 className="font-sans text-xl font-bold">{label}</h3>
                    <p className="text-gray-400">{description}</p>
                  </div>
                </div>
                )
      })}
    </div>
  )
}
export default QuickProducts