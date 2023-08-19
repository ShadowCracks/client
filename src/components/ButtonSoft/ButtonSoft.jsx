/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ButtonSoft = ({ rightIcon, leftIcon, size, state, color, style, buttonStyle, text = "Button" }) => {
  return (
    <div className={`button-soft size-6-${size} state-6-${state} color-4-${color}`} style={style}>
      <div className="button" style={buttonStyle}>
        {text}
      </div>
    </div>
  );
};

ButtonSoft.propTypes = {
  rightIcon: PropTypes.bool,
  leftIcon: PropTypes.bool,
  size: PropTypes.oneOf(["large", "medium", "small"]),
  state: PropTypes.oneOf(["disabled", "hover", "enabled"]),
  color: PropTypes.oneOf(["warning", "neutral", "danger", "info", "success", "primary"]),
  text: PropTypes.string,
};
