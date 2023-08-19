/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { IconFavorite70 } from "../../icons/IconFavorite70";
import "./style.css";

export const IconButtonOutlined = ({
  state,
  color,
  size,
  style,
  icon = (
    <IconFavorite70
      color="#096BDE"
      style={{
        height: "20px",
        minWidth: "20px",
        position: "relative",
      }}
    />
  ),
}) => {
  return (
    <div className={`icon-button-outlined size-0-${size} ${state} color-${color}`} style={style}>
      {icon}
    </div>
  );
};

IconButtonOutlined.propTypes = {
  state: PropTypes.oneOf(["disabled", "hover", "active", "enabled"]),
  color: PropTypes.oneOf(["warning", "neutral", "danger", "info", "success", "primary"]),
  size: PropTypes.oneOf(["large", "medium", "small"]),
};
