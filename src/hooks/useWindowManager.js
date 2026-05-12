// src/hooks/useWindowManager.js

import { useState } from "react";

function useWindowManager() {
  const [windows, setWindows] = useState([]);

  const openWindow = (windowDefinition) => {
    setWindows((prevWindows) => {
      const windowExists = prevWindows.some(
        (windowItem) => windowItem.id === windowDefinition.id,
      );

      if (windowExists) {
        return prevWindows.map((windowItem) => ({
          ...windowItem,
          isFocused: windowItem.id === windowDefinition.id,
          isMinimized:
            windowItem.id === windowDefinition.id
              ? false
              : windowItem.isMinimized,
        }));
      }

      return [
        ...prevWindows.map((windowItem) => ({
          ...windowItem,
          isFocused: false,
        })),

        {
          id: windowDefinition.id,
          title: windowDefinition.title,
          Component: windowDefinition.Component,
          isMinimized: false,
          isFocused: true,
        },
      ];
    });
  };

  const closeWindow = (id) => {
    setWindows((prevWindows) =>
      prevWindows.filter((windowItem) => windowItem.id !== id),
    );
  };

  const focusWindow = (id) => {
    setWindows((prevWindows) =>
      prevWindows.map((windowItem) => ({
        ...windowItem,
        isFocused: windowItem.id === id,
      })),
    );
  };

  const unfocusAllWindows = () => {
    setWindows((prevWindows) =>
      prevWindows.map((windowItem) => ({
        ...windowItem,
        isFocused: false,
      })),
    );
  };

  return {
    windows,
    openWindow,
    closeWindow,
    focusWindow,
    unfocusAllWindows,
  };
}

export default useWindowManager;
