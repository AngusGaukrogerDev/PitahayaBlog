import BlogHomePage from "@/components/blog-home-page"
import Navbar from "@/components/navbar"
import { render } from "react-dom"
export default function Home() {
    return(
      <div className="h-full w-full flex flex-col justify-center items-center bg-whitey-default ">
        <Navbar />
        <BlogHomePage />
      </div>
    )
}
