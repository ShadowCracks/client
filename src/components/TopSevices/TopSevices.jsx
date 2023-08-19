/*
We're constantly improving the code you see. 
Please share your feedback here: https://form.asana.com/?k=uvp-HPgd3_hyoXRBw1IcNg&d=1152665201300829
*/

import PropTypes from "prop-types";
import React from "react";
import { BadgePlain } from "../BadgePlain";
import "./style.css";

export const TopSevices = ({
  theme,
  size,
  type,
  style,
  hasOsgear = true,
  rankStyle,
  badgePlainElementStyle,
  badgePlainSizeMediumColorStyle,
  scoreStyle,
  badgePlainSizeMediumColorStyleOverride,
  text = "osgear.se",
  badgePlainText = "#1",
  badgePlainText1 = "95.82",
  hasUgfreak = true,
  rankStyleOverride,
  badgePlainElementStyleOverride,
  badgePlainSizeLargeColorStyle,
  badgePlainText2 = "#1",
  scoreStyleOverride,
  badgePlainSizeLargeColorStyleOverride,
  badgePlainText3 = "95.82",
}) => {
  return (
    <div className={`top-sevices ${size} ${theme}`} style={style}>
      {["desktop", "mobile"].includes(size) &&
        (size === "desktop" || type === "top-10") &&
        (size === "mobile" || type === "top-5") &&
        ["top-5", "top-10"].includes(type) && (
          <>
            <div className={`frame ${type} theme-${theme}`}>
              {type === "top-5" && (
                <>
                  <>{hasOsgear && <img className="osgear" alt="Osgear" src="/img/osgear-1.png" />}</>
                </>
              )}

              {type === "top-10" && (
                <div className="div">
                  <div className="rank">Rank</div>
                  <BadgePlain
                    color="primary"
                    elementStyle={
                      theme === "dark"
                        ? {
                            color: "#f5c527",
                          }
                        : undefined
                    }
                    size="medium"
                    style={
                      theme === "light"
                        ? {
                            backgroundColor: "#eeeff0",
                          }
                        : {
                            backgroundColor: "#191a1b",
                          }
                    }
                    text="#1"
                  />
                </div>
              )}
            </div>
            <div className={`osgear-se type-${type} theme-1-${theme}`}>
              {type === "top-5" && <>{text}</>}

              {type === "top-10" && (
                <>
                  <div className="ugfreak-wrapper">
                    <img className="ugfreak" alt="Ugfreak" src="/img/ugfreak-3.png" />
                  </div>
                  <div className="text-wrapper">{text}</div>
                </>
              )}
            </div>
            <div className={`frame-2 type-0-${type}`}>
              {type === "top-5" && (
                <>
                  <div className="frame-3">
                    <div className="rank-2" style={rankStyle}>
                      Rank
                    </div>
                    <BadgePlain
                      color="primary"
                      elementStyle={badgePlainElementStyle}
                      size="medium"
                      style={badgePlainSizeMediumColorStyle}
                      text={badgePlainText}
                    />
                  </div>
                  <div className="frame-4">
                    <div className="score" style={scoreStyle}>
                      Score
                    </div>
                    <BadgePlain
                      color="primary"
                      elementStyle={
                        theme === "light"
                          ? {
                              color: "#272930",
                              fontWeight: "400",
                            }
                          : {
                              color: "#ffffff",
                              fontWeight: "400",
                            }
                      }
                      size="medium"
                      style={badgePlainSizeMediumColorStyleOverride}
                      text={badgePlainText1}
                    />
                  </div>
                </>
              )}

              {type === "top-10" && (
                <div className="frame-5">
                  <div className="score-2">Score</div>
                  <BadgePlain
                    color="primary"
                    elementStyle={
                      theme === "light"
                        ? {
                            color: "#272930",
                            fontWeight: "400",
                          }
                        : {
                            color: "#ffffff",
                            fontWeight: "400",
                          }
                    }
                    size="medium"
                    style={
                      theme === "light"
                        ? {
                            backgroundColor: "#eeeff0",
                          }
                        : {
                            backgroundColor: "unset",
                            border: "1px solid",
                            borderColor: "#555555",
                          }
                    }
                    text="95.82"
                  />
                </div>
              )}
            </div>
          </>
        )}

      {type === "top-10" && size === "desktop" && (
        <div className="frame-6">
          <div className="frame-7">{hasUgfreak && <img className="img" alt="Ugfreak" src="/img/ugfreak-3.png" />}</div>
          <div className="osgear-se-2">{text}</div>
        </div>
      )}

      {["desktop", "mobile"].includes(size) &&
        (size === "desktop" || type === "top-5") &&
        (size === "mobile" || type === "top-10") &&
        ["top-10", "top-5"].includes(type) && (
          <div className="frame-8">
            {type === "top-5" && (
              <>
                <div className="rank-3">Rank</div>
                <BadgePlain
                  color="primary"
                  elementStyle={
                    theme === "dark"
                      ? {
                          color: "#f5c527",
                        }
                      : undefined
                  }
                  size="medium"
                  style={
                    theme === "light"
                      ? {
                          backgroundColor: "#eeeff0",
                        }
                      : {
                          backgroundColor: "#191a1b",
                        }
                  }
                  text="#1"
                />
              </>
            )}

            {type === "top-10" && (
              <>
                <div className="frame-9">
                  <div className="rank-4" style={rankStyleOverride}>
                    Rank
                  </div>
                  <BadgePlain
                    color="primary"
                    elementStyle={badgePlainElementStyleOverride}
                    size="medium"
                    style={badgePlainSizeLargeColorStyle}
                    text={badgePlainText2}
                  />
                </div>
                <div className="frame-10">
                  <div className="score-3" style={scoreStyleOverride}>
                    Score
                  </div>
                  <BadgePlain
                    color="primary"
                    elementStyle={
                      theme === "light"
                        ? {
                            color: "#272930",
                            fontWeight: "400",
                          }
                        : {
                            color: "#ffffff",
                            fontWeight: "400",
                          }
                    }
                    size="medium"
                    style={badgePlainSizeLargeColorStyleOverride}
                    text={badgePlainText3}
                  />
                </div>
              </>
            )}
          </div>
        )}

      {type === "top-5" && size === "mobile" && (
        <>
          <div className="osgear-wrapper">
            <img className="osgear-2" alt="Osgear" src="/img/osgear-3.png" />
          </div>
          <div className="osgear-se-3">{text}</div>
          <div className="frame-11">
            <div className="score-4">Score</div>
            <BadgePlain
              color="primary"
              elementStyle={
                theme === "light"
                  ? {
                      color: "#272930",
                      fontWeight: "400",
                    }
                  : {
                      color: "#ffffff",
                      fontWeight: "400",
                    }
              }
              size="medium"
              style={
                theme === "light"
                  ? {
                      backgroundColor: "#eeeff0",
                    }
                  : {
                      backgroundColor: "unset",
                      border: "1px solid",
                      borderColor: "#555555",
                    }
              }
              text="95.82"
            />
          </div>
        </>
      )}
    </div>
  );
};

TopSevices.propTypes = {
  theme: PropTypes.oneOf(["dark", "light"]),
  size: PropTypes.oneOf(["desktop", "mobile"]),
  type: PropTypes.oneOf(["top-10", "top-5"]),
  hasOsgear: PropTypes.bool,
  text: PropTypes.string,
  badgePlainText: PropTypes.string,
  badgePlainText1: PropTypes.string,
  hasUgfreak: PropTypes.bool,
  badgePlainText2: PropTypes.string,
  badgePlainText3: PropTypes.string,
};
