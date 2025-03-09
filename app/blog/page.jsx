"use client";
import { useState } from "react";
import Navbar from '../components/navbar';

const Page = () => {
  const [formData, setFormData] = useState({
    title: "",
    content: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("Submitting...");

    try {
      const res = await fetch("../api/card-data/send-card-data", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData), // Image field nahi bhej raha
      });

      const data = await res.json();
      setMessage(data.message || data.error);
      if (res.ok) {
        setFormData({ title: "", content: "" }); // Reset form
      }
    } catch (error) {
      setMessage("Error submitting blog");
    }
  };

  return (
    <div className="mx-auto p-6 bg-white shadow-md rounded-md">
      <Navbar />
      <h2 className="text-2xl font-bold mb-4">Add a Blog</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={formData.title}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <textarea
          name="content"
          placeholder="Content"
          value={formData.content}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded"
        >
          Submit
        </button>
      </form>

      {message && <p className="mt-4 text-center">{message}</p>}
    </div>
  );
};

export default Page;
