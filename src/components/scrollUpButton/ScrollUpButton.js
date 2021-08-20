import React from "react";
import "./scrollUpButton.css";

export const ScrollUpButton = ({ page }) => {
  return (
    <div className="scroll-up-btn">
      <a href={page}>
        <i className="fas fa-arrow-circle-up"></i>
      </a>
    </div>
  );
};
