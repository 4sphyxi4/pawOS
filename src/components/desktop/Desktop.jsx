import { useEffect, useRef, useState } from "react";
import Taskbar from "./Taskbar";
import StartMenu from "./StartMenu";

import "../../styles/components/desktop.css";

function Desktop() {

const [isStartMenuOpen, setIsStartMenuOpen] = useState(false);
const [menuPosition, setMenuPosition] = useState(null);


const buttonRef = useRef(null);
const menuRef = useRef(null);

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
      setIsStartMenuOpen(false);
    }
  };



  
  useEffect(() => {
    if (!isStartMenuOpen) return;

    const handleClickOutside = (event) => {
      const clickedButton = buttonRef.current?.contains(event.target);
      const clickedMenu = menuRef.current?.contains(event.target);

      if (!clickedButton && !clickedMenu) {
        setIsStartMenuOpen(false);
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        setIsStartMenuOpen(false);
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
      </div>
      {isStartMenuOpen && menuPosition && (
        <StartMenu position={menuPosition} menuRef={menuRef} />
      )}
      <Taskbar ref={buttonRef} onClick={toggleStartMenu} aria-expanded={isStartMenuOpen} />
    </div>
  );
}

export default Desktop;
