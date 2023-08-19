/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Chevronrightfilled2 = ({ color = "#191A1B", opacity = "unset", style }) => {
  return (
    <svg
      className="chevronrightfilled-2"
      style={style}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M8.08751 5L6.91251 6.175L10.7292 10L6.91251 13.825L8.08751 15L13.0875 10L8.08751 5Z"
        fill={color}
        fillOpacity={opacity}
      />
    </svg>
  );
};

Chevronrightfilled2.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.string,
};
