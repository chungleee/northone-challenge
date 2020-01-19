import React from "react";

const TextArea = ({ label, name, onChange }) => {
  return (
    <div>
      <label htmlFor={name} className="f6 b db mb2">
        {label}
      </label>
      <textarea
        style={{ resize: "none" }}
        onChange={onChange}
        name={name}
        className="db border-box hover-black w-100 measure ba b--black-20 pa2 br2 mb2 h4"
      ></textarea>
      <small className="f6 black-60">helper text</small>
    </div>
  );
};

export default TextArea;
