import React from 'react'

interface DreamCardProps {
    title: string
    date: string
    likes: number
    }

export default function DreamCard({title, date, likes}: DreamCardProps) {
  return (
    <div className='ml-1 my-2 '>
      <div className="bg-gray-700 w-auto h-auto rounded-2xl flex flex-row gap-3 hover:cursor-pointer border m-1 hover:bg-gray-600" >
  <div className=" flex items-center justify-center text-white hover: animate-pulse pl-3">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-orbit"><circle cx="12" cy="12" r="3"/><circle cx="19" cy="5" r="2"/><circle cx="5" cy="19" r="2"/><path d="M10.4 21.9a10 10 0 0 0 9.941-15.416"/><path d="M13.5 2.1a10 10 0 0 0-9.841 15.416"/></svg>
  </div>
  <div className="flex flex-col gap-1 py-1 border-l-2 border-gray-500 pl-4 first-letter:">
    <h1 className="text-white shadow-slate-600 font-bold text-[16px] ">{title}</h1>
    <div className="text-gray-300 flex flex-row gap-10 pb-1">
      <p className="text-sm ">{date}</p>
      <div className="flex flex-row gap-1">
      <p className="text-sm">{likes}</p>
      <div className="text-white hover:text-red-700 size-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 22 22" fill="currentColor" stroke="text-black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z "/></svg>
    </div>
    </div>
    </div>

  </div>
</div>
    </div>
  )
}