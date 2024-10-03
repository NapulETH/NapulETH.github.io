/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any */

import Link from "next/link"
import Image from "next/image"
import Marquee from "react-fast-marquee";
import { RibbonContainer, Ribbon } from "react-ribbons";
import dynamic from 'next/dynamic'
const DynamicRibbon = dynamic(() => import("@components/dynamicRibbon").then(module => module.default), { ssr: false });
import { useTranslation } from "react-i18next"; 

import commune from "@assets/commune.png"
import logo from '@assets/bigLogo.svg'
import cloud1 from '@assets/cloud1.svg'
import cloud2 from '@assets/cloud2.svg'
import boatOncloud from '@assets/boatonCloud1.svg'
import castleOncloud from '@assets/castleonCloud.svg'
import templeOncloud from '@assets/templeOnCloud.svg'
import stampOnCloud from '@assets/stampOnCloud.svg'

import pescatroie from '@assets/pescatroie 2.svg'
import cloudBase from '@assets/cloud base2.svg'
import totano from '@assets/totano funk 2.svg'
import nonnetto from '@assets/nonnetto 3.svg'

function Hero() {

    const { t, i18n } = useTranslation();

    return (
        <section className="w-full relative z-10 h-fit flex flex-col items-center justify-start pt-32 lg:pt-40">

            <Image src={cloudBase} alt="cloud" className=" cloud w-96 hidden lg:block absolute -left-20 top-24"></Image>
            <Image src={cloudBase} alt="cloud" className=" cloud w-96 hidden lg:block absolute -right-20 top-10"></Image>
            <Image src={pescatroie} alt="cloud" className=" w-80 hidden lg:block absolute -left-8 top-[25%]  "></Image>
            <Image src={nonnetto} alt="cloud" className=" w-96 hidden lg:block absolute -right-14 top-[28%] "></Image>
            <Image src={totano} alt="cloud" className=" w-96 hidden lg:block absolute -left-10 top-[42%] scale-110 "></Image>
            <Image src={pescatroie} alt="cloud" className=" w-80 scale-110 hidden lg:block absolute -right-6 top-[48%] " style={{
                transform: 'scaleX(-1)'
            }}></Image>
            
            <p className=" text-[#2E2E2E] Medium w-11/12 lg:w-6/12 text-center lg:mt-6 text-2xl lg:text-2xl mt-6 relative z-50">
                {t('working')}
            </p>
            
            <div className="w-fit h-fit flex flex-col xl:flex-row items-center justify-center gap-4 lg:gap-3 mt-6 lg:mt-10">
                
                <Link href={'https://drive.google.com/drive/folders/1HYmnsq3EYEPEuYtgUgrACMvSDNn5QR0t?usp=sharing'} className=" relative z-50 p-0 w-fit h-fit">
                    <div className="min-w-[85vw] md:min-w-[50vw] xl:min-w-[15vw] xl:w-[19vw] h-fit flex flex-row items-center justify-center gap-2 py-4 px-12 bg-[#CA75AB] border-4 border-[#eddb55]">


                        <h5 className=" text-black Medium text-xl whitespace-nowrap">
                        {t('photos2024')}
                        </h5>
                    </div>
                </Link>
            </div>
            <Image src={logo} alt="big logo" className=" lg:-mt-[55%] lg:scale-[.25] scale-[0.6] -mt-[10%] relative z-[60] w-11/12"></Image>

            <h5 className=" text-black text-4xl SemiBold leading-normal text-center -mt-[15%]  lg:-mt-[53%] mb-6">
                {t('bringing')}
            </h5>
            <p className=" text-[#2E2E2E] Medium text-2xl lg:text-3xl text-center leading-normal w-11/12 lg:w-5/12">
                {t('bringinPara')}
            </p>

            <div className="w-[200vw] h-fit my-28 lg:my-40 relative flex flex-row items-center justify-center">
                <div className="w-[200vw] h-fit relative rotate-12 lg:rotate-6 bg-[#ca75ab] border-t-4 border-b-4 border-t-white border-b-white my-4">
                    <Marquee className=" overflow-hidden my-4">
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('workshops')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('devcomp')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('courses')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('artcamps')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('startup')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('talks')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('pizza')}
                        </h5>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('workshops')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('devcomp')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('courses')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('artcamps')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('startup')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('talks')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('pizza')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('workshops')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('devcomp')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('courses')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('artcamps')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('startup')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('talks')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('pizza')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('workshops')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('devcomp')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('courses')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('artcamps')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('startup')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('talks')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('pizza')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>


                    </Marquee>
                </div>
                <div className="w-[200vw] h-fit absolute z-50 -rotate-12 lg:-rotate-6 bg-[#ca75ab] border-t-4 border-b-4 border-t-white border-b-white my-4">
                    <Marquee className=" overflow-hidden my-4" direction="right">
                    <h5 className=" text-white text-3xl SemiBold">
                            {t('workshops')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('devcomp')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('courses')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('artcamps')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('startup')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('talks')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('pizza')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('workshops')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('devcomp')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('courses')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('artcamps')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('startup')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('talks')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('pizza')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('workshops')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('devcomp')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('courses')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('artcamps')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('startup')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('talks')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('pizza')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('workshops')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('devcomp')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('courses')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('artcamps')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('startup')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('talks')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>
                        <h5 className=" text-white text-3xl SemiBold">
                            {t('pizza')}
                        </h5>
                        <div className="w-4 h-4 rounded-full bg-white mx-4"></div>


                    </Marquee>
                </div>

            </div>



        </section>
    )
}

export default Hero
