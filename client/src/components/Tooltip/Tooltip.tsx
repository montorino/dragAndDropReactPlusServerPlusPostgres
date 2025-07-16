import { useState } from "react";
import "./Tooltip.css";

const Tooltip = ({ infoText, id}) => {
  const [showTooltip, setShowTooltip] = useState(false)
  return (
    <div className="tooltip-container" id={id}>
      <div className="tooltip">
        {infoText}
        <div className="arrow"></div>
      </div>
    </div>
  );
};

export default Tooltip;
