import React from 'react';
import './FaceRecognition.css';
const FaceRecognition = ({ imageUrl, boxes }) => {
  const boundingBox = boxes.map((box) => {
    console.log(box);
    return (
      <div
        className='bounding-box'
        style={{
          top: box.topRow,
          right: box.rightCol,
          bottom: box.bottomRow,
          left: box.leftCol
        }}
      ></div>
    );
  });

  return (
    <div className='center ma'>
      <div className='absolute mt2'>
        <img
          id='inputimage'
          alt='Face Detection'
          src={imageUrl}
          width='600px'
          height='auto'
        />
        {boundingBox}
      </div>
    </div>
  );
};

export default FaceRecognition;
