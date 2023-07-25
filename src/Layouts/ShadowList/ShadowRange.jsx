import { useDispatch } from "react-redux";
import { updateShadowValue } from "../../features/shadows";

export default function ShadowRange({inputData, shadowID}) {
  const dispatch = useDispatch();

  function handleInput(e) {
    dispatch(
      updateShadowValue({
        inputNumber: inputData.inputNumber,
        value: e.target.value,
        shadowID
      })
    );
  }

  return (
    <div className="my-8 ">
      <div className="flex justify-between">
        <p>{inputData.name}</p>
        <div 
        className="flex items-baseline mb-2"
        >
          <input
            value={inputData.value}
            onChange={handleInput}
            className="w-14 h-8 mr-2 border border-purple-400 text-center"
            type="number"
          />
          <p>px</p>
        </div>
      </div>
      <div 
      className="relative z-0 w-full flex items-center"
      >
        <input
          min={inputData.minMax[0]}
          max={inputData.minMax[1]}
          value={inputData.value}
          onChange={handleInput}
          className="w-full h-[2px] bg-purple-200 rounded-lg 
            appearance-none cursor-pointer"
          type="range"
        />
        <div
          className="absolute -z-10 top-1/2 left-1/2
                -translate-y-1/2 -translate-x-1/2 w-0.5 h-10
                bg-gray-300 rounded"
        ></div>
      </div>
    </div>
  )
}