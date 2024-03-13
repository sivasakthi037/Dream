import React from 'react';
import { Link } from 'react-router-dom';

export default function AddComponent() {
  return (
    <div className='bg-red-500 h-screen'>
      <Link to='/add' title='Add' className='text-black'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-sparkle">
          <path d="m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z"/>
        </svg>
      </Link>
    </div>
  );
}
