/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const Favoritefilled1 = ({ color = "#F5C527", opacity = "unset", style }) => {
  return (
    <svg
      className="favoritefilled-1"
      style={style}
      fill="none"
      height="24"
      viewBox="0 0 24 24"
      width="24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M12 21.175L10.55 19.855C5.4 15.185 2 12.105 2 8.325C2 5.245 4.42 2.825 7.5 2.825C9.24 2.825 10.91 3.635 12 4.915C13.09 3.635 14.76 2.825 16.5 2.825C19.58 2.825 22 5.245 22 8.325C22 12.105 18.6 15.185 13.45 19.865L12 21.175Z"
        fill={color}
        fillOpacity={opacity}
      />
    </svg>
  );
};

Favoritefilled1.propTypes = {
  color: PropTypes.string,
  opacity: PropTypes.string,
};
