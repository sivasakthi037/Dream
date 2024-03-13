import React, { useEffect, useState } from 'react';

interface FilterBarProps {
  name1: string;
  name2: string;
  name3: string;
  name5: string;
  name6: string;
}

export default function FilterBar() {
  const [filterData, setFilterData] = useState<FilterBarProps>({
    name1: 'Adventure 🚵‍♂️',
    name2: 'Fantasy 🌌',
    name3: 'Sci-Fi 🔬',
    name5: 'Mystery 🌃',
    name6: 'Horror😱',
  });

  useEffect(() => {
    // Make an HTTP request to the API endpoint to fetch the data
    // Replace 'apiEndpoint' with the actual API endpoint URL
    fetch('apiEndpoint')
      .then((response) => response.json())
      .then((data) => {
        // Update the filterData state with the retrieved data
        setFilterData(data);
      })
      .catch((error) => {
        console.error('Error fetching data from API:', error);
      });
  }, []);

  return (
    <div className='my-2'>
      <button className="bg-blue-800 text-white px-4 rounded-md font-bold pb-1 hover:text-gray-800 hover:bg-gray-400 m-2">
        {filterData.name1}
      </button>
      <button className="bg-blue-800 text-white px-4 rounded-md font-bold pb-1 hover:text-gray-800 hover:bg-gray-400 m-2">
        {filterData.name2}
      </button>
      <button className="bg-blue-800 text-white px-4 rounded-md font-bold pb-1 hover:text-gray-800 hover:bg-gray-400 m-2">
        {filterData.name3}
      </button>
      {/* <button className="bg-blue-800 text-white px-4 rounded-md font-bold pb-1 hover:text-gray-800 hover:bg-gray-400 m-2">
        {filterData.name4}
      </button> */}
      <button className="bg-blue-800 text-white px-4 rounded-md font-bold pb-1 hover:text-gray-800 hover:bg-gray-400 m-2">
        {filterData.name5}
      </button>
      <button className="bg-blue-800 text-white px-4 rounded-md font-bold pb-1 hover:text-gray-800 hover:bg-gray-400 m-2">
        {filterData.name6}
      </button>
    </div>
  );
}
