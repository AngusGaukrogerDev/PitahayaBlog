'use client'
import Navbar from '@/components/navbar';
import { useParams } from 'next/navigation'
import { fetchPostData, fetchBlogData } from '@/services/blogUtils';
import PostHeader from '@/components/postHeader';
import PostBody from '@/components/postBody';
import SectionHeader from '@/components/sectionHeader';
import PostPreview from '@/components/postPreview';
import Footer from "@/components/footer"

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
    const urlRecommended = `https://inglespalmundo.com/api/${topicEndpoint}`;

    const data = await fetchPostData(url, topicCapitalised);
    const recommendedPosts = await fetchBlogData(urlRecommended, topicCapitalised);

    return{data, recommendedPosts, topicCapitalised};
  } catch (error) {
  console.error("Error fetching blog data:", error);
}
}

export default async function Page() {
  const {topic, slug} = useParams();
  const {data, recommendedPosts, topicCapitalised} = await getData(topic, slug)
  const firstThreeBlogs = recommendedPosts.slice(0, 3);
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
        <SectionHeader headerText={`More ${topicCapitalised} Articles`} topic={topic} />
        <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-5 lg:gap-x-10 gap-y-14 md:gap-y-32 mb-7 md:mb-10 ">
        {recommendedPosts && firstThreeBlogs.map((blog) => (
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