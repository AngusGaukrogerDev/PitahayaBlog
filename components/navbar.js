import Link from "next/link";

const Navbar = () => {
    return(
      <section className="w-full flex-col md:flex-row flex items-start md:justify-between mt-16 mb-16 md:mb-12">
        <Link href="/">
          <h2 className="w-full text-5xl md:text-8xl text-start font-bold tracking-tighter leading-tight md:pr-8">
              The Pitahaya.
          </h2>
        </Link>  
      </section>
    )

}

export default Navbar;