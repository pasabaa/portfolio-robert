import React from 'react'
import { NavLink } from 'react-router-dom'

export const Navbar = () => {

    const links = [
        {
            name: 'Home',
            url: '/'
        },
        {
            name: 'About',
            url: '/about'
        },
        {
            name: 'Work',
            url: '/work'
        },
        {
            name: 'Services',
            url: '/services'
        },
        {
            name: 'Contact',
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
