import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import DreamDetails from './DreamDetails';
interface Dream {
  id: number;
  title: string;
  content: string;
  timestamp: string;
  likes: number;
  // ... other dream properties
}

export default function DreamDetails2() {

  const { dreamId } = useParams(); // Get dream ID from URL params
  const [dream, setDream] = useState<Dream>();
  
 // Fetch dream details based on ID (replace with your actual API call)
 React.useEffect(() => {
  fetch(`https://dreams.sivasakthi-n2022cse.workers.dev/dreams/${dreamId}`)
    .then((res) => res.json())
    .then((data) => {
    console.log(data[0]);
    setDream(data[0])
});
}, [dreamId]);

  return (
    <div>
            {dream ? <DreamDetails
              key={dream?.id ?? ''}
              content={dream?.content ?? ''}
              likes={Number(dream?.likes) ?? 0}
              title={dream?.title ?? ''}
            />
            : <div className='w-full h-14 bg-gray-600 text-white rounded-lg flex items-center pl-10'>Loading... PLease hang on a while, the server is slightly slow 😅</div>}
          </div>
          
          )
      }
