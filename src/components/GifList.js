import React from "react";


function GifList({dataFetch}) {

    const returnedImages = dataFetch && dataFetch.map((data, index)=>(
        <li key={index}>
            <img src={data.image.original.url} alt="Gif"/>
             </li>
    ))
  return (
   <ul>
    {returnedImages}
   </ul>
  )
}

export default GifList