import React from 'react'
import DreamCard from './DreamCard';
import { Link } from 'react-router-dom';
// Interface for dream data (assuming you have a structure for dream objects)

// CREATE TABLE dreams (
//   id INTEGER PRIMARY KEY AUTOINCREMENT,
//   title TEXT NOT NULL,
//   content TEXT NOT NULL,
//   timestamp INTEGER NOT NULL,
//   likes INTEGER DEFAULT 0,
//   topics TEXT,
//   self_destruct_time INTEGER,
//   anonymous_user_id TEXT
// );

interface Dream {
  id: number;
  title: string;
  content: string;
  timestamp: string;
  likes: number;
  // ... other dream properties
}


// interface dreams{
//   id: number;
//   title : string;

// }

export default function DreamList() {
  // Fetch dreams from the API
  const [dreams, setDreams] = React.useState<Dream[]>([]);
  React.useEffect(() => {
    fetch('https://dreams.sivasakthi-n2022cse.workers.dev/dreams')
      .then((res) => res.json())
      .then((data) => setDreams(data));
  }, []);
  // Render the dreams
  return (
    <div >
      {dreams.map((dream) => (
        <Link to={`/dreams/${dream.id}`}>
          <DreamCard
            key={dream.id}
            title={dream.title}
            date={(dream.timestamp)}
            likes={Number(dream.likes)}
          />
        </Link>
      ))}
    </div>
  )
}
