import React from 'react'

export const ContainerFluid = ({ children }) => {
  return (
    <div className='w-full p-8'>{children}</div>
  )
}

export const ContainerPage = ({ children }) => {
    return(
        <div className='w-9/12 mx-auto'>{ children }</div>
    )
}
