// import React from "react";
// import "./Popup.css";

// function Popup({ onClose }) {
//   return (
//     <div className="popup_overlay" onClick={onClose}>
//       <div className="popup_content">
//         <p>Coming Soon</p>
//       </div>
//     </div>
//   );
// }

// export default Popup;

// Popup.js

import React, { useEffect } from "react";
import "./Popup.css";

function Popup({ onClose }) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 1000);

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  return (
    <div className="popup_overlay" onClick={onClose}>
      <div className="popup_content">
        <p>Coming Soon</p>
      </div>
    </div>
  );
}

export default Popup;
