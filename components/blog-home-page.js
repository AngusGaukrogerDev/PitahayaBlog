import PostPreview from "./postPreview";

const BlogHomePage = (props) => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-5 lg:gap-x-10 gap-y-20 md:gap-y-32 mb-16">
        {props.blogData && props.blogData.map((blog, index) => (
          <PostPreview
            key={index}
            title={blog.contentMetadata.title}
            coverImage={blog.contentMetadata.coverImage}
            date={blog.contentMetadata.date}
            author={blog.contentMetadata.author}
            slug={index}
            excerpt={blog.contentMetadata.excerpt}
          />
        ))}
      </div>
    </section>
  );
  
}
export default BlogHomePage;

