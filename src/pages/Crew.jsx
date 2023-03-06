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
  }

  return (
    <>
      <main className='crew__container container'>
        <h3><span>01</span> Pick your destination</h3>
        <div className="crew__wrapper">

          <div className="crew__img">
            <img src={crew1} alt="avatar" />
          </div>

        </div>
      </main>
    </>
  )
}

export default Crew