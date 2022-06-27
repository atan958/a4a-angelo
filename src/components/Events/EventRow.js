import React from 'react'

import './Events.css'

const EventRow = ({event1, event2}) => {
  return (
    <div className='row'>
        <Event event={event1}/>
        {event2 && <Event event={event2}/>}
    </div>
  )
}

const Event = ({event}) => {
    return (
        <div className='event'>
            <img src={event.image}/>
            <h3>{event.title}</h3>
            <button>Learn More</button>
        </div>
    );
}

export default EventRow