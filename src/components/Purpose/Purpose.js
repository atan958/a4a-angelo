import React from 'react'
import './Purpose.css'

const Purpose = () => {
  return (
    <div className='purpose'>
        <h1>How we help</h1>
        <div className='container'>
            <div className='row'>
                <div className='entry left'>
                    <img src='https://www.action4agriculture.com.au/wp-content/uploads/2021/09/Goal1.png'/>
                    <p>
                        We create opportunities for young people to learn the skills needed to be adaptable and resilient in complex and changing times. 
                    </p>
                </div>
                <div className='entry right'>
                    <img src='https://www.action4agriculture.com.au/wp-content/uploads/2021/09/Goal2.png'/>
                    <p>
                        We transform young people to be empowered advocates and changemakers making a difference to Australian agriculture and how it is perceived by the wider community. 
                    </p>
                </div>
            </div>
            <div className='row'>
                <div className='entry left'>
                    <img src='https://www.action4agriculture.com.au/wp-content/uploads/2021/09/Goal3.png'/>
                    <p>
                        We amplify the youth voices of agriculture through our in-school programs: The Archibull Prize and Kreative Koalas. 
                    </p>
                </div>
                <div className='entry right'>
                    <img src='https://www.action4agriculture.com.au/wp-content/uploads/2021/09/Goal4.png'/>
                    <p>
                        We showcase the diversity of careers and career pathway opportunities in the agricultural sector.
                    </p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Purpose