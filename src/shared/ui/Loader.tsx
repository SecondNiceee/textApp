import React from 'react';
import HashLoader from "react-spinners/HashLoader";
const Loader = () => {
    return (
        <div className='flex w-[100%] h-[300px] items-center justify-center'>
            <HashLoader  />
        </div>
    );
};

export default Loader;