import Link from "next/link";

const Navbar = () => {
    return(
      <section className="text-blackaf-default w-full flex-col md:flex-row flex items-start md:justify-between mt-5 mb-3 sm:my-15">
        <Link href="/">
          <h1 className="w-full text-6xl md:text-8xl text-start font-bold tracking-tighter leading-tight ">
              The Pitahaya.
          </h1>
        </Link>  
      </section>
    )

}

export default Navbar;