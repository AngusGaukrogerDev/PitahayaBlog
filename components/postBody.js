import markdownStyles from './markdown-styles.module.css'

const PostBody = ({ content }) => {
  return (
    <div>
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  )
}

export default PostBody