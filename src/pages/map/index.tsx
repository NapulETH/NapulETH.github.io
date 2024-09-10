'use client';

import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useTranslation } from "react-i18next";
import 'react-multi-carousel/lib/styles.css';
import { useEffect, useState } from "react";
import cloudBase from '@assets/cloud base2.svg'
import map1 from '@assets/m1.webp'
import map21 from '@assets/m21.webp'
import map22 from '@assets/m22.webp'
import map23 from '@assets/m23.webp'


export default function Map() {

    const { t, i18n } = useTranslation();
    const [map, setMap] = useState(1);

    return (
        <main className="flex min-h-screen flex-col items-start justify-start " >
            <Head>
                <title>NapulETH - The Biggest Web3 Event In Southern Italy</title>
                <meta
                    name="description"
                    content="Offering a real incentive for those not yet familiar with web3 to participate in significant events, both accessible and high-profile."
                />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Navbar />
            <section className="w-full flex flex-col items-center justify-start pt-16 lg:pt-20">
                <h5 className=" text-black z-50 text-4xl SemiBold text-center mb-3 lg:mb-6 lg:px-28 leading-normal mt-8 lg:mt-0 w-11/12 lg:w-full ">
                    {t('map')}
                </h5>
                <div className="w-11/12 lg:w-10/12 h-fit flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-3 mb-6 lg:mb-0">
                    <h6 className={`xl:w-5/12 w-full cursor-pointer p-4 z-50 border-4 border-[#eddb55] text-xl xl:text-2xl SemiBold leading-normal text-center my-0 lg:my-6 ${map == 1 ? 'underline decoration-[#CA75AB] bg-[#CA75AB] text-black underline-offset-8' : " text-black bg-white"}`} onClick={() => { setMap(1) }}>
                        Santa Maria La Nova
                    </h6>
                    <h6 className={`xl:w-5/12 w-full cursor-pointer p-4 z-50 border-4 border-[#eddb55] text-xl xl:text-2xl SemiBold leading-normal text-center my-0 lg:my-6 ${map == 2 ? 'underline decoration-[#CA75AB] bg-[#CA75AB] text-black underline-offset-8' : " text-black bg-white"}`} onClick={() => { setMap(2) }}>
                        Palazzo Gravina
                    </h6>
                </div>
                {
                    map == 1 ? (
                        <div className="w-11/12 h-fit flex flex-col items-center justify-start gap-3 pt-8">
                            <div className="w-full h-20 flex flex-row items-center justify-start flex-wrap gap-y-5">
                                <div className="flex flex-row items-center justify-start gap-2 w-full lg:w-1/3">
                                    <div className="w-8 aspect-square bg-[#cbddef]"></div>
                                    <p className=" text-[#2E2E2E] Medium text-md lg:text-lg text-left leading-normal">
                                        Largo Santa Maria La Nova - Entrance
                                    </p>
                                </div>
                                <div className="flex flex-row items-center justify-start gap-2 w-full lg:w-1/3">
                                    <div className="w-8 aspect-square bg-[#d4effb]"></div>
                                    <p className=" text-[#2E2E2E] Medium text-md lg:text-lg text-left leading-normal">
                                        Ricezione - Welcome Desk
                                    </p>
                                </div>
                                <div className="flex flex-row items-center justify-start gap-2 w-full lg:w-1/3">
                                    <div className="w-8 aspect-square bg-[#f4c4c2]"></div>
                                    <p className=" text-[#2E2E2E] Medium text-md lg:text-lg text-left leading-normal">
                                        Chiesa di Santa Maria la Nova - Main Stage
                                    </p>
                                </div>
                                <div className="flex flex-row items-center justify-start gap-2 w-full lg:w-1/3">
                                    <div className="w-8 aspect-square bg-[#e2efcb]"></div>
                                    <p className=" text-[#2E2E2E] Medium text-md lg:text-lg text-left leading-normal">
                                        Cappella di San Giacomo - Sponsor Area
                                    </p>
                                </div>
                                <div className="flex flex-row items-center justify-start gap-2 w-full lg:w-1/3">
                                    <div className="w-8 aspect-square bg-[#f9f4cc]"></div>
                                    <p className=" text-[#2E2E2E] Medium text-md lg:text-lg text-left leading-normal">
                                        Chiostro Minore - Networking Area
                                    </p>
                                </div>
                                <div className="flex flex-row items-center justify-start gap-2 w-full lg:w-1/3">
                                    <div className="w-8 aspect-square bg-[#eed6e6]"></div>
                                    <p className=" text-[#2E2E2E] Medium text-md lg:text-lg text-left leading-normal">
                                        Ex Refettorio - Second Stage
                                    </p>
                                </div>
                                <div className="flex flex-row items-center justify-start gap-2 w-full lg:w-1/3">
                                    <div className="w-8 aspect-square bg-[#ecd4c2]"></div>
                                    <p className=" text-[#2E2E2E] Medium text-md lg:text-lg text-left leading-normal">
                                        WC - Toilets on the First Floor
                                    </p>
                                </div>
                            </div>
                            <Image src={map1} alt="" className="w-full lg:w-7/12 h-auto mt-80 lg:mt-14"></Image>
                        </div>
                    ) : (
                        <div className="w-full h-fit flex flex-col items-center justify-start gap-3 pt-8 lg:pt-0">

                            <div className="w-full h-fit flex flex-row items-center justify-center flex-wrap gap-14 lg:gap-36 lg:px-6 lg:mt-16 ">
                                <div className="w-full lg:w-5/12 h-fit flex flex-col items-center justify-start">
                                    <h5 className=" text-black z-50 text-2xl SemiBold text-center mb-6 lg:mb-12 leading-normal">
                                        Ground Floor
                                    </h5>
                                    <div className="w-full h-fit lg:min-h-16 flex flex-row items-start justify-center lg:justify-around flex-wrap gap-x-4 gap-y-5">
                                        <div className="flex flex-row items-center justify-start gap-2 w-[45%] lg:w-fit">
                                            <div className="w-8 aspect-square bg-[#ffc1fb]"></div>
                                            <p className=" text-[#2E2E2E] Medium text-md lg:text-md text-left leading-normal">
                                                Catering Area
                                            </p>
                                        </div>
                                        <div className="flex flex-row items-center justify-start gap-2 w-[45%] lg:w-fit">
                                            <div className="w-8 aspect-square bg-[#c6ffe0]"></div>
                                            <p className=" text-[#2E2E2E] Medium text-md lg:text-md text-left leading-normal">
                                                Cloak Room
                                            </p>
                                        </div>
                                        <div className="flex flex-row items-center justify-start gap-2 w-[45%] lg:w-fit">
                                            <div className="w-8 aspect-square bg-[#feffcb]"></div>
                                            <p className=" text-[#2E2E2E] Medium text-md lg:text-md text-left leading-normal">
                                                Toilet
                                            </p>
                                        </div>
                                        <div className="flex flex-row items-center justify-start gap-2 w-[45%] lg:w-fit">
                                            <div className="w-8 aspect-square bg-[#fccaae]"></div>
                                            <p className=" text-[#2E2E2E] Medium text-md lg:text-md text-left leading-normal">
                                                Coworking Area
                                            </p>
                                        </div>
                                        

                                    </div>
                                    <Image src={map21} alt="" className=" w-11/12 lg:w-full h-auto mt-6 lg:mt-2"></Image>
                                </div>
                                <div className="w-full lg:w-5/12 h-fit flex flex-col items-center justify-start">
                                    <h5 className=" text-black z-50 text-2xl SemiBold text-center mb-6 lg:mb-12 leading-normal">
                                        First Floor
                                    </h5>
                                    <div className="w-full h-fit lg:min-h-20 flex flex-row items-start justify-center lg:justify-around flex-wrap gap-x-4 gap-y-5 lg:gap-y-0">
                                        <div className="flex flex-row items-center justify-start gap-2 w-[45%] lg:w-fit">
                                            <div className="w-8 aspect-square bg-[#ffcdcd]"></div>
                                            <p className=" text-[#2E2E2E] Medium text-md lg:text-md text-left leading-normal">
                                                Stage 1
                                            </p>
                                        </div>
                                        <div className="flex flex-row items-center justify-start gap-2 w-[45%] lg:w-fit">
                                            <div className="w-8 aspect-square bg-[#c6ffe0]"></div>
                                            <p className=" text-[#2E2E2E] Medium text-md lg:text-md text-left leading-normal">
                                                Art Weaves1
                                            </p>
                                        </div>
                                        <div className="flex flex-row items-center justify-start gap-2 w-[45%] lg:w-fit">
                                            <div className="w-8 aspect-square bg-[#feffcb]"></div>
                                            <p className=" text-[#2E2E2E] Medium text-md lg:text-md text-left leading-normal">
                                                Art Weaves 2
                                            </p>
                                        </div>
                                        <div className="flex lg:hidden flex-row items-center justify-start gap-2 w-[45%] lg:w-fit opacity-0">
                                            <div className="w-8 aspect-square bg-[#feffcb]"></div>
                                            <p className=" text-[#2E2E2E] Medium text-md lg:text-md text-left leading-normal">
                                                Art Weaves 2
                                            </p>
                                        </div>
                                    </div>
                                    <Image src={map22} alt="" className="w-11/12 lg:w-full h-auto mt-6 lg:-mt-0"></Image>
                                </div>
                                <div className="w-full lg:w-5/12 h-fit flex flex-col items-center justify-start">
                                    <h5 className=" text-black z-50 text-2xl SemiBold text-center mb-6 lg:mb-12 leading-normal">
                                        Second Floor
                                    </h5>
                                    <div className="w-full h-fit flex flex-row items-start justify-center flex-wrap">
                                        <div className="flex flex-row items-center justify-start gap-2 w-fit">
                                            <div className="w-8 aspect-square bg-[#ffcdcd]"></div>
                                            <p className=" text-[#2E2E2E] Medium text-md lg:text-lg text-left leading-normal">
                                                Startup Compition Room
                                            </p>
                                        </div>
                                    </div>
                                    <Image src={map23} alt="" className="w-11/12 lg:w-full h-auto mt-6 lg:mt-12"></Image>
                                </div>
                            </div>

                        </div>
                    )
                }
            </section>
            <Footer />
        </main>
    );
}
