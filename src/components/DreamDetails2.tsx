import React, { Key, useState } from 'react'
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
  console.log(dreamId)
  const [dream, setDream] = useState<Dream>();

  
 // Fetch dream details based on ID (replace with your actual API call)
 React.useEffect(() => {
  fetch(`/api/dreams/${dreamId}`)
    .then((res) => res.json())
    .then((data) => {
    console.log(data);
    setDream(data)
});
}, [dreamId]);

  return (
    <div>
      
        <DreamDetails
          key={dream}
          content={dream.content}
          likes={Number(dream.likes)} 
          title={dream.title}      
        />
    </div>
  )
}
