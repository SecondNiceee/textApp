'use client'
import React, { ChangeEventHandler, useCallback,  useEffect,  useState } from 'react';
import { debounce } from 'lodash';
import { TServerStatus } from '@/shared/api/TServerStatus';
import Loader from '@/shared/ui/Loader';
import ServerError from '@/shared/ui/ServerError';
import MediaComponent from './MediaComponent';
import { TMedia } from '@/shared/model/TMusic';
import getMediaByTerm from '../api/getMediaByTerm';
import { TMediaType } from '../model/TMediaType';
import MediaTabComponent from './MediaTabComponent';

const Home = () => {

    const [medias, setMedias] = useState<TMedia[]>([])

    const [mediaFetchStatus, setMediaFetchStatus] = useState<TServerStatus>("fulfilled")

    const [inputValue , setInputValue] = useState<string>("")

    const [mediaType , setMediaType] = useState<TMediaType>("music")

    async function updateMusics(term : string, mediaType : TMediaType) {

        setMediaFetchStatus("pending")

        const medias = await getMediaByTerm(term, mediaType)


        if (medias){
            setMedias(medias)
        }
        else{
            setMediaFetchStatus("rejected")
        }

        setMediaFetchStatus("fulfilled")

    }   

    const debouncedUpdateMusics = useCallback(debounce((term: string, mediaType : TMediaType) => {
        updateMusics(term, mediaType);
      }, 300), [inputValue, mediaType]); // 300ms дебаунс


    const updateInputValue:ChangeEventHandler<HTMLInputElement> = (e) => {
        const inputValue = e.target.value
        setInputValue(inputValue)
    }

    useEffect( () => {
        if (inputValue.length){
            debouncedUpdateMusics(inputValue, mediaType)
        }

    } , [inputValue, mediaType] )
    

    return (
        <section className='min-h-[calc(100vh-154px)]'>
            <div className='container flex flex-col items-center gap-5 py-10 '>
                <h1 className='h1'>ICloud Music</h1>
                
                <input onChange={updateInputValue} value={inputValue} className='px-6 py-3 h3 w-[100%] border-solid border-black border-2 rounded-lg' placeholder='Start writing'  type="text" />

                <MediaTabComponent stateMediaType={mediaType} setMediaType={setMediaType} />

                <div className='flex flex-col w-[100%] gap-3'>
                    {mediaFetchStatus === "fulfilled" ? <MediaComponent medias={medias} /> :
                    mediaFetchStatus === "pending" ? <Loader /> : 
                    <ServerError />
                    }
                </div>
            </div>
        </section>
    );
};

export default Home;