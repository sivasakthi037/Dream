import React from 'react'
import DreamCard from './DreamCard';
import { Link } from 'react-router-dom';
// Interface for dream data (assuming you have a structure for dream objects)
interface Dream {
  topic_id: string;
  content_id: number;
  id: number;
  title: string;
  content: string;
  timestamp: string;
  likes: number;
  // ... other dream properties
}


export default function DreamList() {
  // Fetch dreams from the API
  const [dreams, setDreams] = React.useState<Dream[]>([]);
  React.useEffect(() => {
    fetch('/api/dreams')
      .then((res) => res.json())
      .then((data) => setDreams(data.dreams.results));
  }, []);
  // Render the dreams
  return (
    <div>
      {dreams.map((dream) => (
        <Link to={`/dreams/${dream.content_id}`}>
          <DreamCard
            key={dream.id}
            title={dream.title}
            date={dream.content_id.toString()}
            likes={Number(dream.topic_id)}
          />
        </Link>
        ))}
    </div>
  )
}
