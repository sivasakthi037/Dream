import React from 'react'

interface DreamDetailsProps {
    title: string
    likes: number
    content:string
    }

// interface for the reactions
type Reactions ={
  R1: string
  R2: string
  R3: string
  R4: string
  R5: string
}

// set default values for the props
// DreamDetails.defaultProps =
// {
//     Title: 'Title of the content',
//     likes: 0,
//     content: 'asdkbasdhbajdb',
    
// }


export default function DreamDetails({title, likes,content}: DreamDetailsProps, {R1, R2, R3, R4, R5}: Reactions) {
  return (
    <div className='h-screen w-screen'>
      <div id='main' className="bg-gray-700 w-full h-auto text-white m-1 rounded-md">
  <div className="p-3">
    <div className="flex flex-col justify-center">
    <div id="title" className="text-gray-200 text-center"><h1>{title}</h1></div>
    <div id="content" className="text-white font-semibold py-5">
      {content}
    </div>
    </div>
    <div id="reactions" className="flex flex-row justify-evenly">

      <div id="likes" className="flex flex-row gap-2 ">
      <p className="text-sm font-bold">{likes}</p>
      <div className="text-white hover:text-red-700 size-5">
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 22 22" fill="currentColor" stroke="text-black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-heart"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z "/></svg>
    </div>
        </div>

    <div className="flex flex-row gap-2 font-bold">
      <button>{R1}</button>
      <button>{R2}</button>
      <button>{R3}</button>
      <button>{R4}</button>
      <button>{R5}</button>
    </div>

    <div className="text-white flex flex-row gap-2">
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-radiation"><path d="M12 12h0.01"/><path d="M7.5 4.2c-.3-.5-.9-.7-1.3-.4C3.9 5.5 2.3 8.1 2 11c-.1.5.4 1 1 1h5c0-1.5.8-2.8 2-3.4-1.1-1.9-2-3.5-2.5-4.4z"/><path d="M21 12c.6 0 1-.4 1-1-.3-2.9-1.8-5.5-4.1-7.1-.4-.3-1.1-.2-1.3.3-.6.9-1.5 2.5-2.6 4.3 1.2.7 2 2 2 3.5h5z"/><path d="M7.5 19.8c-.3.5-.1 1.1.4 1.3 2.6 1.2 5.6 1.2 8.2 0 .5-.2.7-.8.4-1.3-.5-.9-1.4-2.5-2.5-4.3-1.2.7-2.8.7-4 0-1.1 1.8-2 3.4-2.5 4.3z"/></svg>
      <p className='font-bold'>Report</p>
    </div>
    </div>
  </div>
</div>

    </div>
  )
}
