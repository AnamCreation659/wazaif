"use client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import Navbar from "../components/navbar";

const Page = () => {
  const router = useRouter();
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await fetch("../api/card-data/get-card-data");
        const data = await res.json();
        console.log(data,'blogs')
        if (res.ok) {
          setBlogs(data.blogs);
        }
      } catch (error) {
        console.error("Error fetching blogs:", error);
      }
    };

    fetchBlogs();
  }, []);

  const handleUpdate = (id) => {
    router.push(`/services/card?id=${id}`);
  };

  return (
    <div className="mx-auto p-6 bg-white shadow-md rounded-md">
      <Navbar />
      <h2 className="text-2xl font-bold mb-4">All Blogs</h2>

      {blogs.length > 0 ? (
        blogs.map((blog) => (
          <div
            key={blog.id}
            onClick={() => handleUpdate(blog.id)}
            className="cursor-pointer p-4 border rounded shadow mb-4 text-center"
          >
            <h3 className="text-lg font-semibold">{blog.title}</h3>
            <p className="text-gray-700">{blog.content.substring(0, 100)}</p>
          </div>
        ))
      ) : (
        <p>No blogs available.</p>
      )}
    </div>
  );
};

export default Page;
