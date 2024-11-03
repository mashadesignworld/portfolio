import React from 'react';
import { CircularText } from './icons';

const HireMe = () => {
    return (
        <div className='fixed left-4 bottom-4 flex items-center justify-center
        overflow-hidden md:right-8
        md:left-auto md:top-0 md:bottom-auto md:absolute'>
            <div className='w-48 h-auto flex items-center justify-center
            relative md:w-24'>
                <CircularText className={"fill-dark animate-spin-slow dark:fill-light"} />
                <a href="mailto:njugunak.kevin@gmail.com" className='flex items-center justify-center
                absolute left-1/2 top-1/2  -translate-x-1/2 -translate-y-1/2 bg-black
                text-white shadow-md border-solid border-dark w-20 h-20 rounded-full font-semibold
                hover:bg-white hover:text-dark
                                            
                
                dark:bg-light dark:text-dark
                hover:dark:bg-dark hover:dark:text-light
                hover:dark:border-light

                md:w-12 md:h-12 md:text-[10px]
                
                
                '>
                    Hire Me
                </a>
            </div>
        </div>
    )
}

export default HireMe;

