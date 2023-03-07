import React, { useState } from 'react'
import moonImage  from '../starter-code/assets/destination/image-moon.png'
import marsImage  from '../starter-code/assets/destination/image-mars.png'
import europaImage  from '../starter-code/assets/destination/image-europa.png'
import titanImage  from '../starter-code/assets/destination/image-titan.png'

// data from data.js for iteration purpose
const data = require('../starter-code/data.json')

const Destination = () => {
  // usestate for the active, images, and links
  const [active, setActive] = useState(null);
  const [image, setImage] = useState(moonImage)
  const [planet, setPlanet] = useState(data.destinations[0])

  // function to handle the click on links
  function handleClick(e, index) {
    e.preventDefault();
    setPlanet(data.destinations[index]);
    setActive(index);

    // switching between images
    switch(data.destinations[index].name) {
        case 'Moon':
            setImage(moonImage);
            break;
        case 'Mars':
            setImage(marsImage);
            break;
        case 'Europa':
            setImage(europaImage);
            break;
        case 'Titan':
            setImage(titanImage);
            break;
        default:
            break;
    }
}

  return (
    <>
       <main className='destination__container container'>
        <h3><span>01</span> Pick your destination</h3>

        <div className="destination__wrapper">

          {/* for the images */}
          <div className='destination__img'>
            <img src={image} alt="planet" />
          </div>

          {/* for the contents on the page */}
          <div className="destination__content">

            {/* for the links */}
            <ul>
              {/* iteration */}
              {data.destinations.map(( planet, index) => {
                return <li
                 key={index} 
                 className={(active === index) ? `${'crew__link'} ${'active'}` : 'crew__link' }>
                  <button  
                  onClick={(e) => handleClick(e, index)}>
                    {planet.name}
                </button>
                </li>
              })}
            </ul>

            {/* the description of the planet */}
            <div className="destination__info">
              <div className="destination__desc">
                <h1>{planet.name}</h1>
                <p>{planet.description}</p>
              </div>

              {/* the stats */}
              <div className="destination__stats">
                <div>
                  <p>Avg. distance</p>
                  <h4>{planet.distance}</h4>
                </div>
                <div>
                  <p>Est. travel time</p>
                  <h4>{planet.travel}</h4>
                </div>
              </div>
            </div>

          </div>
        </div>
       </main>
    </>
  )
}

export default Destination