import React from 'react'
import { useNavigate } from 'react-router-dom';

const ChatSec = () => {
  const navigate = useNavigate();

  const handleStartChatting = () => {
    navigate('/chat');
  }

  return (
    <div className=' w-full h-screen bg-blue-400 ' >
        <div className=' w-full h-[70%] bg-white font-silk '>
            <div className=' w-full flex flex-col items-center justify-center h-full' >
                <h1 className=' text-[3.2vw] ' >lets talk</h1>
                <div className=' w-[32%] pt-[2vw] text-[1.2vw] tracking-tight font-martian ' >
                    <p>Feeling stressed? Overwhelmed? Meet our virtual counsellor, it’s here to chat 24/7. Simply pour your heart out, it won’t interrupt, judge or get tired.</p>
                </div>
                <button className=' mt-[2vw] p-[.6vw] rounded-xl bg-black text-[#F9C74F] border-4 w-[160px] h-[70px]' onClick={handleStartChatting} >Start Chatting</button>
            </div>
        </div>
    </div>
  )
}

export default ChatSec;