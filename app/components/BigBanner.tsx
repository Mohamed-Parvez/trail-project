import Image from "next/image";

interface BgProps {
  backgroundImage: string;
  title: string;
  subtitle: string;
}

const BgImage = ({ backgroundImage, title, subtitle }: BgProps) => {
  return (
    <div className={`h-full w-full min-w-[1100px] ${backgroundImage}
    bg-cover bg-no-repeat rounded-3xl`}>
      <div className="flex h-full flex-col items-start justify-between
      p-6 lg:px-20 lg:py-10">
        <div className="flex items-center justify-center gap-4">
          <div className="rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-yellow-500 p-3">
            <Image
              src={"/arrow.png"}
              alt="github-img"
              height={30}
              width={30}
            />
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="font-extrabold text-white ">{title}</h4>
            <p className="text-[14px] text-white">{subtitle}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

const BigBanner = () => {
  return (
    <>
      <section className="2xl:mx-auto 2xl:max-w-[1440px] relative 
      flex flex-col py-10 lg:py-20 xl:mb-20">

        <div className="hide-scrollbar flex h-[340px] w-full items-start justify-start 
        gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]">

          <BgImage
            backgroundImage="bg-bg-2"
            title="Sword Play"
            subtitle="New Era of Driven"
          />
          <BgImage
            backgroundImage="bg-bg-1"
            title="Sound Era"
            subtitle="Flawful Cold Weather"
          />
        </div>

        <div className="flex items-end justify-end mt-10 px-6 lg:-mt-60 lg:mr-6">
          <div className="bg-black p-8 lg:max-w-[500px] xl:max-w-[734px] xl:rounded-3xl
          xl:px-16 xl:py-20 relative w-full overflow-hidden rounded-3xl">
            <h2 className="text-[24px] md:text-[32px] lg:text-[42px] xl:text-[52px] 2xl:text-[65px]
            capitalize text-white"><strong>Essential Element</strong> And Purge Tool For Action !</h2>
            <p className="text-[14px] xl:text-[16px] mt-5 text-white">
              This is an essential element for web development and most
               importantly it's great for the right and inovation and 
               meaningful circumstances as well and it cannot be approved
               as fixed
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default BigBanner