import React, { useState } from 'react'
import crew1 from '../starter-code/assets/crew/image-douglas-hurley.webp'
import crew2 from '../starter-code/assets/crew/image-douglas-hurley.webp'
import crew3 from '../starter-code/assets/crew/image-victor-glover.png'
import crew4 from '../starter-code/assets/crew/image-anousheh-ansari.webp'

const data = require('../starter-code/data.json')

const Crew = () => {

  const [active, setActive] = useState(null)
  const [image, setImage] = useState(crew1)
  const [crew, setCrew] = useState(data.crew[0])

  function handleClick(e, index) {
    e.preventDefault(e)
    setActive(data.crew[index]);
    setCrew(data.crew[index])

    switch(data.crew[index].name) {
      case 'crew1':
        setImage(crew1)
        break;
      case 'crew2':
        setImage(crew2)
        break;
      case 'crew3':
        setImage(crew3)
        break;
        case 'crew4':
          setImage(crew4)
          default:
            break;
    }
  }

  return (
    <>
      <main className='crew__container container'>
        <h3><span>01</span> Pick your destination</h3>
        <div className="crew__wrapper">

          <div className="crew__img">
            <img src={crew1} alt="avatar" />
          </div>

          <div className="destination__content">
            <div className="crew__links">
              {data.crew.map((index, crew) => {
                <button key={index} className={`list-item ${active === index && "active"}`} 
                  onClick={(e) => handleClick(e, index)}></button>
              })}
            </div>
          </div>

        </div>
      </main>
    </>
  )
}

export default Crew