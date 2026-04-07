import Taskbar from "./Taskbar";

function Desktop() {
  return (
    <div className="desktop-page">
      <div className="desktop-workspace">
        <div className="desktop-inner">
          <h1>pawOS 95</h1>
          <p>Shelter manager desktop</p>
        </div>
      </div>

      <Taskbar />
    </div>
  );
}

export default Desktop;
