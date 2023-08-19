/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const ChipOutlined = ({ leftContent, deletable, size, color, state, style, chipStyle, text = "Chip" }) => {
  return (
    <div className={`chip-outlined size-1-${size} state-${state} color-0-${color}`} style={style}>
      <div className="chip" style={chipStyle}>
        {text}
      </div>
    </div>
  );
};

ChipOutlined.propTypes = {
  leftContent: PropTypes.bool,
  deletable: PropTypes.bool,
  size: PropTypes.oneOf(["size-15", "large", "size-9", "size-18", "small", "size-12", "medium", "size-6"]),
  color: PropTypes.oneOf(["warning", "neutral", "danger", "info", "success", "primary"]),
  state: PropTypes.oneOf(["disabled", "hover", "active", "enabled"]),
  text: PropTypes.string,
};
