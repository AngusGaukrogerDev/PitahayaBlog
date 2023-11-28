import BlogHomePage from "@/components/blog-home-page"
import Navbar from "@/components/navbar"
import SectionHeader from "@/components/sectionHeader"
import SectionViewMore from "@/components/sectionViewMore";
import { fetchBlogData } from '@/services/blogUtils';
import Footer from "@/components/footer"

async function getData(topic) {
  var topicCapitalised = "";
  var topicEndpoint = "";
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
  }
  try{
  const url = `https://inglespalmundo.com/api/${topicEndpoint}`;
  const blogData = await fetchBlogData(url, topicCapitalised);
  return blogData;
  } catch (error) {
  console.error("Error fetching blog data:", error);
}
}

const Page = async() => {
  const travelBlogData = await getData("travel");
  const techBlogData = await getData("tech");
  const lifestyleBlogData = await getData("lifestyle");
  return(
    <div className="h-full w-full flex flex-col justify-center items-center mx-auto px-3 sm:px-16 xl:px-64 ">
      <Navbar />
      <SectionHeader headerText={"Travel"} topic={"travel"}/>
      <BlogHomePage blogData={travelBlogData} topic={"travel"} />
      <SectionViewMore text={"Travel"} topic={"travel"}/>
      <SectionHeader headerText={"Tech"} topic={"tech"}/>
      <BlogHomePage blogData={techBlogData} topic={"tech"}/>
      <SectionViewMore text={"Tech"} topic={"tech"}/>
      <SectionHeader headerText={"Lifestyle"} topic={"lifestyle"}/>
      <BlogHomePage blogData={lifestyleBlogData} topic={"lifestyle"}/>
      <SectionViewMore text={"Lifestyle"} topic={"lifestyle"}/>
      <Footer />

    </div>
  );
}
export default Page;