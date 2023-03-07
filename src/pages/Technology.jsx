import React, { useState } from 'react'
import tech1Portrait from '../starter-code/assets/technology/image-launch-vehicle-portrait.jpg'
import tech1Landscape from '../starter-code/assets/technology/image-launch-vehicle-landscape.jpg'
import tech2Portrait from '../starter-code/assets/technology/image-spaceport-portrait.jpg'
import tech2Landscape from '../starter-code/assets/technology/image-spaceport-landscape.jpg'
import tech3Portrait from '../starter-code/assets/technology/image-space-capsule-portrait.jpg'
import tec3Landscape from '../starter-code/assets/technology/image-space-capsule-landscape.jpg'

const data = require('../starter-code/data.json')

const Technology = () => {
  const [active, setActive] = useState(null);
  const [images, setImages] = useState([tech1Portrait, tech1Landscape])
  const [tech, setTech] = useState(data.technology[0])

  function handleClick(e, index) {
    e.preventDefault()
    setTech(data.technology[index])
    setActive(index)

    switch(data.technology[index].name) {
      case 'Launch Vehicle':
        setImages([tech1Portrait, tech1Landscape])
        break;
      case 'Space Port':
        setImages([tech2Portrait, tech2Landscape])
        break;
      case 'Space Capsule':
        setImages([tech3Portrait, tec3Landscape])
      
      default:
        break;
    }
  }

  return (
    <>
      <div className="tech__container container">
        <h3><span>03</span> space launch 101</h3>
        <div className="tech__wrapper">
          <div className="tech__img">
            <picture>
              <source srcSet={images[1]} media="(max-width: 901px)"/>
              <img src={images[0]} alt="space technology" />
            </picture>
          </div>
          <div className="tech__content">
            <div className="tech__links">
              {data.technology.map((tech, index) => {
                return <button 
                key={index}
                className={(active === index) ? `${'tech__link'} ${'active'}` : 'tech__link' }
                onClick={(e) => handleClick(e, index)}>
                  {index+1}
                  </button>
              })}
            </div>
            <div className="tech__info">
              <h6>the terminology...</h6>
              <h1>{tech.name}</h1>
              <p>{tech.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Technology