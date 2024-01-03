import { memo } from "react";



export const FormInput = ({ name, value, placeholder, setValue, isError, Error }) => {
  return (
    <>
      <input
        className={
          isError
            ? "border border-red-600 rounded p-2 mb-2"
            : "border rounded border-gray-600 p-2 mb-2"
        }
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
      ></input>
      {isError && (
        <span className="text-red-600">{Error}</span>
      )}
    </>
  );
};

export default memo(FormInput)
