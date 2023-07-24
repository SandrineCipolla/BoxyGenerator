import {useSelector, useDispatch} from "react-redux"
import {addShadow} from "../../features/shadows"
import Shadow from "./Shadow"

export default function ShadowList() {
  const shadows = useSelector(state =>state.shadows)
  const dispatch = useDispatch()
  return (
    <div>
      <div className="flex justify-between p-6 border-b border-purple-300">
        <p
        className="font-bold text-lg">
          Customize Shadows
        </p>
        <button
        onClick={()=>dispatch (addShadow())}
        className="py-1 px-3 text-sm rounded bg-purple-600 focus:outline-none
        focus:ring-4 focus:ring-offset-2 text-white hover:bg-purple-700">
          Add a shadow
        </button>
      </div>
      <ul>
        {shadows.map((shadow, index)=>
          <Shadow 
          panelNumber = {index +1}
          shadow= {shadow}
          key= {shadow.id}
          />
        )}
      </ul>
    </div>
  )
}