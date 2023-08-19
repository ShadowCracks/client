/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { Starfilled11 } from "../../icons/Starfilled11";
import "./style.css";

export const Tab = ({ icon = true, state, size, iconPosition, style, itemStyle, text = "Item" }) => {
  return (
    <div className={`tab state-3-${state} size-3-${size} ${iconPosition}`} style={style}>
      {iconPosition === "right" && (
        <div className="item" style={itemStyle}>
          {text}
        </div>
      )}

      {icon && (
        <Starfilled11
          color={state === "disabled" ? "#BDBFC4" : state === "selected" ? "#054DA7" : "#272930"}
          style={{
            height: "20px",
            minWidth: "20px",
            position: "relative",
          }}
        />
      )}

      {["left", "up"].includes(iconPosition) && <div className="item-2">{text}</div>}
    </div>
  );
};

Tab.propTypes = {
  icon: PropTypes.bool,
  state: PropTypes.oneOf(["active", "enabled", "selected", "hover", "disabled"]),
  size: PropTypes.oneOf(["large", "medium", "small"]),
  iconPosition: PropTypes.oneOf(["up", "right", "left"]),
  text: PropTypes.string,
};
