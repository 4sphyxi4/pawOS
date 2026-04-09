import Taskbar from "./Taskbar";

function Desktop() {
  return (
    <div className="desktop-page">
      <div className="desktop-workspace">
        <div className="desktop-inner"></div>
      </div>

      <Taskbar />
    </div>
  );
}

export default Desktop;
