import Link from "next/link";
import Head from "next/head";
import Navbar from "@/components/navbar";
import ComingSoon from "@/components/comingsoon";
import Phases from "@/components/phases";
import TicketingPartner from "@/components/ticketingPartner";
import SpeakersSection from "@/components/speakersSection";
import Footer from "@/components/footer";

import s1 from "@assets/Isola.jpg"
import s2 from "@assets/PieraDiStefano.png"
import s3 from "@assets/VaninaIvanova.png"
import s4 from "@assets/CosimoPalma.jpeg"
import s5 from "@assets/VincenzoRana.png"
import s6 from "@assets/SaraNoggler.jpg.jpeg"
import s7 from "@assets/AlessandraBrandi.jpg"
import s8 from "@assets/AndreaPaulillo.jpg"
import s9 from '@assets/JenAlbert.png'
import s10 from '@assets/MarcoTullioGiordano.jpeg'
import s11 from "@assets/ExWhyZee.jpg"
import s12 from "@assets/DavideZanichelli.png"
import s13 from "@assets/LorenzoRigatti.jpg"
import s14 from '@assets/IreneGuarnieri.jpg.jpeg'
import s15 from '@assets/MarcoCastignoli.jpg'
import s16 from '@assets/MarkRichardson.jpg'
import s17 from '@assets/PietroRossetto.jpg.jpeg'
import s18 from '@assets/StefanoDeAngelis.jpg.jpeg'
import s19 from '@assets/HemillyRodrigues.jpg.jpeg'
import s20 from '@assets/Alena.jpg'
import s21 from '@assets/GabrieleAlagna.jpg'
import s22 from '@assets/LucaBoiardi.jpg'
import s23 from '@assets/GianfrancoLeone.jpg.jpeg'
import s24 from '@assets/BrunoMiranda.jpg'
import s25 from '@assets/DayanaAleksandrova.jpg'
import s26 from '@assets/JamesRae.jpg'
import s27 from '@assets/WilliamNonnis.jpg'
import s28 from '@assets/MicheleIaselli.jpg'
import s29 from '@assets/ChristianSantagata.jpeg'
import s30 from '@assets/LazarBucan.jpg'
import s31 from '@assets/OrnellaVallana.jpg'
import s32 from '@assets/MiroRadenovic.jpg'
import s33 from '@assets/MatteoTambussi.png'
import s34 from '@assets/FilippoChiricozzi.png'
import s35 from '@assets/FrancescoFontana.jpeg'
import s36 from '@assets/AmericoCacciapuoti.jpeg'
import s37 from '@assets/ElioBarbera.jpg'
import s38 from '@assets/AndreeaCia.png'

import s39 from '@assets/FrancescoBritti.png'
import s40 from '@assets/DavideGhezzi.png'
import s41 from '@assets/FrancescoBianchi.png'
import s42 from '@assets/MarekKowalski.png'
import s43 from '@assets/MariaMagenes.jpg.jpeg'
import s44 from '@assets/FriscoDAnconia.jpg.jpeg'
import s45 from '@assets/VladyslavDudchenko.png'
import s46 from '@assets/QiZhou.png'
import s47 from '@assets/BenedettoBiondi.png'
import s48 from '@assets/SilvioVentre.jpg.jpeg'
import s49 from '@assets/LuigiSenese.png'
import s50 from '@assets/JulieBettens.jpg'
import s51 from '@assets/AlessandroBrigato.png'
import s52 from '@assets/LimoneEth.png'
import s53 from '@assets/FedericoCosta.png'
import s54 from '@assets/Bock.jpg.jpeg'
import s55 from '@assets/FabrizioMaiocco.jpg'
import s56 from '@assets/DanielePinna.jpg'
import s57 from '@assets/FrancescoVincenti.png'
import s58 from '@assets/Marsili.png'
import s59 from '@assets/AntonioRamicello.jpg'
import s60 from '@assets/DamianRusinek.jpg'
import s61 from '@assets/ValentinaMarzioni.png'
import s62 from '@assets/QJ.jpeg'
import s63 from '@assets/PhilippPieper.jpg'
import s64 from '@assets/LorenzoAmoroso.jpg'
import s65 from '@assets/Viktor.jpg'
import s66 from '@assets/DavideMilani.jpg'
import s67 from '@assets/DavidCarvalho.jpg'
import s68 from '@assets/DavideCarboni.jpg'
import s69 from '@assets/GavinThomas.png'
import s70 from '@assets/MartinLeclerq.jpg'
import s71 from '@assets/CarloParisi.png'
import s72 from '@assets/MortezaShahini.jpg.jpeg'
import s73 from '@assets/gianluca.jpeg'
import s74 from '@assets/RosarioNapolano.jpg'
import s75 from '@assets/MicheleLotta.jpg'
import s76 from '@assets/StefanoGogioso.jpg'
import s77 from '@assets/FilippoMoraschi.jpg'
import s78 from '@assets/cryptocuty.jpg'
import s79 from '@assets/lilicCircle.png'
import s80 from '@assets/DanielePalombi.jpg'
import s81 from '@assets/PhilippZahn.jpg'
import s82 from '@assets/EdoardoDegliInnocenti.jpg'
import s83 from '@assets/StefanoDeMasi.jpg'
import s84 from '@assets/IvanBjelajac.jpg'
import s85 from '@assets/PaoloSchiattarella.jpg'
import s86 from '@assets/MarioLuigiFiglioli.jpg'
import s87 from '@assets/MalekAlmsaddi.jpg'


