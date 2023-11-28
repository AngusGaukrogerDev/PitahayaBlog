import markdownStyles from './markdown-styles.module.css'

const PostBody = ({ content }) => {
  return (
    <div className="text-blackaf-default mb-5 sm:mb-14 md:mb-14">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}

export default PostBody
