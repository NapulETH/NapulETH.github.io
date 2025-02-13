/* eslint-disable @typescript-eslint/no-unsafe-assignment, @typescript-eslint/no-explicit-any */

import Link from "next/link"
import Image, { type StaticImageData } from "next/image";
import { useEffect, useState } from "react";
import { RiMenu4Fill } from "react-icons/ri";
import { CgMenuRight } from "react-icons/cg";
import { IoChevronDown, IoCloseSharp } from "react-icons/io5";
import logo from '@assets/Napul_ETH_logo.webp'

import { fallDown as MobileMenu } from 'react-burger-menu'
import menuIcon from '@assets/menu.svg'
import EnglishFlag from "@assets/english.png";
import ItalianFlag from "@assets/italian.png";
import { IoChevronDownOutline } from "react-icons/io5";



import { useTranslation } from "react-i18next";
import '@utils/i18n'
import { Menu, MenuItem, MenuButton } from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";


function Navbar() {

    const [selectedLanguage, setSelectedLanguage] = useState<{
        name: string;
        image: StaticImageData;
    }>({
        name: "en", // Set English as the default language
        image: EnglishFlag,
    });
    const { t, i18n } = useTranslation();

    const handleLanguageChange = (
        language: string,
        flagImage: StaticImageData,
    ) => {
        setSelectedLanguage({ name: language, image: flagImage });
        localStorage.setItem("lang", language);
        i18n.changeLanguage(language);
    };

    //https://napuleth.mego.tickets/

    useEffect(() => {
        if (
            localStorage.getItem("lang") == "en" ||
            localStorage.getItem("lang") == "" ||
            localStorage.getItem("lang") == " " ||
            !localStorage.getItem("lang")
        ) {
            localStorage.setItem("lang", "en");
            handleLanguageChange("en", EnglishFlag);
        } else if (localStorage.getItem("lang") == "it") {
            localStorage.setItem("lang", "it");
            handleLanguageChange("it", ItalianFlag);
        }
    }, []);

    const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false)


    return (
        <nav className="w-full h-fit fixed bg-[#6FCAF3] lg:bg-transparent z-[99] lg:bg-none lg:relative top-0 flex flex-row items-center justify-between px-4 lg:pl-8 lg:pr-0 landscape:py-2 pt-6 pb-6 lg:pb-0 lg:pt-10 lg:landscape:pt-8">
            <Link href={"/"} className=" relative z-50 p-0 w-fit h-fit">
                <div className="w-fit h-fit flex flex-row items-center justify-start gap-2">
                    <Image src={logo} alt="logo" className=" w-[8%] landscape:w-[4%] lg:w-[4%] lg:-mt-1"></Image>
                    <h5 className=" text-black SemiBold text-3xl">NapulETH</h5>
                </div>
            </Link>
            <div className="w-fit h-fit flex flex-row items-center justify-end lg:gap-10">
                <div className="w-fit h-fit hidden lg:flex flex-row items-center justify-end gap-10">
                    <Link href={'/'} className=" relative z-50 p-0 w-fit h-fit">
                        <h5 className=" text-black text-xl whitespace-nowrap Medium">
                            {t('home')}
                        </h5>
                    </Link>
                    <Link href={'/agenda'} className=" relative z-50 p-0 w-fit h-fit">
                        <h5 className=" text-black text-xl whitespace-nowrap Medium">
                            {t('agenda')}
                        </h5>
                    </Link>
                    <Menu
                        menuButton={
                            <MenuButton>
                                <div className="flex flex-row items-center justify-start gap-1 w-fit h-fit">
                                    <h5 className=" text-black text-xl whitespace-nowrap Medium">
                                        {t("about")}
                                    </h5>
                                    <IoChevronDownOutline size={20} color="#000000" />
                                </div>
                            </MenuButton>
                        }
                        align={"center"}
                        direction="bottom"
                        arrow={true}
                        className=' w-fit'
                        transition
                    >
                        <MenuItem>
                            <Link href="/about" className="w-fit h-fit flex flex-row items-center justify-start">
                                <div className="w-fit min-w-[10vw] flex flex-row items-center justify-start px-2 py-1">
                                    <h5 className=" text-black text-xl whitespace-nowrap Medium">
                                        {t("team")}
                                    </h5>
                                </div>
                            </Link>
                        </MenuItem>
                        <div className="my-1 h-[0.5px] w-10/12 bg-black/80 mx-auto "></div>
                        <MenuItem>
                            <Link href="/speakers" className="w-fit h-fit flex flex-row items-center justify-start">
                                <div className="w-fit min-w-[10vw] flex flex-row items-center justify-start px-2 py-1">
                                    <h5 className=" text-black text-xl whitespace-nowrap Medium">
                                        {t("speakers")}
                                    </h5>
                                </div>
                            </Link>
                        </MenuItem>
                        <div className="my-1 h-[0.5px] w-10/12 bg-black/80 mx-auto "></div>
                        <MenuItem>
                            <Link href="/artists" className="w-fit h-fit flex flex-row items-center justify-start">
                                <div className="w-fit min-w-[10vw] flex flex-row items-center justify-start px-2 py-1">
                                    <h5 className=" text-black text-xl whitespace-nowrap Medium">
                                        {t("artists")}
                                    </h5>
                                </div>
                            </Link>
                        </MenuItem>
                    </Menu>

                    <Menu
                        menuButton={
                            <MenuButton>
                                <div className="flex flex-row items-center justify-start gap-1 w-fit h-fit">
                                    <h5 className=" text-black text-xl whitespace-nowrap Medium">
                                        {t("events")}
                                    </h5>
                                    <IoChevronDownOutline size={20} color="#000000" />
                                </div>
                            </MenuButton>
                        }
                        align={"center"}
                        direction="bottom"
                        arrow={true}
                        className=' w-fit'
                        transition
                    >
                        <MenuItem>
                            <Link href="/meetups" className="w-fit h-fit flex flex-row items-center justify-start">
                                <div className="w-fit min-w-[10vw] flex flex-row items-center justify-start px-2 py-1">
                                    <h5 className=" text-black text-xl whitespace-nowrap Medium">
                                        {t("meetupsPageTitle")}
                                    </h5>
                                </div>
                            </Link>
                        </MenuItem>
                        <div className="my-1 h-[0.5px] w-10/12 bg-black/80 mx-auto "></div>
                        <MenuItem>
                            <Link href="/side-events" className="w-fit h-fit flex flex-row items-center justify-start">
                                <div className="w-fit min-w-[10vw] flex flex-row items-center justify-start px-2 py-1">
                                    <h5 className=" text-black text-xl whitespace-nowrap Medium">
                                        {t("sideEventsRaw")}
                                    </h5>
                                </div>
                            </Link>
                        </MenuItem>
                        <div className="my-1 h-[0.5px] w-10/12 bg-black/80 mx-auto "></div>
                        <MenuItem>
                            <Link href="/pitch_battle" className="w-fit h-fit flex flex-row items-center justify-start">
                                <div className="w-fit min-w-[10vw] flex flex-row items-center justify-start px-2 py-1">
                                    <h5 className=" text-black text-xl whitespace-nowrap Medium">
                                        {t('pitchBattle')}
                                    </h5>
                                </div>
                            </Link>
                        </MenuItem>
                        <div className="my-1 h-[0.5px] w-10/12 bg-black/80 mx-auto "></div>
                        <MenuItem>
                            <Link href="/map" className="w-fit h-fit flex flex-row items-center justify-start">
                                <div className="w-fit min-w-[10vw] flex flex-row items-center justify-start px-2 py-1">
                                    <h5 className=" text-black text-xl whitespace-nowrap Medium">
                                        {t('map')}
                                    </h5>
                                </div>
                            </Link>
                        </MenuItem>
                    </Menu>


                </div>
                <Menu
                    align={"end"}
                    direction="bottom"
                    arrow={true}
                    className=' w-fit'
                    menuButton={
                        <MenuButton>
                            <div className=" flex mx-3 flex-row h-8 lg:h-10 bg-center bg-cover bg-no-repeat aspect-square items-center justify-center gap-2 rounded-full border border-[#F7E16B] " style={{
                                backgroundImage: `url('${selectedLanguage.image.src}')`
                            }}>

                            </div>
                        </MenuButton>
                    }
                    transition
                >
                    <MenuItem
                        onClick={() => {
                            localStorage.setItem("lang", "en");
                            handleLanguageChange("en", EnglishFlag);
                        }}
                    >
                        <div className="flex h-fit w-fit flex-row items-center justify-start">
                            <Image
                                src={EnglishFlag}
                                alt="English"
                                className="mr-3 aspect-square h-6 w-6"
                            />
                            <h5 className={` my-0 text-xl text-black Medium`}>EN</h5>
                        </div>
                    </MenuItem>
                    <MenuItem
                        onClick={() => {
                            localStorage.setItem("lang", "it");
                            handleLanguageChange("it", ItalianFlag);
                        }}
                    >
                        <div className="flex h-fit w-fit flex-row items-center justify-start">
                            <Image
                                src={ItalianFlag}
                                alt="English"
                                className="mr-3 aspect-square h-6 w-6"
                            />
                            <h5 className={` my-0 text-xl text-black Medium`}>IT</h5>
                        </div>
                    </MenuItem>


                </Menu>
                
                <div className="block lg:hidden w-10 aspect-square bg-contain bg-center bg-no-repeat relative z-50" onClick={() => { setMobileMenuOpen(true) }} style={{
                    backgroundImage: `url('${menuIcon.src}')`
                }}></div>
                <MobileMenu isOpen={mobileMenuOpen} className="bg-white w-fit h-fit" id="burgerMenu">
                    <div className="w-full h-full flex flex-col items-center justify-start gap-4">
                        <div className="pt-4 w-full px-4 flex flex-row items-center justify-end">
                            <IoCloseSharp color="#000000" size={35} onClick={() => { setMobileMenuOpen(false) }}></IoCloseSharp>
                        </div>
                        
                        <div className="w-11/12 h-fit grid grid-cols-2 auto-rows-auto items-center justify-center gap-y-6 gap-x-2 ">
                            <Link href={'/'} className=" relative z-50 p-0 w-full h-fit bg-white border-4 border-[#eddb55] py-2" onClick={() => { setMobileMenuOpen(false) }}>
                                <h5 className=" text-black text-2xl Medium underline-offset-8 text-center">
                                    {t('home')}
                                </h5>
                            </Link>
                            <Link href={'/map'} className=" relative z-50 p-0 w-full h-fit bg-white border-4 border-[#eddb55] py-2" onClick={() => { setMobileMenuOpen(false) }}>
                                <h5 className=" text-black text-2xl Medium text-center">
                                    {t('map')}
                                </h5>
                            </Link>
                            <Link href={'/agenda'} className=" relative z-50 p-0 w-full h-fit bg-white border-4 border-[#eddb55] py-2" onClick={() => { setMobileMenuOpen(false) }}>
                                <h5 className=" text-black text-2xl Medium  underline-offset-8 text-center">
                                    {t('agenda')}
                                </h5>
                            </Link>
                            
                            <Link href={'/speakers'} className=" relative z-50 p-0 w-full h-fit bg-white border-4 border-[#eddb55] py-2" onClick={() => { setMobileMenuOpen(false) }}>
                                <h5 className=" text-black text-2xl Medium  underline-offset-8 text-center">
                                    {t('speakers')}
                                </h5>
                            </Link>
                            <Link href={'/side-events'} className=" relative z-50 p-0 w-full h-fit bg-white border-4 border-[#eddb55] py-2" onClick={() => { setMobileMenuOpen(false) }}>
                                <h5 className=" text-black text-2xl Medium  underline-offset-8 text-center">
                                    {t("sideEventsRaw")}
                                </h5>
                            </Link>
                            <Link href={'/pitch_battle'} className=" relative z-50 p-0 w-full h-fit bg-white border-4 border-[#eddb55] py-2" onClick={() => { setMobileMenuOpen(false) }}>
                                <h5 className=" text-black text-2xl Medium  underline-offset-8 text-center">
                                    {t('pitchBattle')}
                                </h5>
                            </Link>
                            <Link href={'/meetups'} className=" relative z-50 p-0 w-full h-fit bg-white border-4 border-[#eddb55] py-2" onClick={() => { setMobileMenuOpen(false) }}>
                                <h5 className=" text-black text-2xl Medium  underline-offset-8 text-center">
                                    {t('meetupsPageTitle')}
                                </h5>
                            </Link>
                            <Link href={'/artists'} className=" relative z-50 p-0 w-full h-fit bg-white border-4 border-[#eddb55] py-2" onClick={() => { setMobileMenuOpen(false) }}>
                                <h5 className=" text-black text-2xl Medium  underline-offset-8 text-center">
                                    {t("artists")}
                                </h5>
                            </Link>
                            <Link href={'/about'} className=" relative z-50 p-0 w-full h-fit bg-white border-4 border-[#eddb55] py-2" onClick={() => { setMobileMenuOpen(false) }}>
                                <h5 className=" text-black text-2xl Medium  underline-offset-8 text-center">
                                    {t('about')}
                                </h5>
                            </Link>
                        </div>

                    </div>
                </MobileMenu>
            </div>
        </nav>
    )
}

export default Navbar