import { BsGlobe, BsLinkedin } from "react-icons/bs";
import { useTranslation } from "react-i18next";
import Marquee from "react-fast-marquee";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

export default function Speakers() {

    const { t, i18n } = useTranslation(); 

    const Rawspeakers = [
        {
            link: "https://hgvis.io/",
            img: s1.src,
            name: "Isola",
            aff: "HGVIS"
        },
        {
            link: "https://www.linkedin.com/in/piera-di-stefano/",
            img: s2.src,
            name: "Piera Di Stefano",
            aff: "Avvocato del Web®"
        },
        {
            link: "https://twitter.com/inks",
            img: s3.src,
            name: "Vanina Ivanova",
            aff: "Blockchain Marketing CT"
        },
        {
            link: "https://palma.partners/",
            img: s4.src,
            name: "Cosimo Palma",
            aff: "palma.partners"
        },
        {
            link: "https://it.linkedin.com/in/vincenzo-rana",
            img: s5.src,
            name: "Vincenzo Rana",
            aff: "KNOBS"
        },
        {
            link: "https://twitter.com/nogglersara?lang=en",
            img: s6.src,
            name: "Sara Noggler",
            aff: "Polyhedra"
        },
        {
            link: "https://x.com/niftynaples?t=hQSGX3McewjQFWs-UffHOg&s=09",
            img: s7.src,
            name: "Alessandra Brandi",
            aff: "Nifty Naples"
        },
        {
            link: "http://www.eloop.it/",
            img: s8.src,
            name: "Andrea Paulillo",
            aff: "eLoop"
        },
        {
            link: "https://twitter.com/emmetiggi",
            img: s10.src,
            name: "Marco T. Giordano",
            aff: "42 Law Firm"
        },
        {
            link: "https://twitter.com/exxyzee",
            img: s11.src,
            name: "Sundaram Jha",
            aff: "Eden Protocol"
        },
        {
            link: "https://www.linkedin.com/in/lorenzo-rigatti-1a317994/",
            img: s13.src,
            name: "Lorenzo Rigatti",
            aff: "BlockInvest"
        },
        {
            link: "https://twitter.com/castignolimarco",
            img: s15.src,
            name: "Marco Castignoli",
            aff: "Sourcify"
        },
        {
            link: "https://twitter.com/MBRichardson87",
            img: s16.src,
            name: "Mark Richardson",
            aff: "Bancor/Carbon Defi"
        },
        {
            link: "https://www.linkedin.com/in/pietro-rossetto-lawtech/",
            img: s17.src,
            name: "Pietro Rossetto",
            aff: "Independent"
        },
        {
            link: "https://twitter.com/_deanstef",
            img: s18.src,
            name: "Stefano De Angelis",
            aff: "University of Salerno"
        },
        {
            link: "https://linktr.ee/thebitblond",
            img: s19.src,
            name: "Hemilly Rodrigues",
            aff: "R&CO"
        },
        {
            link: "https://thecryptogateway.it/",
            img: s22.src,
            name: "Luca Boiardi",
            aff: "The Crypto Gateway"
        },
        {
            link: "https://b3yond.io/",
            img: s23.src,
            name: "Gianfranco Leone",
            aff: "B3yond.io"
        },
        {
            link: "https://twitter.com/chilibangs",
            img: s24.src,
            name: "Bruno Miranda",
            aff: "ChiliBangs"
        },
        {
            link: "https://twitter.com/dee_centralized",
            img: s25.src,
            name: "Dayana Aleksandrova",
            aff: "Activated Community "
        },
        {
            link: "https://twitter.com/jayrae21212",
            img: s26.src,
            name: "James Rae",
            aff: "AdvocateAgency "
        },
        {
            link: "https://twitter.com/William_Nonnis",
            img: s27.src,
            name: "William Nonnis",
            aff: "Presidenza del Consiglio dei Ministri "
        },
        {
            link: "https://twitter.com/infomicheleias1",
            img: s28.src,
            name: "Michele Iaselli",
            aff: "LUISS"
        },
        {
            link: "https://twitter.com/christian_defi",
            img: s29.src,
            name: "Christian Santagata",
            aff: "re.al"
        },
        {
            link: "http://twitter.com/0xeleazar",
            img: s30.src,
            name: "Lazar Bucan",
            aff: "Cookbook.dev "
        },
        {
            link: "http://www.twitter.com/ornellaweb3",
            img: s31.src,
            name: "Ornella Vallana",
            aff: "Bankless Academy "
        },
        {
            link: "https://www.linkedin.com/in/miroradenovic/",
            img: s32.src,
            name: "Miro Radenovic",
            aff: "ucollect.me "
        },
        {
            link: "http://www.twitter.com/ornellaweb3",
            img: s33.src,
            name: "Matteo Tambussi",
            aff: "Stake Capital, SpaghettETH"
        },
        {
            link: "https://www.linkedin.com/in/filippochiricozzi?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
            img: s34.src,
            name: "Filippo Chiricozzi",
            aff: "Banca Sella"
        },
        {
            link: "https://linkedin.com/in/francesco-fontana",
            img: s35.src,
            name: "Francesco Fontana",
            aff: "Fontana Art Advisory, aegis.art"
        },
        {
            link: "https://twitter.com/italiancollecto",
            img: s36.src,
            name: "Americo Cacciapuoti",
            aff: "WoV Labs"
        },
        {
            link: "http://www.caffebarbera.com",
            img: s37.src,
            name: "Elio Barbera",
            aff: "Caffè Barbera 1870"
        },
        {
            link: "https://twitter.com/iandreeacia",
            img: s38.src,
            name: "Andreea Cia",
            aff: "ETH Bucarest"
        },
        //Here
        {
            link: "http://www.youhodler.com/it",
            img: s39.src,
            name: "Francesco Britti",
            aff: "YouHodler"
        },
        {
            link: "https://www.linkedin.com/in/davide-ghezzi-blockchain-web3/",
            img: s40.src,
            name: "Davide Ghezzi",
            aff: "Politecnico di Milano"
        },
        {
            link: "https://x.com/mariamagenes1",
            img: s41.src,
            name: "Francesco Bianchi",
            aff: "SpaghettETH, Idle"
        },
        {
            link: "https://x.com/mkowalski_",
            img: s42.src,
            name: "Marek Kowalski",
            aff: "Rumble Fish"
        },
        {
            link: "https://x.com/mariamagenes1",
            img: s43.src,
            name: "Maria Magenes",
            aff: "SpaghettETH"
        },
        {
            link: "http://www.linkedin.com/in/vladyslav-dudchenko-b0b729227",
            img: s45.src,
            name: "Vladyslav Dudchenko",
            aff: "Syntralink"
        },
        {
            link: "https://www.linkedin.com/in/silvio-ventre/",
            img: s48.src,
            name: "Silvio Ventre",
            aff: "Euromobiliare Asset Mng."
        },
        {
            link: "https://www.linkedin.com/in/luigi-senese/",
            img: s49.src,
            name: "Luigi Senese",
            aff: "AI Generative Lab"
        },
        {
            link: "https://x.com/0xbbjubjub",
            img: s50.src,
            name: "Julie Bettens",
            aff: "ChainSecurity"
        },
        {
            link: "https://x.com/Bridge984",
            img: s51.src,
            name: "Alessandro Brigato",
            aff: "TokNox"
        },
        {
            link: "https://x.com/limone_eth",
            img: s52.src,
            name: "limone.eth",
            aff: "ETHRome, urbe.eth, Builders Garden"
        },
        {
            link: "https://x.com/CedericoFosta",
            img: s53.src,
            name: "Federico Costa",
            aff: "Cardinal"
        },
        {
            link: "https://x.com/bockus",
            img: s54.src,
            name: "Bock",
            aff: "Fidesium"
        },
        //Here u start
        {
            link: "https://www.linkedin.com/in/fabrizio-maiocco-8b09571b/",
            img: s55.src,
            name: "Fabrizio Maiocco",
            aff: "GCM Verse"
        },
        {
            link: "https://x.com/pestopoppa",
            img: s56.src,
            name: "Daniele Pinna",
            aff: "GnosisVC"
        },
        {
            link: "https://x.com/fravincenti1",
            img: s57.src,
            name: "Francesco Vincenti",
            aff: "Digitalia"
        },
        {
            link: "https://x.com/andreamars_",
            img: s58.src,
            name: "Andrea Marsili",
            aff: "EthMilan"
        },
        {
            link: "https://x.com/Antonio_Chaser",
            img: s59.src,
            name: "Antonio Ramicello",
            aff: "Crown Chaser"
        },
        {
            link: "https://x.com/drdr_zz",
            img: s60.src,
            name: "Damian Rusinek",
            aff: "Composable Security"
        },
        {
            link: "https://x.com/ladyinfinance",
            img: s61.src,
            name: "Valentina Marzioni",
            aff: "Delfyx"
        },
        {
            link: "https://x.com/QJ_ECF",
            img: s62.src,
            name: "QJ",
            aff: "ETH Community Fund "
        },
        {
            link: "https://twitter.com/PhilippPieper",
            img: s63.src,
            name: "Philipp Pieper",
            aff: "Swarm"
        },
        {
            link: "https://www.linkedin.com/in/lorenzo-amoroso-aa15261b6/",
            img: s64.src,
            name: "Lorenzo Amoroso",
            aff: "Hercle"
        },
        {
            link: "https://x.com/s0meone_u_know",
            img: s65.src,
            name: "Viktor",
            aff: "TON"
        },
        {
            link: "https://www.chainlabo.com/",
            img: s66.src,
            name: "Davide Milani",
            aff: "ChainLabo"
        },
        // Here
        {
            link: "https://x.com/digitaldavide",
            img: s68.src,
            name: "Davide Carboni",
            aff: "Uncommon Digital"
        },
        {
            link: "https://x.com/Gavin_Chain",
            img: s69.src,
            name: "Gavin Thomas",
            aff: "TEN"
        },
        {
            link: "https://x.com/martinlecl",
            img: s70.src,
            name: "Martin Leclerq",
            aff: "iExec"
        },
        {
            link: "https://x.com/ManInBlackie",
            img: s71.src,
            name: "Carlo Parisi",
            aff: "TriWei"
        },
        {
            link: "https://x.com/Mortiz_Shahini",
            img: s72.src,
            name: "Morteza Shahini",
            aff: "Intraverse"
        },
        {
            link: "https://www.linkedin.com/in/gdbmoodglobalservices?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
            img: s73.src,
            name: "Gianluca Di Bella",
            aff: "MGS"
        },
        {
            link: "https://www.linkedin.com/in/napolano-rosario-94ab5a7b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
            img: s74.src,
            name: "Rosario Napolano",
            aff: "Banca Patrimoni Sella"
        },
        {
            link: "https://www.linkedin.com/in/michele-lotta?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app",
            img: s75.src,
            name: "Michele Lotta",
            aff: "Bybit"
        },
        {
            link: "https://x.com/StefanoGogioso",
            img: s76.src,
            name: "Stefano Gogioso",
            aff: "Hashberg"
        },
        {
            link: "https://x.com/f_moraschi",
            img: s77.src,
            name: "Filippo Moraschi",
            aff: "folks.finance"
        },
        {
            link: "https://x.com/cryptocuty",
            img: s78.src,
            name: "cryptocuty",
            aff: "DeGate"
        },
        {
            link: "https://x.com/ChiefOfTelos",
            img: s79.src,
            name: "John Lilic",
            aff: "CodeToInspire"
        },
        {
            link: "https://x.com/dpl0a",
            img: s80.src,
            name: "Daniele Palombi",
            aff: "XGA"
        },
        {
            link: "https://www.philipp-zahn.com/",
            img: s81.src,
            name: "Philipp Zahn",
            aff: "20squares"
        },
        {
            link: "https://www.linkedin.com/in/edoardodegliinnocenti/",
            img: s82.src,
            name: "Edoardo Degli Innocenti",
            aff: "Pre. del Consiglio dei Ministri"
        },
        {
            link: "https://m.youtube.com/@Stefano.Demasi",
            img: s83.src,
            name: "Stefano De Masi",
            aff: "De Gate"
        },
        {
            link: "https://x.com/instantfinality",
            img: s84.src,
            name: "Ivan Bjelajac",
            aff: "Apex"
        },
        {
            link: "https://www.linkedin.com/in/paoloschiattarella/",
            img: s85.src,
            name: "Paolo Schiattarella",
            aff: "Ass. Napoli Blockchain"
        },
        {
            link: "https://twitter.com/invtrondao",
            img: s86.src,
            name: "Mario Giovanni Figlioli",
            aff: "Invtron DAO"
        },
        {
            link: "https://twitter.com/invtrondao",
            img: s87.src,
            name: "Malek Almsaddi",
            aff: "Invtron DAO"
        },

    ]


    const speakers = [...Rawspeakers].sort((a, b) => {
        const nameA = a.name.toUpperCase(); // ignore upper and lowercase
        const nameB = b.name.toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }
        return 0; // names must be equal
    });

    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 5
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };


  return (
    <main className="flex min-h-screen flex-col items-start justify-start">
      <Head>
        <title>NapulETH - The Biggest Web3 Event In Southern Italy</title>
        <meta
          name="description"
          content="Offering a real incentive for those not yet familiar with web3 to participate in significant events, both accessible and high-profile."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <section className="w-full flex flex-col items-center justify-start mt-20 lg:mt-20">
            <h5 className=" text-black text-4xl mb-10 SemiBold leading-normal text-center">
                {
                    t('speakers')
                }
                <span className="text-xl Medium text-[#252525]">&nbsp;(A-Z)</span>
            </h5>
            <div className="grid-cols-5 auto-rows-auto w-11/12 hidden lg:grid">
                {
                    speakers.map((speaker, index) => {
                        return (
                            <div className="flex flex-col items-center justify-center w-11/12 mx-auto mb-4">
                                <Link href={speaker.link} target="_blank" className="w-full aspect-square">
                                    <div className="w-full aspect-square bg-cover bg-center bg-no-repeat border-4 border-[#eddb55] mb-2" style={{
                                        backgroundImage: `url('${speaker.img}')`
                                    }}></div>
                                </Link>
                                <div className="w-full flex-grow flex flex-row items-start justify-between py-2 px-4 bg-white border-4 border-[#eddb55]">
                                    <div className="h-fit w-10/12 flex flex-col items-start justify-between">
                                        <h5 className=" text-black SemiBold text-md whitespace-nowrap text-left mb-2">
                                            {speaker.name}
                                        </h5>
                                        <h5 className=" text-[#EDDB55] Medium text-md">
                                            {speaker.aff}
                                        </h5>
                                    </div>
                                    <div className="h-full w-2/12 flex flex-col items-end justify-center gap-3">
                                        <Link href={speaker.link} target="_blank"><BsGlobe color="#252525" size={26}></BsGlobe></Link>

                                    </div>

                                </div>
                            </div>


                        )
                    })
                }
            </div>
            


            <div className='w-full h-fit block lg:hidden'>
                <div className="grid grid-cols-3 auto-rows-auto w-[97%] mx-auto gap-x-[0.4rem] gap-y-4">
                {
                        speakers.map((speaker, index) => {
                            return (
                                <Link href={speaker.link} key={index} target="_blank" className="w-full h-fit">
                                    <div className="w-full h-fit flex flex-row items-center justify-center">
                                        <div className="w-full flex flex-col flex-grow items-center justify-center">
                                            <div className="w-full aspect-square bg-cover bg-top bg-no-repeat border-4 border-[#eddb55] mb-2" style={{
                                                backgroundImage: `url('${speaker.img}')`
                                            }}></div>
                                            <div className="w-full h-fit min-h-[12vh] flex flex-col items-center justify-center py-2 px-1 bg-white border-4 border-[#eddb55]">
                                                <h5 className=" text-black w-full SemiBold text-md mx-auto text-center mb-2">
                                                    {speaker.name}
                                                </h5>
                                                <h5 className=" text-[#EDDB55] SemiBold text-center text-sm">
                                                    {speaker.aff}
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            )
                        })
                    }
                </div>
                
            </div>


        </section>
      <Footer />
    </main>
  );
}
