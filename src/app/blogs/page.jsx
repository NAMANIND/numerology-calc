// pages/index.js
"use client";
import { useEffect, useState } from "react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../lib/firebaseConfig";
import "tailwindcss/tailwind.css";

const Home = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    const fetchBlogs = async () => {
      let blogsQuery;
      if (selectedCategory === "All") {
        blogsQuery = collection(db, "blogs");
      } else {
        blogsQuery = query(
          collection(db, "blogs"),
          where("category", "==", selectedCategory)
        );
      }

      const blogsSnapshot = await getDocs(blogsQuery);
      const blogsList = blogsSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setBlogs(blogsList);
    };

    fetchBlogs();
  }, [selectedCategory]);

  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Blog List</h1>
      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Filter by Category
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          <option value="All">All</option>
          <option value="Numerology">Numerology</option>
          <option value="Astrology">Astrology</option>
        </select>
      </div>
      <ul className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        {blogs.map((blog) => (
          <li key={blog.id} className="mb-4">
            <a href={`/blog/${blog.id}`} className="text-blue-500">
              {blog.title}
            </a>
            {blog.heroImage && (
              <div className="mt-2">
                <img
                  src={blog.heroImage}
                  alt={blog.title}
                  className="max-w-full h-auto"
                />
              </div>
            )}
            <p className="mt-2">{blog.category}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;
