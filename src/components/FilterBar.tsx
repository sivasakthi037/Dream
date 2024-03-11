import React from 'react'
interface FilterBarProps {
    name1: string
    name2: string
    name3: string
    name4: string
    name5: string
    name6: string
    }

export default function FilterBar({name1,name2,name3,name4,name5,name6}: FilterBarProps) {
  return (
<div>
  <button className="bg-blue-900 text-white px-4 rounded-md font-bold pb-1 hover:text-gray-800 hover:bg-gray-400 m-2">{name1}</button>
  <button className="bg-blue-900 text-white px-4 rounded-md font-bold pb-1 hover:text-gray-800 hover:bg-gray-400 m-2">{name2}</button>
   <button className="bg-blue-900 text-white px-4 rounded-md font-bold pb-1 hover:text-gray-800 hover:bg-gray-400 m-2">{name3}</button>
    <button className="bg-blue-900 text-white px-4 rounded-md font-bold pb-1 hover:text-gray-800 hover:bg-gray-400 m-2">{name4}</button>
    <button className="bg-blue-900 text-white px-4 rounded-md font-bold pb-1 hover:text-gray-800 hover:bg-gray-400 m-2">{name5}</button>
    <button className="bg-blue-900 text-white px-4 rounded-md font-bold pb-1 hover:text-gray-800 hover:bg-gray-400 m-2">{name6}</button>
</div>
  )
}
