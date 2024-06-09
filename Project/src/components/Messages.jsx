import React, { useEffect, useState } from 'react';

// const Messages = () => {
//   return <div className='text-white'>Messages Page</div>;
// }
import { StreamChat } from 'stream-chat';
import {
  Chat,
  Channel,
  ChannelList,
  Window,
  ChannelHeader,
  MessageList,
  MessageInput,
  Thread,
  useCreateChatClient,
  useScrollLocationLogic,
  LoadingIndicator,
} from 'stream-chat-react';

import 'stream-chat-react/dist/css/v2/index.css';

const apiKey = '7va4z4etp98h'

const user = {
  id: 1,
  name: "John"
}

const Messages = () => {
    const [client,setClient] = useState(null)
    const [channel,setChannel] = useState(null)


useEffect(() => {
  async function init(){
    const chatClient = StreamChat.getInstance(apiKey)
    
    await chatClient.connectUser(user, chatClient.devToken(user.id))

    const channel = chatClient.channel('messaging','Group-discuss',{
      name:'Talk it out',
      members:[user.id]
    })
    await channel.watch()

    setChannel(channel)
    setClient(chatClient)

  }
  init()

  if(client) return () => client.disconnectUser()
},[])

if(!channel || !client) return <LoadingIndicator />
return(
  <Chat client={client} theme='messaging light'>
    <Channel channel={channel}>
      <Window>
        <ChannelHeader>
          <MessageList />
          <MessageInput />
        </ChannelHeader>
      </Window>
    </Channel>
  </Chat>
)

}

export default Messages;