import Link from "next/link";

const Navbar = () => {
    return(
      <section className="w-full flex-col md:flex-row flex items-start md:justify-between my-8 md:my-24">
        <Link href="/">
          <h1 className="w-full text-6xl md:text-8xl text-start font-bold tracking-tighter leading-tight md:pr-8">
              The Pitahaya.
          </h1>
        </Link>  
      </section>
    )

}

export default Navbar;