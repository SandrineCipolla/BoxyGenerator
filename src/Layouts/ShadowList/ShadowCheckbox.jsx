import { useSelector, useDispatch } from "react-redux";
import { updateCheckbox } from "../../features/shadows";

export default function ShadowCheckbox({ name, shadowID }) {
  const checkboxShadow = useSelector((state) =>
    state.shadows.find((shadow) => shadow.id === shadowID)
  );
  const dispatch = useDispatch()
  console.log("checkbox", checkboxShadow);
  return (
    <>
      <input
        onChange={() => dispatch(updateCheckbox({ shadowID, name }))}
        type="checkbox"
        checked={checkboxShadow[name]}
        id={`checkbox-${name}-${shadowID}`}
        className="h-4 w-4 rounded mr-2 bg-gray-50 border-purple-300 text-purple-500 focus:ring-0
        checked:shadow-xl"
      />
      <label
        className="leading-4 mr-5"
        htmlFor={`checkbox-${name}-${shadowID}`}
      >
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </label>
    </>
  );
}
