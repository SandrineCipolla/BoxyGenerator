import { useState, useEffect } from "react";
import chevron from "../../assets/chevron.svg";
import ShadowRange from "./ShadowRange";
import ShadowColorPicker from "./ShadowColorPicker";
import ShadowCheckbox from "./ShadowCheckbox";

export default function Shadow({ panelNumber, shadow }) {
  const [toggleShadow, setToggleShadow] = useState(false);

  useEffect(() => {
    if (panelNumber === 1) {
      setToggleShadow(true);
    }
  }, []);

  const shadowInputs = shadow.inputs.map((input, index) => {
    if (input.type === "range") {
      return (
        <ShadowRange
          key={index}
          inputData={shadow.inputs[index]}
          shadowID={shadow.id}
        />
      );
    } else if (input.type === "color") {
      return (
        <ShadowColorPicker
          key={index}
          inputData={shadow.inputs[index]}
          shadowID={shadow.id}
        />
      );
    }
  });

  return (
    <li className="bg-purple-50 border-b border-purple-3">
      <button
        className="w-full px-6 py-4 flex justify-between items-center hover:bg-purple-100"
        onClick={() => setToggleShadow(!toggleShadow)}
      >
        <span>Shadow {panelNumber}</span>
        <img
          style={{
            transform: `${toggleShadow ? "rotate(90deg)" : "rotate(0deg)"}`,
          }}
          className="font-bold w-5"
          src={chevron}
          alt="ouvrir/fermer l'ombre"
        />
      </button>
      {toggleShadow && (
        <>
          <div className="flex items-end px-6 pt-4">
            <ShadowCheckbox name={"active"} shadowID={shadow.id}/>
            <ShadowCheckbox name={"inset"} shadowID={shadow.id}/>
            <button
              className="ml-auto text-sm bg-pink-600 text-white
                     hover:bg-pink-700 py-1 px-3 rounded"
            >
              Remove
            </button>
          </div>
          <div className="px-6 py-4">{shadowInputs}</div>
        </>
      )}
    </li>
  );
}
