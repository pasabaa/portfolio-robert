import React from 'react'
import {ContainerPage} from '../../layout'
import { HeroHome } from '../../components'
import { NavLink } from 'react-router-dom'

export const HomePage = () => {
  return (
    <ContainerPage>
        <HeroHome/>
        <div className='grid grid-cols-3 mt-8 gap-8'>
          <div className='col-span-2'>
            <iframe className='aspect-video rounded-lg' width="100%" src="https://www.youtube.com/embed/bEgpVTqWnqE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
          </div>
          <div className='relative overflow-hidden rounded-xl border-b shadow border-zinc-200 bg-white dark:border-zinc-700 dark:bg-zinc-900 h-full p-10'>
            <div className='flex h-full w-full flex-col items-center justify-center gap-8'>
              <p className='text-center text-xl text-zinc-600 dark:text-zinc-400'>Además de sus servicios de edición y diseño, Robert también puede proporcionar asesoramiento y consultoría a sus clientes para ayudarles a alcanzar sus objetivos visuales. Si no está seguro de por dónde empezar o cómo llevar a cabo un proyecto en particular, él puede ayudarle a definir una estrategia y plan de acción.</p>
              <NavLink className={'inline-flex no-underline items-center rounded-md border px-4 py-2 text-base font-medium shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 border-zinc-300 bg-white text-zinc-700 hover:bg-zinc-50 dark:border-zinc-700 dark:bg-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-700'}>Learn More</NavLink>
            </div>
          </div>
        </div>
    </ContainerPage>
  )
}
