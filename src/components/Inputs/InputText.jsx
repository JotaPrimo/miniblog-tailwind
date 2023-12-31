import React from "react";

const InputText = ({ label, placeholder, onChange, value, required = false }) => {
  return (
    <>
      <input
        type="text"
        name="floating_email"
        id="floating_email"
        className="input-default mb-5"
        required={required}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
       
      />
      <label
        htmlFor="floating_email"       
        className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
      >
        {label}
      </label>
    </>
  );
};

export default InputText;
