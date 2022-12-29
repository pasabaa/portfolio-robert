import React from 'react'
import { ContainerPage } from '../../layout'
import { HeroAbout, CardAbout } from '../../components'
import {Animation, Brand, Content, Design, Photo, Video} from '../../assets/icons'
import uuid from 'react-uuid'

export const AboutPage = () => {


  const services = [
    {
      icon: Animation,
      name: 'Edición de video',
      description: 'Robert puede editar cualquier tipo de video, desde videoclips hasta documentales o películas. Utiliza las últimas herramientas y técnicas para proporcionar resultados profesionales y atractivos.',
    },
    {
      icon: Brand,
      name: 'Diseño gráfico',
      description: 'Robert es un diseñador gráfico altamente cualificado y creativo. Puede crear todo tipo de materiales gráficos, desde logotipos y folletos hasta carteles y diseños para redes sociales.',
    },
    {
      icon: Content,
      name: 'Animación',
      description: 'Robert también puede ofrecer servicios de animación, tanto 2D como 3D. Si necesita añadir un toque dinámico y atractivo a sus proyectos, él puede ayudarle.',
    },
    {
      icon: Design,
      name: 'Fotografía y retoque fotográfico',
      description: 'Robert también tiene un ojo agudo para la fotografía y puede tomar fotos de alta calidad o retocar imágenes existentes para mejorar su aspecto.',
    },
    {
      icon: Photo,
      name: 'Publicidad',
      description: 'Si está buscando promocionar su negocio o producto, Robert puede ayudarle a crear anuncios de video atractivos y efectivos para redes sociales o televisión.',
    },
    {
      icon: Video,
      name: 'Creación de contenido',
      description: 'Si necesita contenido visual para su sitio web o redes sociales, Robert puede crear imágenes y videos de alta calidad que atraigan a su audiencia y promuevan su marca.',
    }
  ]

  return (
    <ContainerPage>
      <HeroAbout/>
      <div className='mt-8 relative overflow-hidden rounded-xl border-b shadow border-zinc-700 grid gap-px bg-zinc-700 grid-cols-3 sm:grid-cols-1'>

        {
          services.map(service => {
            return(
              <CardAbout icon={service.icon} key={uuid()} name={service.name} description={service.description} />
            )
          })
        }

      </div>
    </ContainerPage>
  )
}
