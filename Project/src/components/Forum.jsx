import React, { useState } from 'react';

const Forum = () => {
  // State to hold the list of messages
  const [messages, setMessages] = useState([]);
  // State to hold the current message input
  const [currentMessage, setCurrentMessage] = useState('');

  // Function to handle sending a message
  const sendMessage = () => {
    if (currentMessage.trim()) {
      // Add the new message to the messages array
      setMessages([...messages, currentMessage]);
      // Clear the input field
      setCurrentMessage('');
    }
  };

  return (
    <div className='bg-gray-900 min-h-screen p-4 text-white'>
      <h2 className='text-2xl mb-4'>Forum Page</h2>
      <div className='mb-4'>
        <input 
          type='text' 
          value={currentMessage} 
          onChange={(e) => setCurrentMessage(e.target.value)} 
          className='p-2 w-full mb-2 bg-gray-800 text-white rounded border border-gray-700'
          placeholder='Type your message here'
        />
        <button 
          onClick={sendMessage} 
          className='bg-blue-500 hover:bg-blue-600 text-white p-2 w-full rounded'
        >
          Send
        </button>
      </div>
      <div className='messages'>
        {messages.map((message, index) => (
          <div key={index} className='message bg-gray-700 p-2 mb-2 rounded'>
            {message}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Forum;
