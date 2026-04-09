import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";

import "../../styles/components/taskbar.css";

function Taskbar() {
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
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
    <footer className="taskbar ui-bar">
      <div className="taskbar-left">
        <button type="button" className="btn-primary pawos-btn">
          BTN
        </button>
      </div>

      <div className="taskbar-center">
        <div className="ui-bar-inset window-strip">
          <span className="taskbar-placeholder">No windows open</span>
        </div>
      </div>

      <div className="taskbar-right">
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
