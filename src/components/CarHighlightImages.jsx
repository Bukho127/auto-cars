import React from 'react'

import img1 from '../assets/images/Model-3-Standard-Audio-Desktop.avif'
import img2 from '../assets/images/Model-3-Standard-Control-Desktop.avif'
import img3 from '../assets/images/Model-3-Standard-Safety-Desktop.avif'
import img4 from '../assets/images/Model-Y-Standard-FSD-Carousel-Slide-1-Desktop.avif'

function CarHighlightImages() {
  const images = [
    { id: 1, src: img1 },
    { id: 2, src: img2 },
    { id: 3, src: img3 },
    { id: 4, src: img4 },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 absolute bottom-10 w-full px-4">
      {images.map((image) => (
        <img key={image.id} src={image.src} alt={`Car Highlight ${image.id}`} className="w-full h-30 object-cover rounded-md" />
      ))}
    </div>
  )
}

export default CarHighlightImages