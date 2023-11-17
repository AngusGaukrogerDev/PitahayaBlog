'use client'
import React, { useState, useEffect } from "react";
import { fetchBlogData } from '../services/blogUtils';
import PostPreview from "./postPreview";
const BlogHomePage = (props) => {
  const [blogData, setBlogData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const url = `https://inglespalmundo.com/api/${props.topic}/`;

      const blogArray = await fetchBlogData(url);
      setBlogData(blogArray);
    };

    fetchData();
  }, []); // Empty dependency array ensures the effect runs only once on component mount

  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-5 lg:gap-x-10 gap-y-20 md:gap-y-32 mb-16">
        {blogData.map((blog, index) => (
          <PostPreview
            key={index}
            title={blog.contentMetadata.title}
            coverImage={blog.contentMetadata.coverImage}
            date={blog.contentMetadata.date}
            author={blog.contentMetadata.author}
            slug={index}
            excerpt={blog.contentMetadata.excerpt}
          />
        ))}
      </div>
    </section>
  );
}

export default BlogHomePage;