'use client'
import React, { useState, useEffect } from "react";
import { fetchBlogData } from '../services/blogUtils';

const BlogHomePage = () => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = "https://inglespalmundo.com/api/travel-blogs/";

      const blogArray = await fetchBlogData(url);
      setBlogData(blogArray);
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <div>
      {blogData.map((blog, index) => (
        <div className="my-5" key={index}>
          <p>{blog.contentMetadata.title}</p>
          <p>{blog.contentMetadata.date}</p>
          <div dangerouslySetInnerHTML={{ __html: blog.contentHtml }} />
        </div>
      ))}
    </div>
  );
}

export default BlogHomePage;