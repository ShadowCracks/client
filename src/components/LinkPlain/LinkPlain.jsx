/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import "./style.css";

export const LinkPlain = ({ underline, state, color, linkStyle, text = "Link" }) => {
  return (
    <div className={`link-plain state-1-${state} color-2-${color}`}>
      <div className="link" style={linkStyle}>
        {text}
      </div>
    </div>
  );
};

LinkPlain.propTypes = {
  underline: PropTypes.bool,
  state: PropTypes.oneOf(["disabled", "hover", "active", "enabled"]),
  color: PropTypes.oneOf(["warning", "neutral", "danger", "info", "success", "primary"]),
  text: PropTypes.string,
};
