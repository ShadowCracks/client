/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const BadgePlain = ({ size, color, style, elementStyle, text = "1" }) => {
  return (
    <div className={`badge-plain ${size}`} style={style}>
      <div className={`element ${color} size-${size}`} style={elementStyle}>
        {text}
      </div>
    </div>
  );
};

BadgePlain.propTypes = {
  size: PropTypes.oneOf(["large", "medium", "small"]),
  color: PropTypes.oneOf(["warning", "neutral", "danger", "info", "success", "primary"]),
  text: PropTypes.string,
};
