/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Starfilled11 = ({ color = "#BDBFC4", opacity = "unset", style }) => {
  return (
    <svg
      className="starfilled-11"
      style={style}
      fill="none"
      height="20"
      viewBox="0 0 20 20"
      width="20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M10 14.8083L15.15 17.9167L13.7833 12.0583L18.3333 8.11667L12.3417 7.60833L10 2.08333L7.65833 7.60833L1.66667 8.11667L6.21667 12.0583L4.85 17.9167L10 14.8083Z"
        fill={color}
        fillOpacity={opacity}
      />
    </svg>
  );
};

Starfilled11.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.string,
};
