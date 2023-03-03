import React from 'react'

const Home = () => {
  return (
    <>
      <main className='home__container'>
        <div className='home__wrapper'>
          <div className='home-info'>
            <h3>So, you want to travel to</h3>
            <h1> Space</h1>
            <p>Let’s face it; if you want to go to space, you might as well genuinely go to 
            outer space and not hover kind of on the edge of it. Well sit back, and relax 
            because we’ll give you a truly out of this world experience!</p>
          </div>
          <div className='home__btn'>
            <button>Explore</button>
          </div>
        </div>
      </main>
    </>
  )
}

export default Home