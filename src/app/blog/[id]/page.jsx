// pages/blog/[id].js
"use client";
import { useEffect, useState } from "react";

import { doc, getDoc } from "firebase/firestore";
import { db } from "../../lib/firebaseConfig";
const BlogDetail = ({ params }) => {
  const { id } = params;
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    if (id) {
      const fetchBlog = async () => {
        const blogDoc = doc(db, "blogs", id);
        const blogSnapshot = await getDoc(blogDoc);
        if (blogSnapshot.exists()) {
          setBlog(blogSnapshot.data());
        } else {
          console.log("No such document!");
        }
      };

      fetchBlog();
    }
  }, [id]);

  if (!blog) return <div>Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <h1 className="text-3xl font-bold mb-6 text-center">{blog.title}</h1>
      {blog.heroImage && (
        <div className="mb-6">
          <img
            src={blog.heroImage}
            alt="Hero"
            className="max-w-full h-auto mx-auto"
          />
        </div>
      )}
      <div
        className="prose"
        dangerouslySetInnerHTML={{ __html: blog.content }}
      ></div>
      {blog.images && blog.images.length > 0 && (
        <div className="mt-6">
          <h2 className="text-2xl font-bold mb-4">Images</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {blog.images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Blog image ${index + 1}`}
                className="max-w-full h-auto"
              />
            ))}
          </div>
        </div>
      )}
      <div className="mt-6">
        <h2 className="text-2xl font-bold">Category</h2>
        <p className="text-lg">{blog.category}</p>
      </div>
    </div>
  );
};

export default BlogDetail;
