import React from 'react';

const HireMe = () => {
    return (
        <div className="fixed left-4 bottom-4 flex items-center justify-center">
            <div className="relative w-48 h-48 flex items-center justify-center">
                <a
                    href="mailto:njugunak.kevin@gmail.com"
                    className="flex items-center justify-center
                               bg-black text-white shadow-md w-20 h-20 rounded-full font-semibold
                               hover:bg-white hover:text-dark"
                    style={{
                        position: 'absolute',
                        left: '50%',
                        top: '50%',
                        transform: 'translate(-50%, -50%)',
                        zIndex: 10,
                    }}
                >
                    Hire Me
                </a>
            </div>
        </div>
    );
};

export default HireMe;


