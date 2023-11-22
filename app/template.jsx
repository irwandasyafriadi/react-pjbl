'use client'; 

import useScrollProgress from '@/hooks/useScrollProgress';
import {motion} from 'framer-motion';

//varian
const variants = {
    hidden : {opacity:0},
    enter : {opacity:1},
};

const Template = ({children}) => {
    return (
        <>

            {children}
       
        {/* <span style={{transform: `translateY(${completion - 100}%)`}} 
        className='fixed z-50 bg-primary w-1 top-0 right-0
        bottom-0 transition-all duration-700'></span> */}
        {/* <div className='h-[1000px]'>

        </div> */}
        </>
    );
};

export default Template;