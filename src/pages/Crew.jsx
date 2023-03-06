import React, { useState } from 'react'
import crew1 from '../starter-code/assets/crew/image-douglas-hurley.webp'
import crew2 from '../starter-code/assets/crew/image-mark-shuttleworth.webp'
import crew3 from '../starter-code/assets/crew/image-victor-glover.webp'
import crew4 from '../starter-code/assets/crew/image-anousheh-ansari.webp'

const data = require('../starter-code/data.json')

const Crew = () => {

  const [active, setActive] = useState(null)
  const [image, setImage] = useState(crew1)
  const [isCrew, setIsCrew] = useState(data.crew[0])

  function handleClick(e, index) {
    e.preventDefault()
    setIsCrew(data.crew[index])
    setActive(index);
    

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

          <div className="crew__img">
            <img src={image} alt="avatar" />
          </div>

          <div className="crew__content">
            <div className="crew__links">
              {data.crew.map( (isCrew, index) => {
                return <button key={index} className={`crew__link ${active === index && "active"}`} 
                  onClick={(e) => handleClick(e, index)}></button>
              })}
            </div>

            <div className="crew__info">
              <div className="crew__desc">
                <h6>{isCrew.role}</h6>
                <h2>{isCrew.name}</h2>
                <p>{isCrew.bio}</p>
              </div>
            </div>
          </div>

        </div>
      </main>
    </>
  )
}

export default Crew