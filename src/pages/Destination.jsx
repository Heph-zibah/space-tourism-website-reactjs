import React, { useState } from 'react'
import moonImage  from '../starter-code/assets/destination/image-moon.png'
import marsImage  from '../starter-code/assets/destination/image-mars.png'
import europaImage  from '../starter-code/assets/destination/image-europa.png'
import titanImmage  from '../starter-code/assets/destination/image-titan.png'
const data = require('../starter-code/data.json')
const Destination = () => {
  const [active, setActive] = useState(null);
  const [image, setImage] = useState(moonImage)
  const [planet, setPlanet] = useState(data.destinations)
  return (
    <>
       <main className='destination__container container'>
        <h3><span>01</span> Pick your destination</h3>
        <div className="destination__wrapper">
          <img src={image} alt="planet" />
          <div className="destination__content">
            <ul>
              {data.destinations.map((link, planet, index) => {
                const {name} = link
                return <li key={index}>
                    {name}
                </li>
              })}
            </ul>
          </div>
        </div>
       </main>
    </>
  )
}

export default Destination