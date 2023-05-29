import React from 'react'
import earth from '../assests/image-deep-earth.jpg'
import curisity from '../assests/image-curiosity.jpg'
import fisheye from '../assests/image-fisheye.jpg'
import above from '../assests/image-from-above.jpg'
import grid from '../assests/image-grid.jpg'
import hero from '../assests/image-night-arcade.jpg'
export const ImagePost = () => {
    const images = [
        {
          id: 1,
          url: earth,
          alt: 'Depp Earth',
          title: 'Deep Earth',
        },
        {
          id: 2,
          url: curisity,
          alt: 'Image 2',
          title: 'Image 2 Title',
        },
        {
          id: 3,
          url: fisheye,
          alt: 'Image 3',
          title: 'Image 3 Title',
        },

        {
            id: 4,
            url: above,
            alt: 'Above',
            title: 'above',
          },
          {
            id: 5,
            url: grid,
            alt: 'grid',
            title: 'Grid',
          },
          {
            id: 6,
            url: hero,
            alt: 'hero',
            title: 'Hero',
          },
      ];

  return (
    <div  className="flex flex-wrap">
         
      {images.map(image => (
        <div  key={image.id} className="w-1/4 p-2 sm-w-1">
          <img
            src={image.url}
            alt={image.alt}
            // style={{ width: '200px', height: '200px' }}
          />
          <p className='relative' >{image.title}</p>
        </div>
      ))}
    </div>
  )
}
