import React from 'react'
import { Link } from 'react-router-dom'

export const HeroHome = () => {
  return (
    <div className='mt-8'>
      <div className='w-full flex justify-center items-center h-[50rem] rounded-lg bg-gradient-to-tr from-violet-500 to-orange-300'>
        <div className='relative mx-auto max-w-3xl'>
          <h1 className='text-6xl font-bold tracking-tight text-center text-white sm:text-4xl'>La solución perfecta para todas tus necesidades de edición y diseño gráfico</h1>
          <p className='mx-auto mt-6 max-w-md text-lg leading-8 text-white/70 my-8'>Ofrezco una amplia variedad de servicios para ayudar a sus clientes a alcanzar sus objetivos visuales. Desde Edición de video hasta Asesoramiento y consultoría.</p>
          <div className='flex sm:flex-col items-center justify-center gap-4'>
            <Link to={'/work'} className='transition inline-flex gap-2 rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-white shadow-sm ring-1 ring-white hover:ring-white/70'>Ve mi trabajo</Link>
            <Link to={'/about'} className='transition inline-flex gap-2 rounded-lg px-4 py-1.5 text-base font-semibold leading-7 text-white ring-1 ring-white/10 hover:ring-white/20'>Sobre mí</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export const HeroAbout = () => {
  return (
    <div className='mt-8 relative'>
      <div className='w-full flex items-center h-[26rem] relative rounded-lg bg-gradient-to-r from-fuchsia-500 via-red-600 to-orange-400'/>
      <div className='p-8 absolute inset-0 backdrop-blur-xl rounded-lg z-10 h-full flex flex-col justify-center bg-transparent'>
          <h1 className='text-6xl font-bold tracking-tight text-white sm:text-4xl'>¡Gusto en conocerte!</h1>
          <p className='mt-6 max-w-2xl text-lg leading-8 text-white/70 my-8 font-semibold'>¡Hola a todos! Le daré el toque final perfecto para tus creaciones visuales.</p>
        </div>
    </div>
  )
}