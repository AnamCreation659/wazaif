"use client";
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import Navbar from "../../components/navbar";

const BlogDetail = () => {
  const searchParams = useSearchParams();
  const id = searchParams.get("id");

  const [blog, setBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!id) return;
 console.log(id,'id')
    const fetchBlog = async () => {
      try {
        const res = await fetch(`../../api/card-data/single-card?id=${id}`);
        const data = await res.json();
        console.log(data,'singleblog')
        if (res.ok) {
          setBlog(data.specificBlogResult[0]);
        } else {
          setError(data.error || "Failed to fetch blog");
        }
      } catch (err) {
        setError("Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [id]);

  return (
    <div className="mx-auto p-6 bg-white shadow-md rounded-md">
      <Navbar />
      <h2 className="text-2xl font-bold mb-4">Blog Details</h2>

      {loading && <p>Loading...</p>}
      {error && <p className="text-red-500">{error}</p>}

      {blog && (
        <div className="p-4 border rounded shadow">
          <h3 className="text-lg font-semibold">{blog.title}</h3>
          <p className="text-gray-700">{blog.content}</p>
        </div>
      )}
    </div>
  );
};

export default BlogDetail;
