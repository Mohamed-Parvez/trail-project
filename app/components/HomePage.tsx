import Image from "next/image"

const HomePage = () => {
  return (
    <>
      <div className="flex flex-col items-center justify-center mt-10">
        <div className="py-5 bg-white shadow-sm ring-1
         ring-gray-200 rounded-full h-8 w-[300px] lg:w-[380px]
           flex items-center justify-center space-x-3
          hover:bg-gray-50 cursor-pointer">
          <h4 className="text-[12px] lg:text-[14px] text-gray-700 font-bold">Wonderful form of web Design with Waver</h4>
          <span className="flex items-center">
            <div className="inline-block hover:bg-gray-300 rounded-full">
              <Image
                src={"/arrow.png"}
                alt="array"
                height={22}
                width={22}
              />
            </div>
          </span>
        </div>

        <div className="flex flex-col mt-2 mx-auto items-center justify-center max-w-[310px] lg:max-w-[600px]">
          <h1 className="text-[35px] mt-5 lg:text-[55px] font-extrabold">Website Creation</h1>
          <h1 className="text-[35px] mt-[-16px] lg:text-[55px] font-extrabold bg-clip-text bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 text-transparent">WaverPowered</h1>
          <div className="max-w-[310px] lg:max-w-[560px]">
            <p className="text-center text-[16px] lg:text-[20px] text-gray-500 ">Waver is an open source powered modern website creation tool used to perform huge amount of data loading tasks</p>
          </div>
        </div>

        <div className="flex items-center justify-center space-x-3 mt-10">
          <button className="bg-black shadow-md ring-black ring-1 text-white text-[13px] lg:text-[14px]
                             rounded-full px-2 py-3 lg:px-6 hover:shadow-sm hover:ring-1
                            hover:ring-black hover:bg-white hover:text-black">
            Start for free
          </button>

          <button className="bg-white text-black text-[13px] flex items-center justify-center gap-1
                             rounded-full px-6 lg:px-8 py-2 shadow-md ring-gray-300 hover:shadow-sm hover:ring-1
                            hover:ring-black border border-gray-300">
            <span>
              <Image
                src={"/github.png"}
                alt="github-logo"
                height={30}
                width={30}
              />
            </span>
            Star on GitHub
          </button>
        </div>

        <div className="mt-14 max-w-[170px] flex flex-col mx-auto
                        items-center justify-center gap-4
                        lg:max-w-[1440px] lg:w-full lg:flex
                        lg:flex-row lg:items-center lg:justify-between 
                        lg:shadow-sm lg:ring-1 lg:ring-gray-200 lg:px-20 xl:px-64">

          <div className="flex flex-col items-center justify-center mx-auto lg:py-6">
            <h2 className="text-[35px] font-bold text-black lg:text-[55px]">
              1600
            </h2>
            <h2 className="text-gray-500 font-bold text-[18px]">
              ACTIVE USERS
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center lg:border-x-2
                          mx-auto lg:border-gray-200 lg:px-40 lg:py-6">
            <h2 className="text-[35px] font-bold text-black lg:text-[55px]">
              3M+
            </h2>
            <h2 className="text-gray-500 font-bold text-[18px]">
              ACTIVE USERS
            </h2>
          </div>
          <div className="flex flex-col items-center justify-center mx-auto lg:py-6">
            <h2 className="text-[35px] font-bold text-black lg:text-[55px]">
              30M+
            </h2>
            <h2 className="text-gray-500 font-bold text-[18px]">
              CUSTOMERS
            </h2>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center mt-[40px] lg:mt-24 gap-1 mb-8 lg:mb-10">
          <div className="flex flex-row items center justify-center gap-2">
            <h1 className="text-black text-[30px] font-bold lg:text-[55px]">Loved by</h1>
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500
                           text-[30px] font-bold lg:text-[55px]">16.7k users</span>
          </div>
          <div className="max-w-[400px] lg:max-w-[660px]">
            <p className="text-center text-[16px] lg:text-[20px] text-gray-500 ">Web based powerful web transfer protocol enhancing more powerful web assembly</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default HomePage