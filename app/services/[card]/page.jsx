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
    console.log(id, "id");

    const fetchBlog = async () => {
      try {
        const res = await fetch(`/api/card-data/single-card?id=${id}`); // ✅ Correct API path
        const data = await res.json();
        console.log(data, "single blog");

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
    <div className="mx-auto p-6 bg-white shadow-md rounded-md max-w-3xl">
      <Navbar />
      <h2 className="text-2xl font-bold mb-6 text-center">Blog Details</h2>

      {loading && <p className="text-center">Loading...</p>}
      {error && <p className="text-center text-red-500">{error}</p>}

      {blog && (
        <div className="p-6 border rounded shadow bg-gray-50">
          {/* ✅ Blog ID */}
          <p className="text-sm text-gray-500 mb-2">Blog ID: {blog.id}</p>

          {/* ✅ Blog Title */}
          <h3 className="text-2xl font-bold mb-4">{blog.title}</h3>

          {/* ✅ Blog Subtitle */}
          {blog.subtitle && (
            <h4 className="text-lg font-medium text-gray-600 mb-4">
              {blog.subtitle}
            </h4>
          )}

          {/* ✅ Blog Content */}
          <div
            className="text-gray-700 leading-relaxed"
            dangerouslySetInnerHTML={{ __html: blog.content }}
          />
        </div>
      )}
    </div>
  );
};

export default BlogDetail;
