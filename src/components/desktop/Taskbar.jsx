import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";

import pawGif from '../../assets/icons/paw-icon.gif';
import '../../styles/components/taskbar.css';

function Taskbar() {
  return (
    <footer className="taskbar">
      <div className="taskbar-left">
        <button type="button" className="pawos-btn">
          <img
            src={pawGif}
            alt="pawOS Start Menu"
            className="pawos-icon"
          />
        </button>
      </div>

      <div className="taskbar-center">
        <div className="window-strip">
          <span className="taskbar-placeholder">No windows open</span>
        </div>
      </div>

      <div className="taskbar-right">
        <div className="system-tray">
         <FontAwesomeIcon icon={faVolumeHigh} className='volume-icon'/>
          <span>12:45</span>
          <span>07/04/2026</span>
        </div>
      </div>
    </footer>
  );
}

export default Taskbar;
