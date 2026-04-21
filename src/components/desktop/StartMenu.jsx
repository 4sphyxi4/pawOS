import { createPortal } from "react-dom";

function StartMenu({ position, menuRef, openAnimalCatalogue }) {
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
          <button onClick={openAnimalCatalogue}>Animal Catalogue</button>
        </li>
        <li className="start-menu-item">Register Animal</li>
        <li className="start-menu-item">Other Projects</li>
      </ul>
    </div>,
    document.body,
  );
}

export default StartMenu;
