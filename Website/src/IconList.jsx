import React, { useState } from "react";
import * as icons from "kemet-icons-react";

const IconList = () => {
  const iconKeys = Object.keys(icons);

  const [svgCode, setSvgCode] = useState("");

  const handleDownload = (event, iconName) => {
    event.preventDefault();
    const Icon = icons[iconName];
    const svgElement = Icon({});
    const serializer = new XMLSerializer();
    const svgCode = serializer.serializeToString(svgElement);
    setSvgCode(svgCode);
  };

  return (
    <div>
      {iconKeys.map((iconKey) => {
        const Icon = icons[iconKey];
        return (
          <div key={iconKey}>
            <Icon />
            <button onClick={(event) => handleDownload(event, iconKey)}>
              Download SVG
            </button>
          </div>
        );
      })}
      {svgCode && (
        <div>
          <h2>SVG Code:</h2>
          <pre>{svgCode}</pre>
        </div>
      )}
    </div>
  );
};

export default IconList;
