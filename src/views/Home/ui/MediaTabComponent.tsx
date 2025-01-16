import React, { FC, SetStateAction } from "react";
import { TMediaType } from "../model/TMediaType";
import { mediaTypes } from "../config/mediaTypes.config";

interface IMediaTabComponent {
    setMediaType : React.Dispatch<SetStateAction<TMediaType>>,
    stateMediaType : TMediaType
}
const MediaTabComponent:FC<IMediaTabComponent> = ({setMediaType, stateMediaType}) => {
  
  const mediaTypeChanger = (mediaType : TMediaType) => () => {
    setMediaType(mediaType)
  }
  return (
    <div className="grid grid-cols-3 w-[100%]">

      {mediaTypes.map( (mediaType, index ) => {
        return (

            <div key={index} onClick={mediaTypeChanger(mediaType)}  className={`${stateMediaType === mediaType ? 'bg-black' : "bg-white"} w-[100%] py-5 flex justify-center botder-solid border-2 transition-colors border-black rounded-md cursor-pointer`}>
              <p className={`h2 ${stateMediaType === mediaType ? 'text-white' : "text-black"}`}>{mediaType}</p>
            </div>
        )
      } )}

    </div>
  );
};

export default React.memo(MediaTabComponent);
