"use client";
import { useState, useEffect } from "react";
import Navbar from "../components/navbar";

const Page = () => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("../api/card-data/get-card-data"); // Correct API path
        const data = await res.json();
        if (res.ok) {
          setBlogs(data.blogs);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  return (
    <div className="mx-auto p-6 bg-white shadow-md rounded-md max-w-4xl">
      <Navbar />
      <h2 className="text-2xl font-bold mb-4 text-center">All Blogsss</h2>

      {blogs.length > 0 ? (
        blogs.map((blog, index) => (
          <div
            key={index}
            className="p-4 border rounded shadow mb-6 bg-gray-50"
          >
            <p className="text-xl font-semibold mb-2">{blog.title}</p>
            {blog.subtitle && (
              <p className="text-md font-medium text-gray-600 mb-2">
                {blog.subtitle}
              </p>
            )}
            <p
              className="text-gray-700 leading-relaxed"
              dangerouslySetInnerHTML={{
                __html: blog.content.length > 200
                  ? blog.content.substring(0, 200) + "..."
                  : blog.content,
              }}
            />
          </div>
        ))
      ) : (
        <p className="text-center text-gray-500">No blogs available.</p>
      )}
    </div>
  );
};

export default Page;
