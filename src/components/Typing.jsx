import React from 'react'

export const Typing = ({from, message}) => {
  return (
    <li>
      <div className="message-data">
        <span className="message-data-name">
          <i className="fa fa-circle online"></i> {from.name}
        </span>
        <span className="message-data-time">{message.time}</span>
      </div>

      {Array.from({length: 3}).map((item, index) => (
        <i
          className="fa fa-circle online"
          style={{opacity: 1 / (index + 1)}}
        ></i>
      ))}
    </li>
  )
}
