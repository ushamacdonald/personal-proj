import React from 'react'
import AppRoutes from './AppRoutes'
import {getNotice} from '../api/api'

export default function NoticeBoard ({noticeBoard}) {

const renderNotice = ({id, message}) => (
  <div key={id}>Message: {message}</div>
)

  return (
    <div className="noticeContainer">
      {noticeBoard.map(renderNotice)}
    </div>
  )
}
