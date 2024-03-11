import React from 'react'
import { Link, Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import DreamStats from './DreamStats' // Assuming this is used elsewhere
import DreamDetails from './DreamDetails'

export default function App() { // Renamed to App for clarity
  return (
    <div className='relative'>
      <Router>
        <div className='bg-gray-600 h-16 items-center flex flex-row justify-center border border-green-400 border-opacity-40 rounded-md'>
          <button className='size-10 absolute left-7 text-blue-200 border border-green-400 border-opacity-40 rounded-full p-1 hover:bg-gray-500 '>
            <Link to="/header">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-door-open"><path d="M13 4h3a2 2 0 0 1 2 2v14"/><path d="M2 20h3"/><path d="M13 20h9"/><path d="M10 12v.01"/><path d="M13 4.562v16.157a1 1 0 0 1-1.242.97L5 20V5.562a2 2 0 0 1 1.515-1.94l4-1A2 2 0 0 1 13 4.561Z"/></svg>
            </Link>
          </button>
          <div className='font-bold text-white '>
            <button>Bubbles of Memories</button>
          </div>
          <button id="account" className='hover:bg-slate-500 p-1 rounded-full size-10 text-white bg-transparent absolute right-12 border border-opacity-40 border-green-200'>
            <Link to="/dreamdetails/new">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="violet" stroke-width="1.25" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-waypoints"><circle cx="12" cy="4.5" r="2.5"/><path d="m10.2 6.3-3.9 3.9"/><circle cx="4.5" cy="12" r="2.5"/><path d="M7 12h10"/><circle cx="19.5" cy="12" r="2.5"/><path d="m13.8 17.7 3.9-3.9"/><circle cx="12" cy="19.5" r="2.5"/></svg>
            </Link>
          </button>
        </div>

        <Routes>
          {/* <Route path='/dreamdetails/new' element={<DreamDetails title={''} likes={0} content={''}/>} /> */}
          {/* No need for a route to /header as it's rendered at the top level */}
        </Routes>
      </Router>
    </div>
  )
}
