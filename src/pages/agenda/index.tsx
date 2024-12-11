import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Navbar from "@/components/navbar";
import Agenda from "@/components/agenda";
import Footer from "@/components/footer";
import { useTranslation } from "react-i18next";


export default function AgendaPage() {

    const { t, i18n } = useTranslation();

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
                    {t('agendaTitle')}
                </h5>
                <p className="block text-[#2E2E2E] z-50 Medium text-2xl lg:text-2xl text-center lg:px-28 leading-normal mt-8 lg:mb-4 lg:mt-0 w-11/12 lg:w-10/12">
                    {t('agendaPara')}
                </p>

            </section>
            <Agenda />
            <div class="w-7/12 h-[0.5px] bg-black/40 mx-auto mt-6 mb-4"></div>  <a class="w-8/12 xl:w-1/2 h-fit mx-auto " href="/side-events.html"><h6 class=" w-full text-black p-4 bg-white border-4 border-[#eddb55] text-xl xl:text-2xl Medium leading-normal text-center my-6">Scopri i Side Events  👉</h6></a>
            <Footer />
        </main>
    );
}
