import PostPreview from "./postPreview";

const BlogHomePage = (props) => {
  const firstThreeBlogs = props.blogData.slice(0, 3);
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-5 lg:gap-x-10 gap-y-14 md:gap-y-32 mb-7 md:mb-10 ">
        {props.blogData && firstThreeBlogs.map((blog) => (
          <PostPreview
            key={blog.id}
            title={blog.contentMetadata.title}
            coverImage={blog.contentMetadata.coverImage}
            date={blog.contentMetadata.date}
            author={blog.contentMetadata.author}
            slug={blog.id}
            excerpt={blog.contentMetadata.excerpt}
            topic={props.topic}
          />
        ))}
      </div>
    </section>
  );
  
}
export default BlogHomePage;

