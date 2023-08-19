/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Checkcirclefilled3 = ({ color = "#F5C527", opacity = "unset", style }) => {
  return (
    <svg
      className="checkcirclefilled-3"
      style={style}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"
        fill={color}
        fillOpacity={opacity}
      />
    </svg>
  );
};

Checkcirclefilled3.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.string,
};
