import { useState } from 'react';
import DreamList from './DreamList';
import DreamHeader from './DreamHeader';
import FilterBar from './FilterBar';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulating an asynchronous operation
  setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  return (
    <div className='bg-gray-400 p-4 rounded-lg sm:p-0 sm:m-0'>
      <div className='bg-gray-700 w-full h-full p-1 rounded-lg'>
        <div>
          <DreamHeader />
        </div>
        <FilterBar />
        {isLoading ? <p className='text-white font-bold py-10'>Loading... Please hang on, a bit slow 😅</p> : <DreamList />}
      </div>
    </div>
  );
}
