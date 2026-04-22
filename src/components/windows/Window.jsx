import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faXmark, faWindowMinimize } from "@fortawesome/free-solid-svg-icons";
import { faSquare } from "@fortawesome/free-regular-svg-icons";

import "../../styles/windows/window.css";

function Window({ title, onClose, onFocus, isFocused, children }) {
  return (
    <div
      className={`window ui-box ${isFocused ? "window-focused" : "window-blurred"}`}
      onMouseDown={onFocus}
    >
      <div className="window-header ui-box">
        <div className="window-title">{title}</div>
        <div className="window-controls">
          <button
            className="window-btn minimize-btn primary-btn"
            aria-label="Minimize window"
          >
            <FontAwesomeIcon
              icon={faWindowMinimize}
              className="controls-icon"
            />
          </button>
          <button
            className="window-btn maximize-btn primary-btn"
            aria-label="Maximize window"
          >
            <FontAwesomeIcon icon={faSquare} className="controls-icon" />
          </button>
          <button
            className="window-btn close-btn primary-btn"
            onClick={onClose}
            aria-label="Close window"
          >
            <FontAwesomeIcon icon={faXmark} className="controls-icon" />
          </button>
        </div>
      </div>

      <div className="window-content ui-box-inset">{children}</div>
    </div>
  );
}

export default Window;
