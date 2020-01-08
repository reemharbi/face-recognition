import React from "react";

export default function Rank( imageUrl) {
  console.log(imageUrl)
  return (
    <div>
      <div className="white f3">{"Reem, your current rank is...."}</div>
      <div className="white f1">{"#3"}</div>
  <div className='white f4'>{`The image link is:`}</div>
<div className='white f5'>{`${imageUrl.imageUrl}`}</div>
    </div>
  );
}
