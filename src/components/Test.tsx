import React from 'react'
import DreamCard from './DreamCard'
import DreamHeader from './DreamHeader'

export default function Test() {
  return (
    <div className='bg-gray-700'>
      <div className='fixed z-10 w-full'>
    <DreamHeader/>
    </div>

    <div className='bg-gray-700 h-screen relative border border-green-200 pt-16'>
      <div className='w-[600px] boreder border-green-200 mt-4'>
      <DreamCard title='My Dream' date='12/12/2021' likes={10} />
      <DreamCard title='My Dream' date='12/12/2021' likes={10} />
      </div>
        <button title='Add' className='text-white size-10 p-1 border border-green-300 rounded-full absolute right-[45px] bottom-20'>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-sparkle"><path d="m12 3-1.9 5.8a2 2 0 0 1-1.287 1.288L3 12l5.8 1.9a2 2 0 0 1 1.288 1.287L12 21l1.9-5.8a2 2 0 0 1 1.287-1.288L21 12l-5.8-1.9a2 2 0 0 1-1.288-1.287Z"/></svg>
        </button>


      
        </div>
    </div>
    
  )
}
