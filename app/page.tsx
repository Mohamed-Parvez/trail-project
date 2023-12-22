import Image from "next/image";

export default function Home() {
  return (
    <>
      <nav className="flex items-center justify-between mx-auto max-w-[1440px] px-6 lg:px-20 py-6">
        <Image
          src="/hilink-logo.svg"
          alt="logo"
          height={32}
          width={75}
        />
        <ul className="hidden md:flex items-center justify-center gap-12 ">
          <li className="text-black text-[16px] font-400 hover:font-bold pb-1.5 transition-all ">
            Home
          </li>
          <li className="text-black text-[16px] font-400 hover:font-bold pb-1.5 transition-all ">
            Companion
          </li>
          <li className="text-black text-[16px] font-400 hover:font-bold pb-1.5 transition-all ">
            Guide
          </li>
          <li className="text-black text-[16px] font-400 hover:font-bold pb-1.5 transition-all ">
            About
          </li>
        </ul>
        <button className="hidden md:block text-white bg-black px-8 py-4 rounded-full transition-all hover:font-bold">
          Sign In
        </button>
        <Image
          className="sm:block md:hidden"
          src="/menu.svg"
          alt="menu"
          height={30}
          width={30}
        />
      </nav>
    </>
  )
}
