'use client'
import Navbar from "@/components/navbar";
import { useParams } from "next/navigation";
import { fetchBlogData } from '@/services/blogUtils';
import PostPreview from "@/components/postPreview";

async function getData(topic) {
  var topicEndpoint = "";
  switch (topic) {
    case "travel":
      topicEndpoint = "travel-blogs";
      break;
    default:
      break;
  }

  try {
    const url = `https://inglespalmundo.com/api/${topicEndpoint}`;
    const blogData = await fetchBlogData(url);
    return blogData;
  } catch (error) {
    console.error("Error fetching blog data:", error);
  }
}

export default async function Page() {
    const {topic} = useParams();
    const data = await getData(topic);
  return (
    <div className=" w-full ">
        <article className="mb-32 px-5 sm:px-16 xl:px-64">
            <Navbar />
            {data && data.map((blog) => (
            <PostPreview
                key={blog.id}
                title={blog.contentMetadata.title}
                coverImage={blog.contentMetadata.coverImage}
                date={blog.contentMetadata.date}
                author={blog.contentMetadata.author}
                slug={blog.id}
                excerpt={blog.contentMetadata.excerpt}
                topic={topic}
            />
            ))}
        </article>
    </div>
  );
}
