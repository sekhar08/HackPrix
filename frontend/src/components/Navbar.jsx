import React from 'react'
import AcUnitIcon from '@mui/icons-material/AcUnit';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <div className='w-full h-[5vw] text-[#F9C74F]' >
        <div className=' flex items-center justify-between text-[1.3vw] pt-[3vw] font-martian ' >
                <div>
                    <AcUnitIcon sx={{ color: '#F9C74F',fontSize: 40 }} />
                </div>
            <Link to="/chat">
            <h1>Chat</h1>
          </Link>
          <Link to="/forum">
            <h1>Forum</h1>
          </Link>
          <Link to="/messages">
            <h1>Messages</h1>
          </Link>
        </div>
    </div>
  )
}

export default Navbar