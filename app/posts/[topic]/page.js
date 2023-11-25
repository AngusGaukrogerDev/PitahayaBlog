'use client'
import Navbar from "@/components/navbar";
import { useParams } from "next/navigation";
import { fetchBlogData } from '@/services/blogUtils';
import PostPreview from "@/components/postPreview";
import SectionHeader from "@/components/sectionHeader";
import Footer from "@/components/footer"

async function getData(topic) {
  var topicEndpoint = "";
  var topicCapitalised = "";
  switch (topic) {
    case "travel":
      topicEndpoint = "travel-blogs";
      topicCapitalised = "Travel"
      break;
    case "tech":
      topicEndpoint = "tech-blogs";
      topicCapitalised = "Tech"
      break;
    case "lifestyle":
      topicEndpoint = "lifestyle-blogs";
      topicCapitalised = "Lifestyle"
      break;
    default:
      break;
  }

  try {
    const url = `https://inglespalmundo.com/api/${topicEndpoint}`;
    const blogData = await fetchBlogData(url, topicCapitalised);
    return {blogData, topicCapitalised};
  } catch (error) {
    console.error("Error fetching blog data:", error);
  }
}

export default async function Page() {
    const {topic} = useParams();
    const {blogData, topicCapitalised} = await getData(topic);
  return (
    <div className=" w-full ">
        <article className="mb-32 px-5 sm:px-16 xl:px-64">
            <Navbar />
            <SectionHeader headerText={topicCapitalised} topic={topic}  />
            <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-5 lg:gap-x-10 gap-y-14 md:gap-y-32">
              {blogData && blogData.map((blog) => (
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
            </div>
            <Footer />
        </article>
    </div>
  );
}
