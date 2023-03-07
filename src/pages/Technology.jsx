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
  const [images, setImages] = useState([tech1Landscape, tech1Portrait])
  const [tech, setTech] = useState(data.technology[0])

  function handleClick(e, index) {
    e.preventDefault()
    setTech(data.technology[index])
    setActive(index)

    switch(data.technology[index].name) {
      case 'tech1':
        setImages([tech1Landscape, tech1Portrait])
        break;
      case 'tech2':
        setImages([tech2Landscape, tech2Portrait])
        break;
      case 'tech3':
        setImages([tec3Landscape, tech3Portrait])
      
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
              <source srcSet={images[0]} media="(max-width: 901px)"/>
              <img src={images[1]} alt="space technology" />
            </picture>
          </div>
          <div className="tech__content">
            <div className="tech__links">
              {data.technology.map((tech, index) => {
                return <button key={index} className={`crew__link ${active === index && 'active'}`} onClick={(e) => `${handleClick(e, index), setActive={tech}}`}>{index+1}</button>
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