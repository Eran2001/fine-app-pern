import { useState } from "react";
import BASE_URL from '../config';

const OfficerIssueFine = () => {
  const [fine, setFine] = useState({
    // fine_id: "",
    fine_name: "",
    fine_type: "",
    fine_amount: "",
    license_id: "",
    user_email: "",
  });

  const [submittedFine, setSubmittedFine] = useState(null);

  const handleChange = (e) => {
    setFine({ ...fine, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validate all fields
    if (
      !fine.fine_name ||
      !fine.fine_type ||
      !fine.fine_amount ||
      !fine.license_id ||
      !fine.user_email
    ) {
      alert("All fields are required!");
      return;
    }

    try {
      const response = await fetch(`${BASE_URL}/api/fines`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(fine),
      });

      if (!response.ok) {
        throw new Error("Error adding fine");
      }

      const data = await response.json();
      alert("Fine added successfully, and an email has been sent to the user.");

      // Update the state with the fine data
      setSubmittedFine(data);
    } catch (error) {
      alert("Error adding fine");
      console.error("Error adding fine:", error);
    }
  };

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Officer, Issue a Fine</h1>

      <form onSubmit={handleSubmit} className="space-y-4">
        {/* <input
          type="text"
          name="fine_id"
          placeholder="Fine ID"
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        /> */}
        <input
          type="text"
          name="fine_name"
          placeholder="Fine Name"
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />
        <input
          type="text"
          name="fine_type"
          placeholder="Fine Type"
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />
        <input
          type="text"
          name="fine_amount"
          placeholder="Fine Amount"
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />
        <input
          type="text"
          name="license_id"
          placeholder="License ID"
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />
        <input
          type="email"
          name="user_email"
          placeholder="User Email"
          onChange={handleChange}
          className="w-full p-2 border rounded-md"
        />
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded-md">
          Add Fine
        </button>
      </form>

      {/* {submittedFine && (
        <div className="overflow-x-auto mt-6">
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
                  Fine Type
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs font-medium text-gray-600 tracking-wider">
                  Fine Amount
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs font-medium text-gray-600 tracking-wider">
                  License ID
                </th>
                <th className="px-6 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs font-medium text-gray-600 tracking-wider">
                  User Email
                </th>
              </tr>
            </thead>
            <tbody>
              <tr key={submittedFine.fine_id}>
                <td className="px-6 py-3 border-b">{submittedFine.fine_id}</td>
                <td className="px-6 py-3 border-b">{submittedFine.fine_name}</td>
                <td className="px-6 py-3 border-b">{submittedFine.fine_type}</td>
                <td className="px-6 py-3 border-b">Rs.{submittedFine.fine_amount}</td>
                <td className="px-6 py-3 border-b">{submittedFine.license_id}</td>
                <td className="px-6 py-3 border-b">{submittedFine.user_email}</td>
              </tr>
            </tbody>
          </table>
        </div>
      )} */}
    </div>
  );
};

export default OfficerIssueFine;
