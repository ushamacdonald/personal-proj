import React from 'react'


export default function TodaysEvents ({events}) {
  let today = new Date()
  events = events.filter((event) => {
    let og = event.og.split('-')
    return (today.getDate() === Number(og[2])) && (today.getMonth()+ 1 == Number(og[1]))  && (today.getFullYear() == Number(og[0]))
  })
  return (
    <div>
      {events.map((event, i) => <h1 key={i}>Event: {event.title}</h1>)}
    </div>
  )
}
