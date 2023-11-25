import Link from "next/link";
const Footer = () => {
    return(
        <Link href="/" className="hover:underline mt-24  mb-24 text-xl font-medium  flex flex-row justify-center items-center w-full">
            <h2>© The Pitahaya. {new Date().getFullYear()} </h2> 
        </Link>
    )
}
export default Footer;