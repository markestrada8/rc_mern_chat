import React, { useEffect, useState } from 'react'
import axios from 'axios'

const ChatPage = () => {
  const [chats, setChats] = useState([])
  const getData = () => {
    axios.get('http://localhost:8080/api/data')
      .then((response) => {
        setChats(response.data)
      })
      .catch((error) => {
        console.log('GET chat data error: ', error)
      })
  }

  useEffect(() => {
    getData()
  }, [])


  return (
    <div>
      {chats.map(item => (
        <div key={item._id}>
          <h3>{item.chatName}</h3>
        </div>
      ))}
    </div>
  )
}

export default ChatPage