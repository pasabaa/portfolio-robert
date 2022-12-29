import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {

    const links = [
        {
            name: 'Inicio',
            url: '/'
        },
        {
            name: 'Sobre mí',
            url: '/about'
        },
        {
            name: 'Trabajo',
            url: '/work'
        },
        {
            name: 'Servicios',
            url: '/services'
        },
        {
            name: 'Contacto',
            url: '/contact'
        }
    ]

  return (
    <div className='flex items-center justify-center'>
        <div className='flex gap-6 border border-gray-600 rounded-full px-6 text-sm font-bold'>
            {
                links.map(link => {
                    return(
                        <NavLink className={({isActive}) => (isActive ? 'py-2 text-indigo-500 transition' : 'py-2')} to={link.url}>{link.name}</NavLink>
                    )
                })
            }
        </div>
    </div>
  )
}
