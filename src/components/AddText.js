import React, { useState } from "react";
import "../styles/addText.css";

const AddText = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [draggable, setDraggable] = useState(false);
  const [offset, setOffset] = useState({ x: 0, y: 0 });

  const handleMouseDown = (e) => {
    setDraggable(true);
    setOffset({
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    });
  };

  const handleMouseUp = () => {
    setDraggable(false);
  };

  const handleMouseMove = (e) => {
    if (draggable) {
      setPosition({
        x: e.clientX - offset.x,
        y: e.clientY - offset.y,
      });
    }
  };

  return (
    <div
      className="textContainer"
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <div
        className="text"
        style={{
          position: "absolute",
          left: `${position.x}px`,
          top: `${position.y}px`,
          cursor: draggable ? "grabbing" : "grab",
        }}
        onMouseDown={handleMouseDown}
      >
        <h1 class="strokeme">Add Text</h1>
        <input 
            type="text"
            draggable={false}
        />
      </div>
    </div>
  );
};

export default AddText;
