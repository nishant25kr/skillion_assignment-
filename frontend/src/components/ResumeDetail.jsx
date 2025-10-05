import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const ResumeDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [resume, setResume] = useState(null);
  const [loading, setLoading] = useState(true);

  const backendURL = import.meta.env.VITE_BACKEND_URL || "http://localhost:8000";

  useEffect(() => {
    const fetchResume = async () => {
      try {
        const res = await axios.get(`${backendURL}/api/resume/${id}`, { withCredentials: true });
        setResume(res.data);
      } catch (err) {
        console.error("Error fetching resume:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchResume();
  }, [id]);

  if (loading) return <p className="p-6">Loading...</p>;
  if (!resume) return <p className="p-6">Resume not found.</p>;

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <button
        onClick={() => navigate(-1)}
        className="mb-4 bg-gray-300 hover:bg-gray-400 px-4 py-2 rounded-lg"
      >
        ← Back
      </button>

      <div className="bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-2xl font-bold mb-4">Resume Details</h2>

        <p><strong>ID:</strong> {resume._id}</p>
        <p><strong>Uploaded At:</strong> {new Date(resume.metadata?.uploadedAt).toLocaleString()}</p>
        <p><strong>Score:</strong> {resume.score ?? "N/A"}</p>
        <p><strong>Status:</strong> {resume.score ? "Processed" : "Pending"}</p>

        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <h3 className="font-semibold mb-2">Resume Text</h3>
          <pre className="whitespace-pre-wrap">{resume.text}</pre>
        </div>
      </div>
    </div>
  );
};

export default ResumeDetail;
