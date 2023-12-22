import Image from "next/image"

const DubNav = () => {
  return (
    <>
      <nav className="px-5 flex items-center justify-between
       mx-auto max-w-[1440px] py-2 lg:px-20 cursor-pointer">
        <div className="flex items-center">
          <Image
            src="/attio.svg"
            alt="logo"
            height={150}
            width={150}
          />
          <span>
            <div className="hidden px-5 h-full lg:flex mx-auto hover:transition-all hover:font-bold">
              <ul className="flex space-x-12">
                <li className="text-[14px] text-gray-500 font-medium hover:transition-all hover:font-bold">
                  Home
                </li>
                <li className="text-[14px] text-gray-500 font-medium hover:transition-all hover:font-bold">
                  Data List
                </li>
                <li className="text-[14px] text-gray-500 font-medium hover:transition-all hover:font-bold">
                  Programs
                </li>
                <li className="text-[14px] text-gray-500 font-medium hover:transition-all hover:font-bold">
                  Help
                </li>
                <li className="text-[14px] text-gray-500 font-medium hover:transition-all hover:font-bold">
                  About
                </li>
              </ul>
            </div>
          </span>

        </div>

        <Image
          src={"/menu.svg"}
          alt="menu"
          height={18}
          width={18}
          className="opacity-60 lg:hidden"
        />

        <div className="hidden lg:block">
          <div className="flex space-x-1">
            <button className="text-[14px] px-4 py-2 font-medium bg-white text-gray-500 rounded-full hover:transition-all hover:font-bold">
              Log In
            </button>

            <button className="text-[14px] px-4 py-2 font-medium bg-black text-white rounded-full hover:text-black hover:bg-white shadow-md ring-1 ring-black hover:transition-all hover:font-bold">
              Sign Up
            </button>
          </div>
        </div>
      </nav>
    </>
  )
}

export default DubNav