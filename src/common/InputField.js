import React from "react";

const InputField = ({ label, type, name, onChange }) => {
  return (
    <div className="measure">
      <label htmlFor={name} className="f4 b db mb2">
        {label}
      </label>
      <input
        className="input-reset ba b--black-20 pa2 mb2 db w-100"
        type={type}
        name={name}
        onChange={onChange}
      />
      <small className="f6 black-60 db mb2">helper text</small>
    </div>
  );
};

export default InputField;
