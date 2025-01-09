import { useState, useEffect } from "react";
import BASE_URL from '../../config';

const PayFine = () => {
  const [fines, setFines] = useState([]);

  // Fetch fines from the API on component load
  useEffect(() => {
    const fetchFines = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/fines`);
        if (!response.ok) {
          throw new Error("Failed to fetch fines");
        }
        const data = await response.json();
        setFines(data);
      } catch (error) {
        console.error("Error fetching fines:", error);
      }
    };

    fetchFines();
  }, []);

  // Handle the "Paid" button click
  const handlePaid = async (fineId) => {
    try {
      const response = await fetch(`${BASE_URL}/api/fines/${fineId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("Failed to delete fine");
      }

      // Remove the fine from the list in the UI
      setFines((prevFines) => prevFines.filter((fine) => fine.fine_id !== fineId));
      alert("Fine marked as paid and removed successfully!");
    } catch (error) {
      console.error("Error deleting fine:", error);
      alert("Failed to mark the fine as paid.");
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Pay Your Fine</h1>

      {fines.length > 0 ? (
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs font-medium text-gray-600 tracking-wider">
                Fine ID
              </th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs font-medium text-gray-600 tracking-wider">
                Fine Name
              </th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs font-medium text-gray-600 tracking-wider">
                Fine Amount
              </th>
              <th className="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs font-medium text-gray-600 tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {fines.map((fine) => (
              <tr key={fine.fine_id}>
                <td className="px-6 py-3 border-b">{fine.fine_id}</td>
                <td className="px-6 py-3 border-b">{fine.fine_name}</td>
                <td className="px-6 py-3 border-b">Rs.{fine.fine_amount}</td>
                <td className="px-6 py-3 border-b">
                  <button
                    onClick={() => handlePaid(fine.fine_id)}
                    className="bg-green-500 text-white p-2 rounded-md"
                  >
                    Paid
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="text-gray-600">No fines available to pay.</p>
      )}
    </div>
  );
};

export default PayFine;
