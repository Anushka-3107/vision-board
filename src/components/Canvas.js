import React from "react";
import bg from "../images/bg4.jpg";
import dragImg from "../images/dragImg.jpeg";
import "../styles/canva.css";
import { useState } from "react";

const Canvas = () => {

    const[position,setPosition] = useState({ x:0, y:0});
    const[draggable,setDraggable] = useState(false);
    const[offset,setOffset] = useState({ x:0, y:0});

    const handleMouseDown = (e) => {
        setDraggable(true);
        setOffset({
            x:e.clientX- position.x,
            y:e.clientY- position.y
        });
    };

    const handleMouseMove = (e) => {
        if(draggable){
            setPosition({
                x:e.clientX- offset.x,
                y:e.clientY- offset.y
            });
        }
    }

    const handleMouseUp = () => {
        setDraggable(false);
    }

  return (
    <div className="canvas" onMouseMove={handleMouseMove} onMouseUp ={handleMouseUp}>
      <h1>Vision Board</h1>
      <div className="img">
        <img src={bg} alt="bg" />
      </div>

      {/* canvas image */}
      <div
       className="canvasImg"
       style={{
        position: "absolute",
        left:`${position.x}px`,
        top:`${position.y}px`,
        cursor:draggable ? 'grabbing':'grab',
       }}
       onMouseDown={handleMouseDown}
       >
        <img src={dragImg} alt="bg" draggable={false}/>
      </div>
    </div>
  );
};

export default Canvas;


