import React from 'react'
import { ContainerPage } from '../../layout'
import { HeroAbout } from '../../components'

export const AboutPage = () => {
  return (
    <ContainerPage>
      <HeroAbout/>
      <div className='mt-8 relative overflow-hidden rounded-xl border-b shadow border-zinc-700 grid gap-px bg-zinc-700 grid-cols-3'>

        <div className='p-8 group relative focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 bg-zinc-900'>
          <div className='mb-8'>
          <span class="bg-indigo-50 dark:bg-zinc-800 text-indigo-700 dark:text-indigo-300 inline-flex rounded-lg p-3 ring-4 ring-white dark:ring-zinc-900"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"></path></svg></span>
          </div>
          <h1 className='text-lg font-medium text-zinc-900 dark:text-white'>We make things easy, even when they're complex</h1>
          <p className='mt-2 text-sm text-zinc-500 dark:text-zinc-400'>Creative work can be as bumpy as it is rewarding, so we spent years crafting a lean, no-nonsense approach to our work and developing the right tools to make solving problems an enjoyable experience.</p>
        </div>

        <div className='p-8 group relative focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 bg-zinc-900'>
          <div className='mb-8'>
          <span class="bg-indigo-50 dark:bg-zinc-800 text-indigo-700 dark:text-indigo-300 inline-flex rounded-lg p-3 ring-4 ring-white dark:ring-zinc-900"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"></path></svg></span>
          </div>
          <h1 className='text-lg font-medium text-zinc-900 dark:text-white'>We look for the bright side in everything</h1>
          <p className='mt-2 text-sm text-zinc-500 dark:text-zinc-400'>Creative work can be as bumpy as it is rewarding, so we spent years crafting a lean, no-nonsense approach to our work and developing the right tools to make solving problems an enjoyable experience.</p>
        </div>

        <div className='p-8 group relative focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 bg-zinc-900'>
          <div className='mb-8'>
          <span class="bg-indigo-50 dark:bg-zinc-800 text-indigo-700 dark:text-indigo-300 inline-flex rounded-lg p-3 ring-4 ring-white dark:ring-zinc-900"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"></path></svg></span>
          </div>
          <h1 className='text-lg font-medium text-zinc-900 dark:text-white'>Born in Sydney, based everywhere</h1>
          <p className='mt-2 text-sm text-zinc-500 dark:text-zinc-400'>Creative work can be as bumpy as it is rewarding, so we spent years crafting a lean, no-nonsense approach to our work and developing the right tools to make solving problems an enjoyable experience.</p>
        </div>

        <div className='p-8 group relative focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 bg-zinc-900'>
          <div className='mb-8'>
          <span class="bg-indigo-50 dark:bg-zinc-800 text-indigo-700 dark:text-indigo-300 inline-flex rounded-lg p-3 ring-4 ring-white dark:ring-zinc-900"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"></path></svg></span>
          </div>
          <h1 className='text-lg font-medium text-zinc-900 dark:text-white'>Proof over promise</h1>
          <p className='mt-2 text-sm text-zinc-500 dark:text-zinc-400'>Creative work can be as bumpy as it is rewarding, so we spent years crafting a lean, no-nonsense approach to our work and developing the right tools to make solving problems an enjoyable experience.</p>
        </div>

        <div className='p-8 group relative focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 bg-zinc-900'>
          <div className='mb-8'>
          <span class="bg-indigo-50 dark:bg-zinc-800 text-indigo-700 dark:text-indigo-300 inline-flex rounded-lg p-3 ring-4 ring-white dark:ring-zinc-900"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"></path></svg></span>
          </div>
          <h1 className='text-lg font-medium text-zinc-900 dark:text-white'>Never settle for less</h1>
          <p className='mt-2 text-sm text-zinc-500 dark:text-zinc-400'>Creative work can be as bumpy as it is rewarding, so we spent years crafting a lean, no-nonsense approach to our work and developing the right tools to make solving problems an enjoyable experience.</p>
        </div>

        <div className='p-8 group relative focus-within:ring-2 focus-within:ring-inset focus-within:ring-indigo-500 bg-zinc-900'>
          <div className='mb-8'>
          <span class="bg-indigo-50 dark:bg-zinc-800 text-indigo-700 dark:text-indigo-300 inline-flex rounded-lg p-3 ring-4 ring-white dark:ring-zinc-900"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true" class="h-6 w-6"><path stroke-linecap="round" stroke-linejoin="round" d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"></path></svg></span>
          </div>
          <h1 className='text-lg font-medium text-zinc-900 dark:text-white'>Invest wholeheartedly</h1>
          <p className='mt-2 text-sm text-zinc-500 dark:text-zinc-400'>Creative work can be as bumpy as it is rewarding, so we spent years crafting a lean, no-nonsense approach to our work and developing the right tools to make solving problems an enjoyable experience.</p>
        </div>

      </div>
    </ContainerPage>
  )
}
