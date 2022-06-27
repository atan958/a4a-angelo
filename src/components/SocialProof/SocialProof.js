import React from 'react'

import './SocialProof.css'

const SocialProof = () => {
  return (
    <div className='social-proof'>
        <div className='vision-container'>
            <p>Our vision is for a national movement of young people who are resilient and innovative thinkers solving tomorrow’s problems today and see a career with purpose in agriculture as their future.</p>
        </div>
        <div className='proof-container'>
            <div className='proof'>
                <i class="fa-solid fa-briefcase fa-8x proof-icon"></i>
                <h1>6,031</h1>
                <h3>Students hired so far for full-time work</h3>
            </div>
            <div className='proof'>
                <i class="fa-solid fa-graduation-cap fa-8x proof-icon"></i>
                <h1>1,200+</h1>
                <h3>Graduates anually</h3>
            </div>
            <div className='proof'>
                <i class="fa-solid fa-rainbow fa-8x proof-icon"></i>
                <h1>100%</h1>
                <h3>Safe workplace for everyone</h3>
            </div>
            <div className='proof'>
                <i class="fa-solid fa-earth-asia fa-8x proof-icon"></i>
                <h1>7</h1>
                <h3>Education institution branches worldwide</h3>
            </div>
        </div>
    </div>
  )
}

export default SocialProof