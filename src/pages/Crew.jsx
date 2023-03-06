import React, { useState } from 'react'
import crew1 from '../starter-code/assets/crew/image-douglas-hurley.webp'
import crew2 from '../starter-code/assets/crew/image-mark-shuttleworth.webp'
import crew3 from '../starter-code/assets/crew/image-victor-glover.webp'
import crew4 from '../starter-code/assets/crew/image-anousheh-ansari.webp'

const data = require('../starter-code/data.json')

const Crew = () => {
  // state for active, immages, and crew
  const [active, setActive] = useState(null)
  const [image, setImage] = useState(crew1)
  const [isCrew, setIsCrew] = useState(data.crew[0])

  // function to handle the button click
  function handleClick(e, index) {
    e.preventDefault()
    setIsCrew(data.crew[index])
    setActive(index);
    
    // switch case for the images
    switch(index) {
      case 0:
        setImage(crew1)
        break;
      case 1:
        setImage(crew2)
        break;
      case 2:
        setImage(crew3)
        break;
        case 3:
          setImage(crew4)

          default:
            break;
    }
  }

  return (
    <>
      <main className='crew__container container'>
        <h3><span>02</span> Meet your crew</h3>
        <div className="crew__wrapper">

          {/* for the images */}
          <div className="crew__img">
            <img src={image} alt="avatar" />
          </div>

          {/* the crew ccontent */}
          <div className="crew__content">
            {/* clickable buttons: mobile*/}
            <div className="crew__links mobile">
              {data.crew.map( (isCrew, index) => {
                return <button key={index} className={`crew__link ${active === index && "active"}`} 
                  onClick={(e) => handleClick(e, index)}></button>
              })}
            </div>

              {/* crew description */}
              <div className="crew__desc">
                <h6>{isCrew.role}</h6>
                <h2>{isCrew.name}</h2>
                <p>{isCrew.bio}</p>
                
                {/* clickable description:desktop */}
                <div className="crew__links desktop">
              {data.crew.map( (isCrew, index) => {
                return <button key={index} className={`crew__link ${active === index && "active"}`} 
                  onClick={(e) => handleClick(e, index)}></button>
              })}
            </div>
              </div>
          </div>

        </div>
      </main>
    </>
  )
}

export default Crew