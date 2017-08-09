import React from 'react'
import AppRoutes from './AppRoutes'
import {getNotice} from '../api/api'
import NoticeBoardAdd from './NoticeBoardAdd'
import TodaysEvents from './TodaysEvents'

export default function NoticeBoard ({events, noticeBoard, fetchNotice, flatties}) {

const renderNotice = ({id, message, flattie_id, name}, i) => (
  <div key={i}>
    <p>
    <b>{message}</b> - {name}
    </p>

  </div>
)

  return (
    <div className="noticeContainer column">
      <div className="">
        <h2 className="title is-2">Notice Board</h2>
        <div className="my_message">
          <h2 className="title is-3">Messages</h2>

          {noticeBoard.map(renderNotice)}
        </div>
        <TodaysEvents events={events}/>
        <NoticeBoardAdd flatties={flatties} fetchNotice={fetchNotice} />
      </div>
    </div>
  )
}
