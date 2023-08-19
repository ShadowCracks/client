/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";

export const IconFavorite70 = ({ color = "#FAE17D", style }) => {
  return (
    <svg
      className="icon-favorite-70"
      style={style}
      fill="none"
      height="28"
      viewBox="0 0 28 28"
      width="28"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        className="path"
        d="M19.25 3.5C17.22 3.5 15.2717 4.445 14 5.93833C12.7284 4.445 10.78 3.5 8.75004 3.5C5.15671 3.5 2.33337 6.32333 2.33337 9.91667C2.33337 14.3267 6.30004 17.92 12.3084 23.38L14 24.9083L15.6917 23.3683C21.7 17.92 25.6667 14.3267 25.6667 9.91667C25.6667 6.32333 22.8434 3.5 19.25 3.5ZM14.1167 21.6417L14 21.7583L13.8834 21.6417C8.33004 16.6133 4.66671 13.2883 4.66671 9.91667C4.66671 7.58333 6.41671 5.83333 8.75004 5.83333C10.5467 5.83333 12.2967 6.98833 12.915 8.58667H15.0967C15.7034 6.98833 17.4534 5.83333 19.25 5.83333C21.5834 5.83333 23.3334 7.58333 23.3334 9.91667C23.3334 13.2883 19.67 16.6133 14.1167 21.6417Z"
        fill={color}
      />
    </svg>
  );
};

IconFavorite70.propTypes = {
  color: PropTypes.string,
};
