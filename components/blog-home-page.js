import PostPreview from "./postPreview";

const BlogHomePage = (props) => {
  return (
    <section>
      <div className="grid grid-cols-1 md:grid-cols-3 md:gap-x-5 lg:gap-x-10 gap-y-14 md:gap-y-32 mb-8 md:mb-16">
        {props.blogData && props.blogData.map((blog) => (
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

