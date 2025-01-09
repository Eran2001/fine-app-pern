import { useEffect, useState } from "react";
import BASE_URL from '../config';

const PostOffice = () => {

  const [postOffices, setPostOffices] = useState([]);
  const [form, setForm] = useState({ postal_code: "", post_office_name: "", email: "", password: "", district: "" });
  const [editId, setEditId] = useState(null);

  // Fetch post offices
  const fetchPostOffices = async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/postoffices`);
      const data = await response.json();
      setPostOffices(data);
    } catch (error) {
      console.error("Error fetching post offices:", error);
    }
  };

  useEffect(() => {
    fetchPostOffices();
  }, []);

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = editId ? `${BASE_URL}/api/postoffices/${editId}` : `${BASE_URL}/api/postoffices`;
    const method = editId ? "PUT" : "POST";
    try {
      const response = await fetch(url, {
        method,
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      const data = await response.json();
      fetchPostOffices();
      setForm({ postal_code: "", post_office_name: "", email: "", password: "", district: "" });
      setEditId(null);
    } catch (error) {
      console.error("Error saving post office:", error);
    }
  };

  const handlePatchUpdate = async (id, updatedField) => {
    try {
      const response = await fetch(`${BASE_URL}/postoffices/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(updatedField), 
      });
      if (!response.ok) {
        throw new Error("Failed to update field");
      }
      const updatedPostOffice = await response.json();
      setPostOffices((prev) =>
        prev.map((postOffice) =>
          postOffice.post_id === id ? { ...postOffice, ...updatedPostOffice } : postOffice
        )
      );
    } catch (error) {
      console.error("Error updating post office:", error);
    }
  };
  

  // Handle delete
  const handleDelete = async (id) => {
    try {
      await fetch(`${BASE_URL}/api/postoffices/${id}`, { method: "DELETE" });
      fetchPostOffices();
    } catch (error) {
      console.error("Error deleting post office:", error);
    }
  };

  // Set form for edit
  const handleEdit = (postOffice) => {
    setForm({
      postal_code: postOffice.postal_code,
      post_office_name: postOffice.post_office_name,
      email: postOffice.email,
      password: postOffice.password,
      district: postOffice.district,
    });
    setEditId(postOffice.post_id);
  };

  return (
  <div>
    <h3 className="text-2xl font-bold mb-4">Post Office</h3>

    <form onSubmit={handleSubmit} className="mb-4">
        <input
          type="text"
          placeholder="Postal Code"
          value={form.postal_code}
          onChange={(e) => setForm({ ...form, postal_code: e.target.value })}
          required
          className="border px-2 py-1 mr-2"
        />
        <input
          type="text"
          placeholder="Post Office Name"
          value={form.post_office_name}
          onChange={(e) => setForm({ ...form, post_office_name: e.target.value })}
          required
          className="border px-2 py-1 mr-2"
        />
        <input
          type="text"
          placeholder="Email"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          required
          className="border px-2 py-1 mr-2"
        />
        <input
          type="text"
          placeholder="Password"
          value={form.password}
          onChange={(e) => setForm({ ...form, password: e.target.value })}
          required
          className="border px-2 py-1 mr-2"
        />
        <input
          type="text"
          placeholder="District"
          value={form.district}
          onChange={(e) => setForm({ ...form, district: e.target.value })}
          required
          className="border px-2 py-1 mr-2"
        />
        <button type="submit" className="px-4 py-2 bg-blue-500 text-white">
          {editId ? "Update" : "Add"}
        </button>
      </form>

    <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-2 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                Post_ID
              </th>
              <th className="px-5 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                postal code
              </th>
              <th className="px-10 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                post office name
              </th>
              <th className="px-10 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                email
              </th>
              <th className="px-4 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                district
              </th>
              <th className="px-4 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs font-medium text-gray-600 uppercase tracking-wider">
                Edit
              </th>
            </tr>
          </thead>
          <tbody>
            {postOffices.map((postOffice) => (
              <tr key={postOffice.post_id}>
                <td className="px-6 py-3 border-b">{postOffice.post_id}</td>
                <td className="px-6 py-3 border-b">{postOffice.postal_code}</td>
                <td className="px-6 py-3 border-b">{postOffice.post_office_name}</td>
                <td className="px-6 py-3 border-b">{postOffice.email}</td>
                <td className="px-6 py-3 border-b">{postOffice.district}</td>
                <td className="px-6 py-3 border-b">
                  <button onClick={() => handleEdit(postOffice)} className="px-2 py-1 text-white bg-yellow-500 mr-2">
                    Edit
                  </button>
                  <button onClick={() => handleDelete(postOffice.post_id)} className="px-2 py-1 text-white bg-red-500">
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
  </div>
  );
};

export default PostOffice;