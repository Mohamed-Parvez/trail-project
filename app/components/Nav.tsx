import Image from "next/image"
import Link from "next/link"

const Nav = () => {
  return (
    <>
      <nav className="flex items-center justify-between mx-auto max-w-[1440px] px-6 lg:px-20 3xl:px-0 relative z-30 py-5">
        <Image
          className="hover:transition-opacity hover:opacity-70 hover:px-0.5"
          height={29}
          width={74}
          src={"/hilink-logo.svg"}
          alt="logo"
        />
        <ul className="hidden h-full gap-12 md:flex">
          <Link href={"/"} className="text-[16px] font-[400] flex items-center justify-center cursor-pointer pb-1.5 transition-all hover:font-bold">
            Home
          </Link>
          <Link href={"/"} className="text-[16px] font-[400] flex items-center justify-center cursor-pointer pb-1.5 transition-all hover:font-bold">
            Companion
          </Link>
          <Link href={"/"} className="text-[16px] font-[400] flex items-center justify-center cursor-pointer pb-1.5 transition-all hover:font-bold">
            Guide
          </Link>
          <Link href={"/"} className="text-[16px] font-[400] flex items-center justify-center cursor-pointer pb-1.5 transition-all hover:font-bold">
            About
          </Link>
        </ul>
        <div className="md:flex items-center justify-center hidden">
          <button className="flex items-center justify-between gap-3 rounded-full border px-8 py-4 text-white transition-all bg-black hover:font-bold">
            Sign In
          </button>
        </div>
        <Image
          className="md:hidden"
          src={"/menu.svg"}
          alt="list"
          height={29}
          width={30}
        />
      </nav>
    </>
  )
}

export default Nav