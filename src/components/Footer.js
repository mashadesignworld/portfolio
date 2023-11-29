import React from 'react';
import Layout from './Layout';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer
            className='w-full border-t-2 border-solid border-black  dark:border-light
        font-medium text-lg text-black dark:text-light sm:text-base'>
            <Layout className='py-8 flex items-center justify-between lg:flex-col lg:py-6'>
                <span>{new Date().getFullYear()} &copy; All Rights Reserved.</span>
                <div className='flex items-center lg:py-2'>
                    Built with <span className='text-primary dark:text-primaryDark text-2x1 px-1'>&#9825;
                    </span>
                    by&nbsp;<Link href="/" className='underline underline-offset-2'>MashaDesigns</Link>
                </div>
                <Link href="mailto:njugunak.kevin@gmail.com">Contact Me</Link>
            </Layout>
        </footer>
    );
}

export default Footer;
