import { useDispatch } from "react-redux";
import { updateShadowValue } from "../../features/shadows";

export default function ShadowColorPicker({ inputData, shadowID }) {
  const dispatch = useDispatch();

  function handleInput(e) {
    dispatch(
      updateShadowValue({
        inputNumber: inputData.inputNumber,
        value: e.target.value,
        shadowID,
      })
    );
  }
  return (
    <div className="mt-3">
      <p>{inputData.name}</p>
      <div className="flex mt-2">
        <input
          // className="flex-grow border py-1 px-2 focus:outline-1 focus: border-purple-400"
          className="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-purple-500 focus:border-purple-500 block w-full py-1 px-2"
          type="text"
          value={inputData.value}
          onChange={handleInput}
        />
        <input
          className="cursor-pointer h-[40px] ml-2"
          type="color"
          value={inputData.value}
          onChange={handleInput}
        />
      </div>
    </div>
  );
}
