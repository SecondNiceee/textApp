
import { TMedia } from '@/shared/model/TMusic';
import formatDate from '@/shared/utils/formateDate';
import React, { FC } from 'react';

interface IMediaCard{
    music : TMedia
}
const MediaCard:FC<IMediaCard> = ({music}) => {
    return (
        <div className='flex flex-col gap-4 p-8 white-shadow rounded-sm w-[100%] items-center'>
            <h3 className='h3 text-center'>{music.trackName}</h3>
            <h4 className='h4 text-center'>{music.artistName}</h4>
            <div className='flex w-[100%] md:gap-20 sm:gap-10 gap-5 sm:flex-row flex-col  items-center justify-center'>

                <div className='flex flex-col'>

                    <div className='flex gap-2 items-center justify-center'>
                        <p className='p md:text-left text-center'>ArtistUrl : </p>
                        <a target='_blank' rel='noopener noreferrer' href={music.artistViewUrl} className='p text-blue-400 underline'>Link to Artist</a>
                    </div>
                    <div className='flex gap-2 md:items-center justify-center'>
                        <p className='p md:text-left text-center'>CoolectionPrice : </p>
                        <p className=''>{music.collectionPrice + ' ' + music.currency}</p>
                    </div>
                    <div className='flex gap-2 items-center justify-center'>
                        <p className='p md:text-left text-center'>Release : </p>
                        <p className=''>{formatDate(music.releaseDate)}</p>
                    </div>
                    <div className='flex gap-2 items-center justify-center'>
                        <p className='p md:text-left text-center'>TrackTime : </p>
                        <p className=''>{music.trackTimeMillis}</p>
                    </div>

                </div>


                <div className='flex flex-col items-center'>

                    <div className='flex gap-2 items-center justify-center'>
                        <p className='p md:text-left text-center '>TrackUrl: </p>
                        <a target='_blank' rel='noopener noreferrer' href={music.trackViewUrl} className='p text-blue-400 underline'>Link to track</a>
                    </div>
                    <div className='flex gap-2 items-center justify-center'>
                        <p className='p md:text-left text-center'>TrackCount : </p>
                        <p>{music.trackCount}</p>
                    </div>
                    <div className='flex gap-2 items-center justify-center'>
                        <p className='p md:text-left text-center'>TrackId</p>
                        <p className=''>{music.trackId}</p>
                    </div>
                    <div className='flex gap-2 items-center justify-center'>
                        <p className='p md:text-left text-center'>TrackPrice</p>
                        <p className=''>{music.trackPrice}</p>
                    </div>


                </div>

            </div>
        </div>
    );
};

export default React.memo(MediaCard);