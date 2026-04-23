import { createPortal } from "react-dom";
import { useState } from "react";
import "../../styles/components/start-menu.css";

function StartMenu({
  position,
  menuRef,
  openDashboard,
  openAnimalDatabase,
  openRegisterAnimal,
  openOrganizer,
  openMoodTracker,
  openPawMail,
  openMilestones,
  openOtherProjects,
}) {
  const [activeSubmenu, setActiveSubmenu] = useState(null);

  return createPortal(
    <div
      ref={menuRef}
      className="ui-box start-menu"
      style={{
        left: `${position.left}px`,
        bottom: `${position.bottom}px`,
      }}
    >
      <ul className="start-menu-list">
        <li className="start-menu-item">
          <button className="start-menu-button" onClick={openDashboard}>
            Dashboard
          </button>
        </li>

        <li
          className="start-menu-item start-menu-item--has-submenu"
          onMouseEnter={() => setActiveSubmenu("database")}
          onMouseLeave={() => setActiveSubmenu(null)}
        >
          <button
            className="start-menu-button start-menu-button--submenu"
            onClick={openAnimalDatabase}
          >
            <span>Database</span>
            <span className="submenu-arrow">▶</span>
          </button>

          {activeSubmenu === "database" && (
            <div className="start-submenu ui-box">
              <button
                className="start-menu-button"
                onClick={openAnimalDatabase}
              >
                View Database
              </button>
              <button
                className="start-menu-button"
                onClick={openRegisterAnimal}
              >
                Register Animal
              </button>
            </div>
          )}
        </li>

        <li className="start-menu-item">
          <button className="start-menu-button" onClick={openOrganizer}>
            Organizer
          </button>
        </li>

        <li className="start-menu-item">
          <button className="start-menu-button" onClick={openMoodTracker}>
            Mood Tracker
          </button>
        </li>

        <li className="start-menu-item">
          <button className="start-menu-button" onClick={openPawMail}>
            PawMail
          </button>
        </li>

        <li className="start-menu-item">
          <button className="start-menu-button" onClick={openMilestones}>
            Milestones
          </button>
        </li>

        <li className="start-menu-item">
          <button className="start-menu-button" onClick={openOtherProjects}>
            Other Projects
          </button>
        </li>
      </ul>
    </div>,
    document.body,
  );
}

export default StartMenu;
