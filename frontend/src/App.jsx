import Landing from './components/Landing'
import ChatSec from './components/ChatSec'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Chat from './components/Chat';
import Forum from './components/Forum';
import Messages from './components/Messages';

function App() {
  return (
    <div className='main w-full min-h-screen bg-black ' >
    <Router>
        {/* <Navbar /> */}
        <Routes>
          <Route path="/" element={<><Landing /><ChatSec /></>} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/forum" element={<Forum />} />
          <Route path="/messages" element={<Messages />} />
        </Routes>
      </Router>
  </div>
  )
}









export default App
