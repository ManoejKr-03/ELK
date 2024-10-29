import React, { useEffect, useState } from 'react';
import axios from 'axios';

interface DataItem {
  id: number;
  name: string;
  description: string;
}

const DataList: React.FC = () => {
  const [data, setData] = useState<DataItem[]>([]);

  useEffect(() => {
    axios.get('/api/data')
      .then((response) => setData(response.data))
      .catch((error) => console.error('Error fetching data', error));
  }, []);

  return (
    <div>
      <h1>Data List</h1>
      <ul>
        {data.map(item => (
          <li key={item.id}>{item.name}: {item.description}</li>
        ))}
      </ul>
    </div>
  );
};

export default DataList;
