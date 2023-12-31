const PostTitle = ({ children }) => {
  return (
    <h1 className="text-blackaf-default text-4xl md:text-4xl lg:text-4xl font-bold tracking-tighter leading-tight md:leading-none mb-12 text-left md:text-left">
      {children}
    </h1>
  )
}

export default PostTitle