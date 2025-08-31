import React from "react";
import pills from "src/assets/hero/pills.png";
import getbetrayed from "src/assets/hero/getbetrayed.png";
import { dextools, pinksaleLink } from "src/config/constants";

const GetBetrayedFixed = () => {
  const zoomIn = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    e.currentTarget.style.transform = "scale(1.3)";
    e.currentTarget.style.transition = "transform 0.5s ease";
  };

  const zoomOut = (e: React.MouseEvent<HTMLImageElement, MouseEvent>) => {
    e.currentTarget.style.transform = "scale(1)";
    e.currentTarget.style.transition = "transform 0.5s ease";
  };

  return (
    <div
      style={{
        position: "fixed",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        right: 0,
        bottom: "10%",
        zIndex: 2000,
        flexDirection: "column",
      }}
    >
      <img
        src={getbetrayed}
        onClick={() => window.open(pinksaleLink, "_blank")}
        onMouseOver={zoomIn}
        onMouseLeave={zoomOut}
        style={{
          cursor: "pointer",
        }}
      />
      <img
        src={pills}
        onMouseOver={zoomIn}
        onMouseLeave={zoomOut}
        onClick={() => window.open(dextools, "_blank")}
        style={{
          cursor: "pointer",
        }}
      />
    </div>
  );
};

export default GetBetrayedFixed;
