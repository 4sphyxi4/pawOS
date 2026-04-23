import { useState } from "react";

function useWindowManager() {
  const [windows, setWindows] = useState([]);

  const openWindow = (id, title) => {
    setWindows((prevWindows) => {
      const windowExists = prevWindows.some(
        (windowItem) => windowItem.id === id,
      );
      if (windowExists) {
        return prevWindows;
      }
      return [
        ...prevWindows.map((windowItem) => ({
          ...windowItem,
          isFocused: false,
        })),
        { id, title, isMinimized: false, isFocused: true },
      ];
    });
  };

  const closeWindow = (id) => {
    setWindows((prevWindows) => {
      return prevWindows.filter((windowItem) => windowItem.id !== id);
    });
  };

  const focusWindow = (id) => {
    setWindows((prevWindows) => {
      return prevWindows.map((windowItem) => ({
        ...windowItem,
        isFocused: windowItem.id === id,
      }));
    });
  };

  const unfocusAllWindows = () => {
    setWindows((prevWindows) => {
      return prevWindows.map((windowItem) => ({
        ...windowItem,
        isFocused: false,
      }));
    });
  };

  return { windows, openWindow, closeWindow, focusWindow, unfocusAllWindows };
}

export default useWindowManager;
