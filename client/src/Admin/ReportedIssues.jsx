import { useEffect, useState } from "react";
import BASE_URL from '../config';

const ReportedIssues = () => {
  const [issues, setIssues] = useState([]);

  useEffect(() => {
    const fetchIssues = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/issues`);
        if (!response.ok) throw new Error("Failed to fetch issues");
        const data = await response.json();
        setIssues(data);
      } catch (error) {
        console.error("Error fetching issues:", error);
      }
    };
    fetchIssues();
  }, []);

  return (
    <div>
      <h3 className="text-2xl font-bold mb-4">Reported Issues</h3>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-4 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs font-medium text-gray-600 uppercase">
                Issue ID
              </th>
              <th className="px-20 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs font-medium text-gray-600 uppercase">
                Issue Name
              </th>
              <th className="px-4 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs font-medium text-gray-600 uppercase">
                Description
              </th>
              <th className="px-4 py-3 border-b border-gray-200 bg-gray-100 text-left text-xs font-medium text-gray-600 uppercase">
                Reported At
              </th>
            </tr>
          </thead>
          <tbody>
            {issues.map((issue) => (
              <tr key={issue.issue_id}>
                <td className="px-4 py-3 border-b">{issue.issue_id}</td>
                <td className="px-20 py-3 border-b">{issue.issue_name}</td>
                <td className="px-4 py-3 border-b">{issue.description}</td>
                <td className="px-4 py-3 border-b">{new Date(issue.created_at).toLocaleString()}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ReportedIssues;