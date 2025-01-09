import { useState, useEffect } from "react";
import BASE_URL from '../config';

const Fines = () => {

  const [fines, setFines] = useState([]);

  useEffect(() => {
    const fetchFines = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/fines`);
        const data = await response.json();
        setFines(data);
      } catch (error) {
        console.error("Error fetching fines:", error);
      }
    };

    fetchFines();
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Fines List</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-2 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                Fine_ID
              </th>
              <th className="px-20 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                Name
              </th>
              <th className="px-4 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                Type
              </th>
              <th className="px-4 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs font-medium text-gray-600  tracking-wider">
                Fine (Rs.)
              </th>
            </tr>
          </thead>
          <tbody>
            {fines.map((fine) => (
              <tr key={fine.fine_id}>
                <td className="px-2 py-3 border-b border-gray-200">{fine.fine_id}</td>
                <td className="px-20 py-3 border-b border-gray-200">{fine.name}</td>
                <td className="px-4 py-3 border-b border-gray-200">{fine.type}</td>
                <td className="px-4 py-3 border-b border-gray-200">{fine.fine}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Fines;
