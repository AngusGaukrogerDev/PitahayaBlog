import BlogHomePage from "@/components/blog-home-page"
import Navbar from "@/components/navbar"
import SectionHeader from "@/components/sectionHeader"
import { fetchBlogData } from '@/services/blogUtils';

async function getData(topic) {
  try{
  const url = `https://inglespalmundo.com/api/${topic}`;
  const blogData = await fetchBlogData(url);
  return blogData;
  } catch (error) {
  console.error("Error fetching blog data:", error);
}
}

const Page = async() => {
  const travelBlogData = await getData("travel-blogs");
  return(
    <div className="h-full w-full flex flex-col justify-center items-center bg-whitey-default mx-auto px-5 ">
      <Navbar />
      <SectionHeader headerText={"Travel"}/>
      <BlogHomePage blogData={travelBlogData} />
      <SectionHeader headerText={"Tech"}/>
      <BlogHomePage blogData={travelBlogData}/>
      <SectionHeader headerText={"Lifestyle"}/>
      <BlogHomePage blogData={travelBlogData}/>
    </div>
  );
}
export default Page;