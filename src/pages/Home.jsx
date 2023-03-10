import React from 'react'
import { Link } from 'react-router-dom'
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <>
      <main className='home__container container'>
        <div className='home__wrapper'>
          <div className='home__info'>
            <h3>So, you want to travel to</h3>
            <h1> 
              <Typewriter
                onInit={(typewriter)=> {
                typewriter
                .typeString("space") 
                .pauseFor(1000)
                .start();
                }}
                />
            </h1>
            <p>Let’s face it; if you want to go to space, you might as well genuinely go to 
              outer space and not hover kind of on the edge of it. Well sit back, and relax 
              because we’ll give you a truly out of this world experience!
            </p>
          </div>
          
          {/* explore button */}
          <div className='home__btn--div'>
            <Link className='home__btn' to='/destination'>explore</Link>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home