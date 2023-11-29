import React from 'react'
import Head from 'next/head'
import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Link from 'next/link'
import Image from 'next/image'
import Project1 from "../../public/images/projects/kuku.jpg"
import Project2 from "../../public/images/projects/lukenya.jpg"
import Project3 from "../../public/images/projects/freekenya.jpg"
import Project4 from "../../public/images/projects/rentoline.jpg"
import HireMe from '@/components/HireMe'

const FeaturedProject = ({ type, title, summary, img, link }) => {

    return (

        <article
            className='w-full flex items-center justify-between relative
         rounded-br-2xl rounded-3xl border border-solid border-dark bg-light
         shadow-2xl p-12 dark:bg-dark dark:border-light
         lg:flex-col lg:p-8 xs:rounded-2xl xs:rounded-br-3xl xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2.5rem]
                            bg-primary rounded-br-3xl' />
            <Link href={link} target="_blank"
                className='w-1/2 cursor-pointer overflow-hidden
            rounded-lg lg:w-full'>
                <Image src={img} alt={title} className='w-full h-auto' />
            </Link>

            <div className='w-1/2 flex flex-col items-start
            justify-between pl-6 lg:w-full lg:pl-0 lg:pt-6'>
                <span className='text-primary font-medium text-xl'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline
                underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold dark:text-light sm:text-sm'>{title}</h2>
                </Link>
                <p className='my-2 font-medium text-dark dark:text-light'>{summary}</p>
                <div className='mt-2 flex items-center'>
                    <Link href={link} target='_blank' className='ml-4 rounded-lg
                    bg-dark text-light  p-2 px-6 text-g font-semibold dark:border-light'>Visit Site</Link>
                </div>
            </div>

        </article>
    )
}
const Project = ({ title, type, img, link }) => {
    return (
        <article className='w-full flex flex-col items-center justify-center
        rounded-2xl border border-solid border-dark bg-light p-6 relative dark:bg-dark dark:border-light xs:p-4'>
            <div className='absolute top-0 -right-3 -z-10 w-[101%] h-[103%] rounded-[2rem]
                            bg-black rounded-br-3xl dark:bg-light md:-right-2 md:w-[101%] xs:h-[102%] xs:rounded-[1.5rem]' />
            <Link href={link} target="_blank"
                className='w-full cursor-pointer overflow-hidden
            rounded-lg'>
                <Image src={img} alt={title} className='w-full h-auto' />
            </Link>

            <div className='w-full flex flex-col items-start
            justify-between pl-6'>
                <span className='text-primary font-medium text-xl dark:text-primaryDark lg:text-lg md:text-base'>{type}</span>
                <Link href={link} target="_blank" className='hover:underline
                underline-offset-2'>
                    <h2 className='my-2 w-full text-left text-4xl font-bold lg:text-2xl'>{title}</h2>
                </Link>

                <div className='mt-2 flex items-center'>
                    <Link
                        href={link}
                        target='_blank'
                        className='ml-4 rounded-lg
                    bg-dark text-light p-2 px-6 text-lg font-semibold dark:bg-light dark:text-dark'>Visit</Link>
                </div>
            </div>

        </article>
    )
}
const projects = () => {
    return (
        <>

            <Head>
                <title>Masha Designs | Projects Page</title>
                <meta name="description" content="portfolio" />
            </Head>
            <main className='w-full mb-16 flex flex-col items-center justify-center dark:text-light'>
                <Layout className='pt-16'>
                    <AnimatedText text="Journey Through My Software Creations"
                        className='mb-16 lg:!text-7xl sm:mb-8 sm:!text-6xl xs:!text-4xl' />
                    <div className='grid grid-cols-12 gap-24 gap-y-32 xl:gap-x-16 lg:gap-x-8 md:gap-y-24 sm:gap-x-0'>
                        <div className='col-span-12'>
                            <FeaturedProject
                                img={Project1}
                                title="Andrew's Kuku management system"
                                summary="This Laravel system is designed to efficiently manage poultry-related data.
                             It allows users to record and track egg-laying information, keep detailed records of expenses incurred, 
                             monitor sales transactions, and manage data related to the feeding of poultry."
                                link="https://kuku.freekenyasignatures.com/"
                                type="Featured Project"


                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                img={Project2}
                                title="The Lukenya Resort"

                                link="https://lukenyaresort.com/"
                                type="Hotel & Accomodation"


                            />
                        </div>
                        <div className='col-span-6 sm:col-span-12'>
                            <Project
                                img={Project4}
                                title="Rentoline Pest Control and Hygiene Services"

                                link="https://rentoline.co.ke/"
                                type="Cleaning Services"


                            />
                        </div>
                        <div className='col-span-12'>
                            <FeaturedProject
                                img={Project3}
                                title="FreeKenya Signature Collection Portal"
                                summary="FreeKenya, a seamlessly designed website created using Laravel PHP and HTML.
                                 It functions as a pivotal platform for citizens to digitally sign
                                  petitions against taxation on essential goods. 
                                  The site's core feature lies in facilitating a smooth 
                                  and user-friendly experience."
                                link="https://freekenyasignatures.com/"
                                type="Human Rights&Politics"


                            />
                        </div>

                    </div>
                </Layout>
                <HireMe />
            </main>
        </>
    )
}

export default projects
