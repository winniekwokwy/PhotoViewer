import React from "react";
import { useState } from "react";
import "./ImageSelector.css";


// setSelectedImage={setSelectedImage}

export function ImageSelector(props: any) {    
    const imageURLS = props.imageURLsArray;
    const selectedImage = props.selectedImage;

    function handleClick(url: string) {
        props.setSelectedImage(url);
    }


    return (                
        <div id="photo-grid">
            {imageURLS.map((url: string, index: number) => <img key={index} className={url === selectedImage ? "highlightImage" : "notSelected"} src={url} onClick={() => {handleClick(url)}}/>)}
        </div>
    );
}

export const brokenImages = [
    1, 24, 32, 36, 44, 47
];

function getImageUrls() {
    const urls = [];

    for (let i = 0; i < 50; i++) {
        if (!brokenImages.includes(i)) {
            const imageNumberString = i.toString().padStart(2, '0');
            urls.push(`https://picsum.photos/id/6${imageNumberString}/1600/900.jpg`)
        }
    }

    return urls;
}

export const imageUrls = getImageUrls();