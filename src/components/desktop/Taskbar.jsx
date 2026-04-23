import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import { useState, useEffect } from "react";
import PetAssistant from "../assistant/PetAssistant";

import "../../styles/components/taskbar.css";

function Taskbar({ buttonRef, toggleStartMenu, isStartMenuOpen }) {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  const formattedTime = currentTime.toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  const formattedDate = currentTime.toLocaleDateString([], {
    weekday: "short",
    day: "2-digit",
    month: "short",
  });

  return (
    <footer className="taskbar ui-box">
      <div className="taskbar-left">
        <button
          ref={buttonRef}
          type="button"
          onClick={toggleStartMenu}
          className="primary-btn menu-btn"
          aria-expanded={isStartMenuOpen}
          aria-haspopup="true"
          aria-label="Open start menu"
        >
          <span>&nbsp;</span>
        </button>
      </div>

      <div className="taskbar-center">
        <div className="ui-box-inset window-strip">
          <span className="taskbar-placeholder">No windows open</span>
        </div>
      </div>

      <div className="taskbar-right">
        <div className="taskbar-pet-anchor">
          <PetAssistant />
        </div>

        <div className="system-tray">
          <FontAwesomeIcon icon={faVolumeHigh} className="volume-icon" />
          <span>{formattedTime}</span>
          <span>{formattedDate}</span>
        </div>
      </div>
    </footer>
  );
}

export default Taskbar;
