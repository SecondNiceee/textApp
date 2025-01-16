import { TMedia } from '@/shared/model/TMusic';
import React, { FC } from 'react';
import MediaCard from './MediaCard';
import NoMediacomponent from './NoMediaComponent';

interface IMediaComponent{
    medias : TMedia[] ,
}
const MediaComponent:FC<IMediaComponent> = ({medias}) => {
    return (
    <>  
        {medias.length ? medias.map( (media, i) => <MediaCard key={i} music={media} /> ) :
        <NoMediacomponent />
        }
         
    </>
    );
};

export default MediaComponent;