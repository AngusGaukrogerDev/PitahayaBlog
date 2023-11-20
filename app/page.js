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
    <div className="h-full w-full flex flex-col justify-center items-center mx-auto px-5 sm:px-16 xl:px-64 ">
      <Navbar />
      <SectionHeader headerText={"Travel"}/>
      <BlogHomePage blogData={travelBlogData} topic={"travel"} />
      <SectionHeader headerText={"Tech"}/>
      <BlogHomePage blogData={travelBlogData} topic={"travel"}/>
      <SectionHeader headerText={"Lifestyle"}/>
      <BlogHomePage blogData={travelBlogData} topic={"travel"}/>
    </div>
  );
}
export default Page;