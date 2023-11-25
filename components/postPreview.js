import CoverImage from "./coverImage";
import DateFormatter from "./dateFormatter";
import Link from 'next/link'
import Avatar from "./avatar";
const PostPreview = ({
    title,
    coverImage,
    date,
    excerpt,
    author,
    slug,
    topic
  }) => {
    return (
        <div>
          <div className="my-5">
            <CoverImage slug={slug} title={title} src={coverImage} />
          </div>
          <h3 className="text-xl  md:text-xl xl:text-xl font-semibold mb-3 leading-snug h-20 sm:h-22 xl:h-22">
            <Link
              as={`/posts/${topic}/${slug}/`}
              href="posts/[topic]/[slug]/"
              className="hover:underline"
            >
              {title}
            </Link>
          </h3>
          <div className="text-lg mb-3">
            <DateFormatter dateString={date} />
          </div>
          {/* <p className="text-lg leading-relaxed mb-4">{excerpt}</p> */}
          <Avatar name={author.name} picture={author.picture} />
        </div>
      )
}
export default PostPreview;