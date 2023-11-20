'use client'
import Navbar from '@/components/navbar';
import { useParams, useRouter } from 'next/navigation'
import { fetchPostData } from '@/services/blogUtils';
import PostHeader from '@/components/postHeader';
import PostBody from '@/components/postBody';

async function getData(topic, slug) {
  var topicEndpoint = "";
  switch(topic){
    case "travel":
      topicEndpoint = "travel-blogs"
      break;
    default:
      break;
  }

  try{
    const url = `https://inglespalmundo.com/api/${topicEndpoint}/${slug}`;
    const blogData = await fetchPostData(url);
    return blogData;
  } catch (error) {
  console.error("Error fetching blog data:", error);
}
}

export default async function Page() {
  const router = useRouter();
  const {topic, slug} = useParams();

  const data = await getData(topic, slug)
  return(
    
    <div className=' w-full'>
      <article className="mb-32 px-64">
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