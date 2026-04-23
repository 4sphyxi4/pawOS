import petImage from "../../assets/assistant/placeholder-assistant.png";
import "../../styles/components/pet-assistant.css";

function PetAssistant() {
  return (
    <div className="pet-assistant" aria-hidden="true">
      <img src={petImage} alt="" className="pet-assistant-image" />
    </div>
  );
}

export default PetAssistant;
