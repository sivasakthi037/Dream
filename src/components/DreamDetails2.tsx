import React, { Key, useState } from 'react'
import { useParams } from 'react-router-dom';
import DreamDetails from './DreamDetails';
interface Dream {
  topic_id: any;
  content_id: Key | null | undefined;
  // map(arg0: (item: any) => import("react/jsx-runtime").JSX.Element): React.ReactNode;
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
  const [dream, setDream] = useState<Dream | null>(null);

  
 // Fetch dream details based on ID (replace with your actual API call)
 React.useEffect(() => {
  fetch(`/api/dreams/${dreamId}`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data.dream.results[0])
    setDream(data.dream.results[0])
});
}, [dreamId]);

  return (
    <div>
      {dream && (
        <DreamDetails
          key={dream.content_id}
          content={dream.content}
          likes={Number(dream.topic_id)} 
          title={dream.title}      
        />
      )}
    </div>
  )
}
