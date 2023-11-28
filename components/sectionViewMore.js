import Link from 'next/link'

const SectionViewMore = (props) => {
    return(
        <section className=" w-full mt-5 md:mt-3 mb-7 md:mb-12 text-xl md:text-3xl font-semibold tracking-tighter leading-tight md:pr-8 text-blackaf-default">
            <Link
            as={`/posts/${props.topic}/`}
            href="posts/[topic]/"
            className="hover:underline flex flex-row justify-start items-center ">
                <h3 className="font-bold ">View More {props.text} Articles 
                </h3>
                <svg fill="#0f1108" width="40px" height="38px" viewBox="0 0 24.00 24.00" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.048"></g><g id="SVGRepo_iconCarrier"> <g data-name="Layer 2"> <g data-name="arrowhead-right"> <rect width="24" height="24" transform="rotate(-90 12 12)" opacity="0"></rect> <path d="M18.78 11.37l-4.78-6a1 1 0 0 0-1.41-.15 1 1 0 0 0-.15 1.41L16.71 12l-4.48 5.37a1 1 0 0 0 .13 1.41A1 1 0 0 0 13 19a1 1 0 0 0 .77-.36l5-6a1 1 0 0 0 .01-1.27z"></path> <path d="M7 5.37a1 1 0 0 0-1.61 1.26L9.71 12l-4.48 5.36a1 1 0 0 0 .13 1.41A1 1 0 0 0 6 19a1 1 0 0 0 .77-.36l5-6a1 1 0 0 0 0-1.27z"></path> </g> </g> </g></svg>

            </Link>
        </section>
    )
}
export default SectionViewMore;