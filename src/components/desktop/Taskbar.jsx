import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faVolumeHigh } from "@fortawesome/free-solid-svg-icons";
import { useEffect, useRef, useState } from "react";
import StartMenu from "./StartMenu";

import "../../styles/components/taskbar.css";

function Taskbar() {
  const [showStartMenu, setShowStartMenu] = useState(false);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [menuPosition, setMenuPosition] = useState(null);

  const buttonRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const updateMenuPosition = () => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();

    setMenuPosition({
      left: rect.left - 13,
      bottom: window.innerHeight - rect.top + 20,
    });
  };

  const toggleStartMenu = () => {
    if (!showStartMenu) {
      updateMenuPosition();
      setShowStartMenu(true);
    } else {
      setShowStartMenu(false);
    }
  };

  useEffect(() => {
    if (!showStartMenu) return;

    const handleClickOutside = (event) => {
      const clickedButton = buttonRef.current?.contains(event.target);
      const clickedMenu = menuRef.current?.contains(event.target);

      if (!clickedButton && !clickedMenu) {
        setShowStartMenu(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setShowStartMenu(false);
      }
    };

    const handleResize = () => {
      updateMenuPosition();
    };

    const handleScroll = () => {
      updateMenuPosition();
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showStartMenu]);

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
    <>
      {showStartMenu && menuPosition && (
        <StartMenu position={menuPosition} menuRef={menuRef} />
      )}

      <footer className="taskbar ui-bar">
        <div className="taskbar-left">
          <button
            ref={buttonRef}
            type="button"
            onClick={toggleStartMenu}
            className="btn-primary menu-btn"
            aria-expanded={showStartMenu}
            aria-haspopup="true"
            aria-label="Open start menu"
          >
            <span>&nbsp;</span>
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
    </>
  );
}

export default Taskbar;