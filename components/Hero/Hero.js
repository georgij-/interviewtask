import Image from "next/image";
import HeroImage from "../../public/images/tv.png";

import hero1 from "../../public/images/hero/1.png";
import hero2 from "../../public/images/hero/2.png";
import hero3 from "../../public/images/hero/3.png";
import hero4 from "../../public/images/hero/4.png";

function Hero() {
  return (
    <div className="hero bg-[#FDCD0B] flex justify-center items-stretch select-none h-[640px]">
      <div className="lg:container mx-auto flex flex-col-reverse lg:flex-row justify-flex-end lg:justify-center items-center">
        <div className="w-full mb-4 lg:mb-0 lg:w-2/3">
          <h2 className="text-xl xl:text-6xl text-white font-light">Refresh your</h2>
          <h1 className="text-3xl xl:text-8xl pt-4 font-bold">TV EXPERIENCE</h1>
          <div className="flex w-full select-none">
            <Image src={hero3} width={120} objectFit="contain" />
            <Image src={hero4} width={120} objectFit="contain" />
            <Image src={hero1} width={120} objectFit="contain" />
            <Image src={hero2} width={120} objectFit="contain" />
          </div>
        </div>
        <div className="w-full mb-8 h-32 lg:mb-0 lg:w-1/3 relative select-none lg:h-full">
          <Image
            alt="Hero Image"
            src={HeroImage}
            layout="fill"
            objectFit="contain"
            objectPosition="center"
          />
        </div>
      </div>
    </div>
  );
}
export default Hero;
