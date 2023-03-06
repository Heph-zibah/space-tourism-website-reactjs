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
  const [image, setImage] = useState([tech1Landscape, tech1Portrait])
  const [tech, setTech] = useState(data.technology[0])

  function handleClick(e, index) {
    e.preventDefault()
    setTech(data.technology[index])
    setActive(index)

    switch(data.technology[index].name) {
      case 'tech1':
        setImage([tech1Landscape, tech1Portrait])
        break;
      case 'tech2':
        setImage([tech2Landscape, tech2Portrait])
        break;
      case 'tech3':
        setImage([tec3Landscape, tech3Portrait])
      
      default:
        break;
    }
  }

  return (
    <>
      <div className="tech__container container">
        <div className="tect__wrapper">
          <div className="tech__img">

          </div>
          <div className="tect__content">
            <div className="tech__links">
              
            </div>
            <div className="tech__info">
              <h6></h6>
              <h1></h1>
              <p></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Technology