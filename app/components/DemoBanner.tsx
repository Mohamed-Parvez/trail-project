import Image from "next/image";

interface CardProps {
  background: string;
  Title : string;
  subTitle : string;
}

const Card = ({ background, Title, subTitle }: CardProps) => {
  return (
    <div className={`w-full h-full min-w-[1100px] ${background}
    bg-cover bg-no-repeat rounded-3xl`}>
      <div className="flex gap-3 items-center justify-start p-6 px-8 lg:px-20">
        <div className="bg-gradient-to-r from-amber-500 via-orange-600
        to-yellow-500 rounded-full px-3 py-3">
          <Image
            src="/arrow.png"
            alt="arrow"
            height={30}
            width={30}
          />
        </div>
        <div className="flex flex-col items-start justify-start">
          <p className="text-white text-[16px] font-extrabold">{Title}</p>
          <p className="text-white">{subTitle}</p>
        </div>
      </div>

    </div>
  )
}

const DemoBanner = () => {
  return (
    <section className="flex flex-col 2xl:mx-auto 2xl:max-w-[1440px]
    py-10 lg:py-20 2xl:mb-32 xl:py-32 relative overflow-x-auto hide-scrollbar">
      <div className="flex w-full h-[340px]
       lg:h-[400px] xl:h-[640px] gap-6">

        <Card
          background="bg-bg-2"
          Title="Ready Road"
          subTitle="Lion Kingdom Fire"
        />
        <Card
          background="bg-bg-1"
          Title="MAD MAX"
          subTitle="A Fury Game"
        />
      </div>

      <div className="mt-16 flex items-center justify-center lg:items-end lg:justify-end p-8
      lg:-mt-52 relative xl:-mt-64 lg:mr-6 lg:px-10 2xl:-mt-64">
        <div className="bg-black h-auto w-auto
        lg:w-[500px] xl:w-[760px] 2xl:w-[840px]
        px-8 py-6 lg:px-14 xl:px-16 2xl:px-24 xl:py-20 2xl:py-28
        flex flex-col gap-2 pt-10 rounded-3xl">
          <h3 className="text-[25px] lg:text-[42px] xl:text-[52px] 2xl:text-[72px] text-white">
            <strong>Essential Element </strong> And Purge Tool For Action !
          </h3>
          <p className="text-[14px] text-white">
            This is an essential element for web development and
            most importantly it's great for the right and inovation
            and meaningful circumstances as well and it cannot be
            approved as fixed
          </p>
        </div>
      </div>

    </section>
  )
}

export default DemoBanner

