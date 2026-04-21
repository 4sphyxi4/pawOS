import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";

import "../../styles/windows/window.css";

function Window({ title, onClose, children }) {
  return (
    <div className="ui-box window">
      <div className="window-header ui-box">
        <div className="window-title">{title}</div>
        <div className="window-controls">
          <button
            className="window-btn minimize-btn primary-btn"
            aria-label="Minimize window"
          >
            <span>
              <FontAwesomeIcon icon={faVolumeHigh} className="volume-icon" />
            </span>
          </button>
          <button
            className="window-btn maximize-btn primary-btn"
            aria-label="Maximize window"
          >
            <span>
              <FontAwesomeIcon icon={faVolumeHigh} className="volume-icon" />
            </span>
          </button>
          <button
            className="window-btn close-btn primary-btn"
            onClick={onClose}
            aria-label="Close window"
          >
            <span>
              <FontAwesomeIcon icon={faVolumeHigh} className="volume-icon" />
            </span>
          </button>
        </div>
      </div>

      <div className="window-content ui-box-inset">{children}</div>
    </div>
  );
}

export default Window;
