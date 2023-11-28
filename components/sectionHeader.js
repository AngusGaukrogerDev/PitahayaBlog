import Link from 'next/link'

const SectionHeader = (props) => {
    return(
        <section className="w-full my-5 md:my-6 text-4xl md:text-5xl font-semibold tracking-tighter leading-tight md:pr-8 text-blackaf-default">
            <Link
            as={`/posts/${props.topic}/`}
            href="posts/[topic]/"
            className="hover:underline">
                <h2 className="font-semibold">{props.headerText}</h2>
            </Link>
        </section>
    )
}
export default SectionHeader;