import { useEffect, useRef, useState } from "react";
import Taskbar from "./Taskbar";
import StartMenu from "./StartMenu";
import Window from "../windows/Window";

import "../../styles/components/desktop.css";

function Desktop() {
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState(null);
  const [isWindowOpen, setIsWindowOpen] = useState(true);

  const [windows, setWindows] = useState([]);

  const openWindows = (id, title) => {
    setWindows((prevWindows) => {
      return [
        ...prevWindows,
        { id, title, isMinimized: false, isFocused: true },
      ];
    });
  };

  const buttonRef = useRef(null);
  const menuRef = useRef(null);

  const closeWindow = () => {
    setIsWindowOpen(false);
  };

  const openWindow = () => {
    setIsWindowOpen(true);
  };

  const closeStartMenu = () => {
    setIsStartMenuOpen(false);
  };

  const openAnimalCatalogue = () => {
    openWindow();
    closeStartMenu();
  };

  const updateMenuPosition = () => {
    if (!buttonRef.current) return;

    const rect = buttonRef.current.getBoundingClientRect();

    setMenuPosition({
      left: rect.left - 13,
      bottom: window.innerHeight - rect.top + 20,
    });
  };

  const toggleStartMenu = () => {
    if (!isStartMenuOpen) {
      updateMenuPosition();
      setIsStartMenuOpen(true);
    } else {
      closeStartMenu();
    }
  };

  useEffect(() => {
    if (!isStartMenuOpen) return;

    const handleClickOutside = (event) => {
      const clickedButton = buttonRef.current?.contains(event.target);
      const clickedMenu = menuRef.current?.contains(event.target);

      if (!clickedButton && !clickedMenu) {
        closeStartMenu();
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeStartMenu();
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
  }, [isStartMenuOpen]);

  return (
    <div className="desktop-page">
      <div className="desktop-workspace">
        <div className="desktop-inner"></div>
        {isWindowOpen && (
          <Window title="animal_catalogue.exe" onClose={closeWindow}>
            <p>Content goes here...</p>
          </Window>
        )}
      </div>
      {isStartMenuOpen && menuPosition && (
        <StartMenu
          position={menuPosition}
          menuRef={menuRef}
          openAnimalCatalogue={openAnimalCatalogue}
        />
      )}
      <Taskbar
        buttonRef={buttonRef}
        toggleStartMenu={toggleStartMenu}
        isStartMenuOpen={isStartMenuOpen}
      />
    </div>
  );
}

export default Desktop;
