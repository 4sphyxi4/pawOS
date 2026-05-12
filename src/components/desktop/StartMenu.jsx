// src/components/desktop/StartMenu.jsx

import { useRef, useState } from "react";
import { createPortal } from "react-dom";

import { startMenuItems } from "../../os/startMenuItems";
import "../../styles/components/start-menu.css";

function StartMenu({ position, menuRef, onOpenWindow }) {
  const [activeSubmenu, setActiveSubmenu] = useState(null);
  const closeTimerRef = useRef(null);

  const openSubmenu = (item, event) => {
    window.clearTimeout(closeTimerRef.current);

    const rect = event.currentTarget.getBoundingClientRect();

    setActiveSubmenu({
      label: item.label,
      children: item.children,
      top: rect.top - 6,
      left: rect.right + 16,
    });
  };

  const closeSubmenuSoon = () => {
    closeTimerRef.current = window.setTimeout(() => {
      setActiveSubmenu(null);
    }, 120);
  };

  const keepSubmenuOpen = () => {
    window.clearTimeout(closeTimerRef.current);
  };

  const handleOpenWindow = (windowId) => {
    setActiveSubmenu(null);
    onOpenWindow(windowId);
  };

  const renderMenuItem = (item) => {
    if (item.type === "group") {
      return (
        <li
          key={item.label}
          className="start-menu-item start-menu-item--has-submenu"
          onMouseLeave={closeSubmenuSoon}
        >
          <button
            className="start-menu-button start-menu-button--submenu"
            onMouseEnter={(event) => openSubmenu(item, event)}
          >
            {item.label}
            <span className="submenu-arrow">▶</span>
          </button>
        </li>
      );
    }

    return (
      <li key={item.windowId} className="start-menu-item">
        <button
          className="start-menu-button"
          onClick={() => handleOpenWindow(item.windowId)}
        >
          {item.label}
        </button>
      </li>
    );
  };

  return (
    <>
      {createPortal(
        <nav
          ref={menuRef}
          className="start-menu"
          style={{
            left: `${position.left}px`,
            bottom: `${position.bottom}px`,
          }}
        >
          <ul className="start-menu-list">
            {startMenuItems.map((item) => renderMenuItem(item))}
          </ul>
        </nav>,
        document.body,
      )}

      {activeSubmenu &&
        createPortal(
          <div
            className="start-submenu start-submenu--portal"
            style={{
              top: `${activeSubmenu.top}px`,
              left: `${activeSubmenu.left}px`,
            }}
            onMouseEnter={keepSubmenuOpen}
            onMouseLeave={closeSubmenuSoon}
            onMouseDown={(event) => event.stopPropagation()}
          >
            {activeSubmenu.children.map((child) => (
              <button
                key={child.windowId}
                className="start-menu-button"
                onClick={() => handleOpenWindow(child.windowId)}
              >
                {child.label}
              </button>
            ))}
          </div>,
          document.body,
        )}
    </>
  );
}

export default StartMenu;
