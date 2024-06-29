"use client";
import React, { useState, useRef, useMemo } from "react";
import dynamic from "next/dynamic";
import { addDoc, collection } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { db } from "../lib/firebaseConfig";

// Dynamically import Jodit Editor with no SSR
const JoditEditor = dynamic(() => import("jodit-react"), {
  ssr: false,
});

const BlogAdmin = () => {
  const editor = useRef(null);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [heroImage, setHeroImage] = useState(null);
  const [category, setCategory] = useState("");
  const [fileURL, setFileURL] = useState("");

  const config = useMemo(
    () => ({
      readonly: false, // all options from https://xdsoft.net/jodit/docs/,
      placeholder: content || "Start typing...",
    }),
    [content]
  );

  // Function to handle image uploads to Firebase Storage
  const handleImageUpload = async (file) => {
    try {
      const storage = getStorage();
      const fileRef = ref(storage, `images/${file.name}`);
      await uploadBytes(fileRef, file);
      const downloadURL = await getDownloadURL(fileRef);
      console.log(`Uploaded ${file.name}. URL: ${downloadURL}`);
      return downloadURL;
    } catch (error) {
      console.error(`Error uploading ${file.name}:`, error);
      throw error;
    }
  };

  // Function to handle hero image change
  const handleHeroImageChange = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const downloadURL = await handleImageUpload(file);
      setHeroImage(downloadURL);
    }
  };

  // Function to handle file upload and return link
  const handleFileUpload = async (e) => {
    const file = e.target.files[0];
    if (file) {
      const downloadURL = await handleImageUpload(file);
      setFileURL(downloadURL);
    }
  };

  // Function to handle form submission
  const handleSubmit = async () => {
    if (!title || !content || !category) {
      alert("Please fill in all fields.");
      return;
    }

    try {
      // Add document to Firestore collection
      await addDoc(collection(db, "blogs"), {
        title,
        content,
        heroImage,
        category,
      });

      // Clear form fields and show success message
      setTitle("");
      setContent("");
      setHeroImage(null);
      setCategory("");
      alert("Blog submitted successfully!");
    } catch (error) {
      console.error("Error submitting blog:", error);
      alert("An error occurred while submitting the blog. Please try again.");
    }
  };

  return (
    <div className="max-w-4xl mx-auto py-10 px-6">
      <h1 className="text-3xl font-bold mb-6 text-center">Create a New Blog</h1>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Title
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Category
        </label>
        <select
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        >
          <option value="" disabled>
            Select category
          </option>
          <option value="Numerology">Numerology</option>
          <option value="Astrology">Astrology</option>
        </select>
      </div>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Hero Image
        </label>
        <input type="file" accept="image/*" onChange={handleHeroImageChange} />
        {heroImage && (
          <div className="mt-4">
            <img src={heroImage} alt="Hero" className="max-w-full h-auto" />
          </div>
        )}
      </div>
      <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Upload File
        </label>
        <input type="file" onChange={handleFileUpload} />
        {fileURL && (
          <div className="mt-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              File URL
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={fileURL}
              readOnly
            />
            <button
              className="mt-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              onClick={() => navigator.clipboard.writeText(fileURL)}
            >
              Copy URL
            </button>
          </div>
        )}
      </div>
      <div className="bg-white shadow-md text-black rounded p-4 mb-6">
        <label className="block text-gray-700 text-sm font-bold mb-2">
          Content
        </label>
        <JoditEditor
          ref={editor}
          value={content}
          config={config}
          tabIndex={1} // tabIndex of textarea
          onBlur={(newContent) => setContent(newContent)} // preferred to use only this option to update the content for performance reasons
          onChange={(newContent) => {}}
        />
      </div>
      <button
        onClick={handleSubmit}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
      >
        Submit
      </button>
    </div>
  );
};

export default BlogAdmin;
