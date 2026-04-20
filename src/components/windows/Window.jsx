function Window({ title, onClose, children }) {
  return (
    <div className="window">
      <div className="window-header">
        <div className="window-title">{title}</div>
        <div className="window-controls">
          <button
            className="window-btn minimize-btn"
            aria-label="Minimize window"
          >
            <span>&nbsp;</span>
          </button>
          <button
            className="window-btn maximize-btn"
            aria-label="Maximize window"
          >
            <span>&nbsp;</span>
          </button>
          <button
            className="window-btn close-btn"
            onClick={onClose}
            aria-label="Close window"
          >
            <span>&nbsp;</span>
          </button>
        </div>
      </div>

      <div className="window-content">{children}</div>
    </div>
  );
}

export default Window;
