import markdownStyles from './markdown-styles.module.css'

const PostBody = ({ content }) => {
  return (
    <div className="text-blackaf-default">
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}

export default PostBody
