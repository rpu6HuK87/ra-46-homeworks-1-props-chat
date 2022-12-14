import React from 'react'
import {Message} from './Message'
import {Response} from './Response'
import {Typing} from './Typing'

export const MessageHistory = ({list}) => {
  const componentList = {
    message: Message,
    response: Response,
    typing: Typing
  }
  return (
    <ul>
      {list.map(({from, ...message}) => {
        let RequiredComponent = componentList[message.type]
        return (
          <RequiredComponent from={from} message={message} key={message.id} />
        )
      })}
    </ul>
  )
}
