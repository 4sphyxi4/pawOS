function Taskbar() {
  return (
    <footer className="taskbar">
      <div className="taskbar-left">
        <button type="button" className="pawos-btn">
          <img
            src="/assets/icons/paw-icon.gif"
            alt="pawOS Start Menu"
            className="pawos-logo"
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
          <span>12:45</span>
          <span>07/04/2026</span>
        </div>
      </div>
    </footer>
  );
}

export default Taskbar;
