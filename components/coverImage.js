import Link from 'next/link'
import Image from 'next/image'
const CoverImage = ({ title, src, slug }) => {
    const image = (
      <Image
        src={src}
        alt={`Cover Image for ${title}`}
        className={'shadow-sm w-full hover:shadow-lg transition-shadow duration-200 '
        }
        width={1300}
        height={630}
      />
    )
    return (
      <div className="sm:mx-0">
        {slug ? (
          <Link as={`/posts/${slug}`} href="/posts/[slug]" aria-label={title}>
            {image}
          </Link>
        ) : (
          image
        )}
      </div>
    )
  }
  
  export default CoverImage