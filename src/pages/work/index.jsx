import React from 'react'
import { CardHover } from '../../components/card'
import { ContainerPage } from '../../layout'
import Artunizor from '../../assets/thumbnail/artunizor1.jpg'
import Montse from '../../assets/thumbnail/montse1.jpg'
import uuid from 'react-uuid'

export const WorkPage = () => {

  const works = [
    {
      name: 'Canal Arturnizor',
      description: 'Los canales de entretenimiento suelen enfocarse en proporcionar a sus espectadores una experiencia divertida y entretenida, y pueden incluir una amplia gama de géneros, como música, comedia, videojuegos, cine y televisión, noticias y eventos actuales, y mucho más. ',
      example: 'Canal Arturnizor',
      url: 'https://www.youtube.com/@arturnizor',
      img: Artunizor,
      category: 'Edición',
      price: '$50'
    },
    {
      name: 'Canal Montse Quiñones',
      description: ' En general, el proceso de diseño de interiores incluye la planificación del espacio, la selección de muebles y materiales, y la ejecución del diseño final. Los diseñadores de interiores suelen tener una formación en diseño de interiores, arquitectura o arte, y pueden tener una amplia gama de habilidades técnicas y creativas para ayudar a los clientes a crear espacios atractivos y funcionales. ',
      example: 'Canal Montse Quiñones',
      url: 'https://www.youtube.com/@montsequinones3187',
      img: Montse,
      category: 'Edición',
      price: '$50'
    },
  ]

  return (
      <ContainerPage>
          <div className='mt-8 grid grid-cols-3 gap-8 sm:grid-cols-1'>

              

              {
                works.map(work => {

                  return(
                    <CardHover 
                      img={work.img} 
                      key={uuid()} 
                      example={work.example} 
                      name={work.name}
                      description={work.description} 
                      url={work.url}
                      category={work.category} 
                      price={work.price} 
                    />
                  )

                })
              }

              

              

          </div>
      </ContainerPage>
  )
}
