import React from 'react'
import AppRoutes from './AppRoutes'
import {getNotice} from '../api/api'
import NoticeBoardAdd from './NoticeBoardAdd'

export default function NoticeBoard ({noticeBoard, fetchNotice, flatties}) {

const renderNotice = ({id, message, flattie_id, name}, i) => (
  <div key={i}>
    <p>
    <b>Message: </b>{message} <b>From: </b> {name}
    </p>

  </div>
)

  return (
    <div className="noticeContainer column is-3">
      <div className="">
        <h2 className="title is-2">Notice Board</h2>
        <div className="my_message">
          {noticeBoard.map(renderNotice)}
        </div>
        <NoticeBoardAdd flatties={flatties} fetchNotice={fetchNotice} />
      </div>
    </div>
  )
}
