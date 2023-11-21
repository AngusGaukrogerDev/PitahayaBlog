'use client'
import Navbar from '@/components/navbar';
import { useParams } from 'next/navigation'
import { fetchPostData } from '@/services/blogUtils';
import PostHeader from '@/components/postHeader';
import PostBody from '@/components/postBody';

async function getData(topic, slug) {
  var topicEndpoint = "";
  var topicCapitalised = ""
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

  try{
    const url = `https://inglespalmundo.com/api/${topicEndpoint}/${slug}`;
    const blogData = await fetchPostData(url, topicCapitalised);
    return blogData;
  } catch (error) {
  console.error("Error fetching blog data:", error);
}
}

export default async function Page() {
  const {topic, slug} = useParams();
  const data = await getData(topic, slug)
  return(
    
    <div className=' w-full '>
      <article className="mb-32 px-5 sm:px-16 xl:px-64">
        <Navbar />
        <PostHeader 
          title = {data.contentMetadata.title}
          coverImage={data.contentMetadata.coverImage}
          date={data.contentMetadata.date}
          author={data.contentMetadata.author}
        />
        <PostBody 
        content={data.contentHtml}
        />
      </article>
    </div>
    
  );
}