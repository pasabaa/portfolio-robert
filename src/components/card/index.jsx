import React from 'react'
import { Link } from 'react-router-dom'

export const CardAbout = ({name, description, icon}) => {
    return (
        <div className='p-8 group relative focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 bg-zinc-900'>
            <div className='mb-8'>
                <span class="bg-indigo-50 dark:bg-zinc-800 text-indigo-700 dark:text-indigo-300 inline-flex rounded-lg p-3 ring-4 ring-white dark:ring-zinc-900">
                    <img src={icon} alt={name} />
                </span>
            </div>
            <h1 className='text-lg font-medium text-zinc-900 dark:text-white'>{name}</h1>
            <p className='mt-2 text-sm text-zinc-500 dark:text-zinc-400'>{description}</p>
        </div>
    )
}


export const CardWork = ({name, url, icon, category, price}) => {
    return(
        <div className='p-8 bg-zinc-900 rounded-lg flex flex-col gap-16'>
            <div>
                <span class="bg-indigo-50 text-indigo-700 dark:text-indigo-300 inline-flex rounded-full p-3 ring-4 ring-white dark:ring-zinc-900">
                    <img src={icon} alt={name} />
                </span>
            </div>
            <div className='flex flex-col gap-6'>
                <h1 className='text-2xl font-medium text-zinc-900 dark:text-white'>{name}</h1>
                <Link to={url} className='max-w-max items-center rounded-md border px-4 py-2 text-base font-medium shadow-sm focus:outline-none border-zinc-300 bg-white text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700'>Visit the website</Link>
            </div>
            <div className='flex gap-2'>
                <span className="inline-flex items-center truncate rounded-full px-3 py-0.5 text-sm font-medium bg-blue-100 text-blue-800 dark:bg-transparent dark:text-blue-400 dark:ring-1 dark:ring-blue-400">{category}</span>
                <span class="inline-flex items-center truncate rounded-full px-3 py-0.5 text-sm font-medium bg-emerald-100 text-emerald-800 dark:bg-transparent dark:text-emerald-400 dark:ring-1 dark:ring-emerald-400">{price}</span>
            </div>
        </div>
    )
}

export const CardHover = ({example, name, description, img, url, category}) => {
    return(
        <>
            <div className='bg-zinc-900 rounded-lg flex flex-col gap-16 relative h-[24rem] overflow-hidden card-hover'>
                <div className='relative h-full'>
                    <img className='object-cover h-full' src={img} alt={name} />
                </div>
                <div className='flex flex-col justify-start absolute bottom-0 w-full p-8 bg-gradient-to-t from-black to-black/[0.005]'>
                    
                        <h1 className='text-lg font-medium text-zinc-900 dark:text-white'>{example}</h1>
                        <p>{category}</p>
                        <a target={'_blank'} rel={'noopener noreferrer nofollow'} href={url} className='max-w-max items-center rounded-md border px-3 py-2 text-sm font-medium shadow-sm mt-4'>Visitar canal</a>
                    
                </div>
            </div>

            <div className='col-span-2 h-full flex flex-col justify-between'>
                <div>
                <h1 className='text-5xl mt-8 font-bold max-w-md'>{name}</h1>
                <p className='text-zinc-400 mt-4 max-w-sm'>{description}</p>
                </div>
                <hr className='max-w-md border-zinc-700 sm:mt-4' />
            </div>
        </>
    )
}