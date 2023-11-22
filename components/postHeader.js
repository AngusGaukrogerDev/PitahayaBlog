import Avatar from './avatar'
import DateFormatter from './dateFormatter'
import CoverImage from './coverImage'
import PostTitle from './postTitle'
// import type Author from '../interfaces/author'


const PostHeader = ({ title, coverImage, date, author }) => {
  return (
    <> 
      <div className="mb-8 md:mb-16 sm:mx-0 ">
        <CoverImage title={title} src={coverImage} />
      </div>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:block md:mb-12">
        <Avatar name={author.name} picture={author.picture} />
      </div>
      
        <div className="block md:hidden mb-6">
            <Avatar name={author.name} picture={author.picture} />
        </div>
        <div className="mb-6 text-lg">
            <DateFormatter dateString={date} />
        </div>
    </>
  )
}

export default PostHeader
