import BlogHomePage from "@/components/blog-home-page"
import Navbar from "@/components/navbar"
import SectionHeader from "@/components/sectionHeader"
import { render } from "react-dom"
export default function Home() {
    return(
      <div className="h-full w-full flex flex-col justify-center items-center bg-whitey-default mx-auto px-5 ">
        <Navbar />
        <SectionHeader headerText={"Travel"}/>
        <BlogHomePage topic={"travel-blogs"} />
        <SectionHeader headerText={"Tech"}/>
        <BlogHomePage topic={"travel-blogs"} />
        <SectionHeader headerText={"Lifestyle"}/>
        <BlogHomePage topic={"travel-blogs"} />

      </div>
    )
}
