import { useEffect, useRef, useState } from "react";
import Taskbar from "./Taskbar";
import StartMenu from "./StartMenu";
import Window from "../windows/Window";
import useWindowManager from "../../hooks/useWindowManager";

import "../../styles/components/desktop.css";

function Desktop() {
  const { windows, openWindow, closeWindow, focusWindow, unfocusAllWindows } =
    useWindowManager();
  const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);
  const [menuPosition, setMenuPosition] = useState(null);

  const buttonRef = useRef(null);
  const menuRef = useRef(null);

  const closeStartMenu = () => {
    setIsStartMenuOpen(false);
  };
  const openWindowFromMenu = (windowId) => {
    const windowDefinition = windowDefinitions[windowId];

    if (!windowDefinition) {
      console.warn(`No window definition found for: ${windowId}`);
      return;
    }

    openWindow(windowDefinition);
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
      <div className="desktop-workspace" onMouseDown={unfocusAllWindows}>
        <div className="desktop-inner"></div>
        {windows.map((windowItem) => {
          const WindowContent = windowItem.Component;

          if (windowItem.isMinimized) return null;

          return (
            <Window
              key={windowItem.id}
              title={windowItem.title}
              isFocused={windowItem.isFocused}
              onClose={() => closeWindow(windowItem.id)}
              onFocus={() => focusWindow(windowItem.id)}
            >
              <WindowContent />
            </Window>
          );
        })}
      </div>
      {isStartMenuOpen && menuPosition && (
        <StartMenu
          position={menuPosition}
          menuRef={menuRef}
          onOpenWindow={openWindowFromMenu}
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
