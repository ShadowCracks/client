/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Chevronleftfilled2 = ({ color = "#191A1B", opacity = "unset", style }) => {
  return (
    <svg
      className="chevronleftfilled-2"
      style={style}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M13.0875 6.175L11.9125 5L6.91251 10L11.9125 15L13.0875 13.825L9.27084 10L13.0875 6.175Z"
        fill={color}
        fillOpacity={opacity}
      />
    </svg>
  );
};

Chevronleftfilled2.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.string,
};
