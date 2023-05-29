import React from 'react'
import earth from '../assests/image-deep-earth.jpg'
import curisity from '../assests/image-curiosity.jpg'
import fisheye from '../assests/image-fisheye.jpg'
const  Creation = () => {

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
  ];

  return (
    <div class="m-12 grid grid-cols-2 divide-x">

        <div>
        <span className="   text-4xl">OUR CREATIONS </span>
        </div>
        
        
        <div className="  grid justify-items-end">
            <button class="outline outline-offset-2 outline-1 w-24  ...">Save All</button>
        </div>
    </div>
  )
}
export default Creation;