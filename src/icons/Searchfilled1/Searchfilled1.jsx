/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Searchfilled1 = ({ color = "white", opacity = "unset", fillOpacity = "unset", style }) => {
  return (
    <svg
      className="searchfilled-1"
      style={style}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M15.755 14.255H14.965L14.685 13.985C15.665 12.845 16.255 11.365 16.255 9.755C16.255 6.165 13.345 3.255 9.755 3.255C6.165 3.255 3.255 6.165 3.255 9.755C3.255 13.345 6.165 16.255 9.755 16.255C11.365 16.255 12.845 15.665 13.985 14.685L14.255 14.965V15.755L19.255 20.745L20.745 19.255L15.755 14.255ZM9.755 14.255C7.265 14.255 5.255 12.245 5.255 9.755C5.255 7.265 7.265 5.255 9.755 5.255C12.245 5.255 14.255 7.265 14.255 9.755C14.255 12.245 12.245 14.255 9.755 14.255Z"
        fill={color}
        fillOpacity={fillOpacity}
        opacity={opacity}
      />
    </svg>
  );
};

Searchfilled1.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.string,
  fillOpacity: PropTypes.string,
};
