import React from 'react'

import './Events.css'

const Events = () => {
  return (
    <div className='posts'>
      <h1>Check out our LATEST posts!</h1>
      <div className='posts-container'>
        <div className='row'>
          <div className='post'>
            <img src={'https://www.action4agriculture.com.au/wp-content/uploads/2021/08/YoungFarmingChampions.jpg'}/>
            <div>
              <h3>Young Farming Champions</h3>
              <button>Learn More</button>
            </div>
          </div>
          <div className='post'>
            <img src={'https://www.action4agriculture.com.au/wp-content/uploads/2022/05/yec-logo.png'}/>
            <div>
              <h3>Young Environmental Champions</h3>
              <button>Learn More</button>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='post'>
            <img src={'https://www.action4agriculture.com.au/wp-content/uploads/2021/08/ArchibullPrize2019.jpg'}/>
            <div>
              <h3>The Archibull Prize</h3>
              <button>Learn More</button>
            </div>
          </div>
          <div className='post'>
            <img src={'https://www.action4agriculture.com.au/wp-content/uploads/2021/08/KK-RaymondTce.jpg'}/>
            <div>
              <h3>Kreative Koalas</h3>
              <button>Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Events