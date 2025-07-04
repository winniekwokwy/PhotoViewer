import React from "react";
import "./PhotoViewer.css";

export function PhotoViewer(props) {
    return (
        <div className="photo-viewer-main">
            <img src={props.imgURL} />
        </div>
    );
}