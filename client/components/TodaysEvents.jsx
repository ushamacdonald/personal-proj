import React from 'react'


export default function TodaysEvents ({events}) {
  let today = new Date()
  events = events.filter((event) => {
    let og = event.og.split('-')
    return (today.getDate() === Number(og[2])) && (today.getMonth()+ 1 == Number(og[1]))  && (today.getFullYear() == Number(og[0]))
  })
  return (
    <div className="todaysEvents">
      <h2 className="title is-3">Today's Events</h2>
        {events.map((event, i) => <p key={i}>{event.title}</p>)}
    </div>
  )
}
