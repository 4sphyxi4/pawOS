import { useEffect, useState } from "react";
import frame1 from "../../assets/assistant/cat-frame-1.png";
import frame2 from "../../assets/assistant/cat-frame-2.png";
import frame3 from "../../assets/assistant/cat-frame-3.png";
import frame4 from "../../assets/assistant/cat-frame-4.png";
import "../../styles/components/pet-assistant.css";

const FRAMES = [
  { src: frame1, offsetX: -45, offsetY: 25 },
  { src: frame2, offsetX: -35, offsetY: 25 },
  { src: frame3, offsetX: -35, offsetY: 25 },
  { src: frame4, offsetX: -35, offsetY: 25 },
];

const FRAME_DURATION = 250;

function PetAssistant() {
  const [frameIndex, setFrameIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setFrameIndex((prev) => (prev + 1) % FRAMES.length);
    }, FRAME_DURATION);

    return () => clearInterval(intervalId);
  }, []);

  const currentFrame = FRAMES[frameIndex];

  return (
    <div className="pet-assistant" aria-hidden="true">
      <div className="pet-assistant-stage">
        <img
          src={currentFrame.src}
          alt=""
          className="pet-assistant-image"
          draggable="false"
          style={{
            transform: `translateX(calc(-50% + ${currentFrame.offsetX}px)) translateY(${currentFrame.offsetY}px)`,
          }}
        />
      </div>
    </div>
  );
}

export default PetAssistant;
