import React from "react";

const TextArea = ({ label, name, onChange, value, errors }) => {
  return (
    <div>
      <label htmlFor={name} className="f4 b db mb2">
        {label}
      </label>
      <textarea
        style={{ resize: "none" }}
        onChange={onChange}
        value={value}
        name={name}
        className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2 h3"
      ></textarea>
      {errors ? <small className="f6 black-60 red">{errors}</small> : null}
    </div>
  );
};

export default TextArea;
