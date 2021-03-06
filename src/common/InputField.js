import React from "react";

const InputField = ({
  label,
  type,
  name,
  onChange,
  value,
  errors,
  onKeyDown
}) => {
  return (
    <div className="measure">
      <label htmlFor={name} className="f4 b db mb2">
        {label}
      </label>
      <input
        onKeyDown={onKeyDown}
        className="input-reset ba b--black-20 pa2 mb2 db w-100"
        type={type}
        name={name}
        onChange={onChange}
        value={value}
      />
      {errors ? (
        <small className="f6 black-60 db mb2 red">{errors}</small>
      ) : null}
    </div>
  );
};

export default InputField;
