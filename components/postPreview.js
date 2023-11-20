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
          <h3 className="text-2xl mb-3 leading-snug h-28">
            <Link
              as={`/posts/${topic}/${slug}`}
              href="posts/[slug]"
              className="hover:underline"
            >
              {title}
            </Link>
          </h3>
          <div className="text-lg mb-4">
            <DateFormatter dateString={date} />
          </div>
          {/* <p className="text-lg leading-relaxed mb-4">{excerpt}</p> */}
          <Avatar name={author.name} picture={author.picture} />
        </div>
      )
}
export default PostPreview;