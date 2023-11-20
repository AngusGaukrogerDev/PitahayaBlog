const SectionHeader = (props) => {
    return(
        <section className="w-full my-7 text-5xl md:text-5xl font-semibold tracking-tighter leading-tight md:pr-8">
            <h2 className="font-semibold">{props.headerText}</h2>
        </section>
    )
}
export default SectionHeader;