import React from "react";
import {  createPortal} from "react-dom";
function Louding() {
  return createPortal (
    <div className="louding  d-flex justify-content-center align-items-center">
      <i className="fa-solid fa-spinner"></i>
    </div>,
    document.getElementById("louding")
  );
}

export default Louding;
