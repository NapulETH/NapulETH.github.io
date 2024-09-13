import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";

import { MdOutlinePlace } from "react-icons/md";
import { IoFilterOutline } from "react-icons/io5";


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
import s65 from '@assets/Victor Be In crypto.jpg'
import s66 from '@assets/DavideMilani.jpg'
import s67 from '@assets/DavidCarvalho.jpg'
import lilic from '@assets/johnLilic.jpg'
import s68 from '@assets/DavideCarboni.jpg'
import s69 from '@assets/MicheleLotta.jpg'
import s70 from '@assets/PhilippZahn.jpg'
import s71 from '@assets/RosarioNapolano.jpg'
import s72 from '@assets/cryptocuty.jpg'
import s73 from '@assets/LaurenceKirk.jpg'
import s74 from '@assets/CarloParisi.png'
import s75 from '@assets/MartinLeclerq.jpg'
import s76 from '@assets/StefanoGogioso.jpg'
import s77 from '@assets/MortezaShahini.jpg.jpeg'
import s78 from '@assets/GavinThomas.png'
import s79 from '@assets/DanielePalombi.jpg'
import s80 from '@assets/FilippoMoraschi.jpg'
import s81 from '@assets/MTG Marco Tulio Giordano.png'
import s82 from '@assets/Chef Pino.jpg'
import s83 from '@assets/Ian Smith.jpg'
import s84 from '@assets/Suning Yao.jpg'
import s85 from '@assets/Napul_ETH_logo.webp'
import s86 from '@assets/PaoloSchiattarella.jpg'
import s87 from '@assets/MarioLuigiFiglioli.jpg'
import s88 from '@assets/MalekAlmsaddi.jpg'
import s89 from '@assets/StefanoDeMasi.jpg'
import s90 from '@assets/ionut.jpeg'
import s91 from '@assets/chiara.jpg'
import s92 from '@assets/APEX.jpeg'
import s93 from '@assets/EdoardoDegliInnocenti.jpg'
import s94 from '@assets/maganes.jpeg'
import s95 from '@assets/SoeHaghighi.jpg.jpeg'
import s96 from '@assets/viktor.jpeg'
import s97 from '@assets/Dmitry.jpeg'
import s98 from '@assets/LucasBonnard.jpg'
import s99 from '@assets/Paolone.jpg'
import s100 from '@assets/Lukas Meilhammer.jpg'
import s101 from '@assets/LucaBertelli.jpg'
import s102 from '@assets/LorenzoFeroleto.jpg'
import s103 from '@assets/NicolasRacchi.jpg'

const Agenda = () => {

    const events = [
        // Starting with Day 1, Stage 1 (Main)
        {
            id: 544,
            title: 'Breakfast',
            subtitle: "",
            stage: "main",
            speakers: [],
            day: 1,
            start: "09:00",
            end: "10:00",
            isWorkshop: false,
            type: "break",
            lang: "",
            topics: ['other']
        },
        {
            id: 0,
            title: 'Opening',
            subtitle: "Opening event of NapulETH",
            stage: "main",
            speakers: [
                {
                    name: 'NapulETH',
                    image: 'https://belonqevent.com/wp-content/uploads/2024/07/Logo_NapulETH.svg'
                }
            ],
            day: 1,
            start: "10:00",
            end: "10:20",
            isWorkshop: false,
            type: "talk",
            lang: "en",
            topics: ['community']
        },
        {
            id: 1,
            title: 'Decentralized Media: Stack Convergence for a Product',
            subtitle: "",
            stage: "main",
            speakers: [
                {
                    name: "Matteo Tambussi",
                    image: s33.src
                }
            ],
            day: 1,
            start: "10:20",
            end: "10:40",
            isWorkshop: false,
            type: "talk",
            lang: "en",
            topics: ['community']
        },
        {
            id: 2,
            title: 'Social Media Protocols: Why Decentralization Matters in Social Networks',
            subtitle: "",
            stage: "main",
            speakers: [
                {
                    name: "Limone.eth",
                    image: s52.src
                }
            ],
            day: 1,
            start: "10:40",
            end: "11:00",
            isWorkshop: false,
            type: "talk",
            lang: "en",
            topics: ['community', 'socialfi']
        },
        {
            id: 3,
            title: 'Unlocking the Code: Breaking Barriers with Tech Education for Women in Afghanistan',
            subtitle: "Breaking Barriers with Tech Education for Women in Afghanistan",
            stage: "main",
            speakers: [
                {
                    name: "John Lilic",
                    image: lilic.src
                }
            ],
            day: 1,
            start: "11:00",
            end: "11:20",
            isWorkshop: false,
            type: "talk",
            lang: "en",
            topics: ['education']
        },
        {
            id: 4,
            title: 'ECF Pensieve Mechanism',
            subtitle: "Decentralised Collective Intelligence for Community Coordination",
            stage: "main",
            speakers: [
                {
                    name: "QJ",
                    image: s62.src
                }
            ],
            day: 1,
            start: "11:20",
            end: "12:00",
            isWorkshop: false,
            type: "talk",
            lang: "en",
            topics: ['community']
        },
        {
            id: 544,
            title: 'Lunch Break',
            subtitle: "",
            stage: "main",
            speakers: [],
            day: 1,
            start: "12:00",
            end: "14:00",
            isWorkshop: false,
            type: "break",
            lang: "",
            topics: ['other']
        },
        {
            id: 5,
            title: ' Making Crypto Communities Funny Again',
            subtitle: "",
            stage: "main",
            speakers: [
                {
                    name: "Paolone",
                    image: s99.src
                }
            ],
            day: 1,
            start: "14:00",
            end: "14:20",
            isWorkshop: false,
            type: "talk",
            lang: "en",
            topics: ["marketing", "community"]
        },
        {
            id: 6,
            title: 'The Power of Web3 and how you Need to Drive your Community',
            subtitle: "",
            stage: "main",
            speakers: [
                {
                    name: "Bruno Miranda",
                    image: s24.src
                }
            ],
            day: 1,
            start: "14:20",
            end: "14:40",
            isWorkshop: false,
            type: "talk",
            lang: "en",
            topics: ["community", "socialfi"]
        },
        {
            id: 86,
            title: 'Digitalia: Starting the Network State in Italy',
            subtitle: "",
            stage: "main",
            speakers: [
                {
                    name: "Francesco Vincenti",
                    image: s57.src
                }
            ],
            day: 1,
            start: "14:40",
            end: "15:00",
            isWorkshop: false,
            type: "talk",
            lang: "en",
            topics: ["community"]
        },
        {
            id: 7,
            title: 'Eth Community Panel',
            subtitle: "",
            stage: "main",
            speakers: [
                {
                    name: "Matteo Tambussi",
                    image: s33.src
                },
                {
                    name: "Andreea Cia",
                    image: s38.src
                },
                {
                    name: "Andrea Marsili",
                    image: s58.src
                },
                {
                    name: "Limone.eth",
                    image: s52.src
                }
            ],
            day: 1,
            start: "15:00",
            end: "16:00",
            isWorkshop: false,
            type: "panel",
            lang: "en",
            topics: ["community"],
            moderators: [
                {
                    name: "Raffaele Orefice",
                    image: "https://napul.eth.limo/_next/static/media/raffa.c537576a.jpg"
                }
            ]
        },
        {
            id: 8,
            title: 'Education & Public Goods in the Ethereum Ecosystem',
            subtitle: "",
            stage: "main",
            speakers: [
                {
                    name: "Ornella Vallana",
                    image: s31.src
                }
            ],
            day: 1,
            start: "16:00",
            end: "16:20",
            isWorkshop: false,
            type: "talk",
            lang: "en",
            topics: ["community", "education"]
        },
        {
            id: 9,
            title: 'Napoli Blockchain introduction',
            subtitle: "",
            stage: "main",
            speakers: [
                {
                    name: "Paolo Schiattarella",
                    image: s86.src
                }
            ],
            day: 1,
            start: "16:20",
            end: "16:40",
            isWorkshop: false,
            type: "talk",
            lang: "en",
            topics: ["community"]
        },
        {
            id: 9,
            title: 'The growth of the web 3 community in Italy',
            subtitle: "",
            stage: "main",
            speakers: [
                {
                    name: "Luca Boiardi",
                    image: s22.src
                }
            ],
            day: 1,
            start: "16:40",
            end: "17:00",
            isWorkshop: false,
            type: "talk",
            lang: "it",
            topics: ['it', 'community']
        },

        // Day 1, Stage 2
        {
            id: 544,
            title: 'Breakfast',
            subtitle: "",
            stage: "stage 2",
            speakers: [],
            day: 1,
            start: "09:00",
            end: "10:00",
            isWorkshop: false,
            type: "break",
            lang: "",
            topics: ['other']
        },
        {
            id: 10,
            title: 'Blockchain e Cybersecurity nella Pubblica Amminsitrazione',
            subtitle: "",
            stage: "stage 2",
            speakers: [
                {
                    name: "William Nonnis",
                    image: s27.src
                }
            ],
            day: 1,
            start: "10:20",
            end: "10:40",
            isWorkshop: false,
            type: "talk",
            lang: "it",
            topics: ["legal", "it"]
        },
        {
            id: 11,
            title: 'Mamma, ho Perso la Chiave Privata',
            subtitle: "",
            stage: "stage 2",
            speakers: [
                {
                    name: "Vincenzo Rana",
                    image: s5.src
                },
                {
                    name: "Piera Di Stefano",
                    image: s2.src
                },
                {
                    name: "Marco Tullio Giordano",
                    image: s81.src
                }
            ],
            day: 1,
            start: "10:40",
            isWorkshop: false,
            end: "11:20",
            type: "panel",
            lang: "it",
            topics: ["legal", "it"],
            moderators: [
                {
                    name: "Ionut Gaucan",
                    image: s90.src
                }
            ]
        },
        {
            id: 12,
            title: 'Smart Contract and Blockchain in the European Legal Space',
            subtitle: "",
            stage: "stage 2",
            speakers: [
                {
                    name: "Cosimo Palma",
                    image: s4.src
                }
            ],
            day: 1,
            start: "11:20",
            isWorkshop: false,
            end: "11:40",
            type: "talk",
            lang: "it",
            topics: ["legal", "it"]
        },
        {
            id: 13,
            title: 'Privacy e Blockchain: Connubio Difficile ma Possibile',
            subtitle: "",
            stage: "stage 2",
            speakers: [
                {
                    name: "Michele Iaselli",
                    image: s28.src
                }
            ],
            day: 1,
            start: "11:40",
            isWorkshop: false,
            end: "12:00",
            type: "talk",
            lang: "it",
            topics: ["legal", "it"]
        },
        {
            id: 544,
            title: 'Lunch Break',
            subtitle: "",
            stage: "stage 2",
            speakers: [],
            day: 1,
            start: "12:00",
            end: "14:00",
            isWorkshop: false,
            type: "break",
            lang: "",
            topics: ['other']
        },
        {
            id: 14,
            title: 'What to do when Tx Reverts and the Revert Reason is Swallowed',
            subtitle: "",
            stage: "stage 2",
            speakers: [
                {
                    name: "Marek Kowalski",
                    image: s42.src
                }
            ],
            day: 1,
            start: "14:00",
            end: "14:20",
            isWorkshop: false,
            type: "talk",
            lang: "en",
            topics: ["security", "auditing"]
        },
        {
            id: 15,
            title: 'Introducing the Verifier Alliance',
            subtitle: "",
            stage: "stage 2",
            speakers: [
                {
                    name: "Marco Castignoli",
                    image: s15.src
                }
            ],
            day: 1,
            isWorkshop: false,
            start: "14:20",
            end: "14:40",
            type: "talk",
            lang: "en",
            topics: ["security", "auditing"]
        },
        {
            id: 16,
            title: 'Havoc Network: How to Spot Consensus Bugs in Large-Scale Decentralised Infrastructures',
            subtitle: "",
            stage: "stage 2",
            speakers: [
                {
                    name: "Stefano De Angelis",
                    image: s18.src
                }
            ],
            day: 1,
            start: "14:40",
            end: "15:00",
            isWorkshop: false,
            type: "talk",
            lang: "en",
            topics: ["security", "auditing"]
        },
        {
            id: 17,
            title: 'Security & Privacy for a new Web paradigm',
            subtitle: "",
            stage: "stage 2",
            speakers: [
                {
                    name: "Luca Bertelli",
                    image: s101.src
                }
            ],
            day: 1,
            start: "15:00",
            end: "15:20",
            isWorkshop: false,
            type: "talk",
            lang: "en",
            topics: ["scaling", "l2"]
        },
        {
            id: 18,
            title: 'Trust-Driven Web3 Marketing: Security Audits as a Marketing Tactic',
            subtitle: "",
            stage: "stage 2",
            speakers: [
                {
                    name: "Vanina Ivanova",
                    image: s3.src
                }
            ],
            day: 1,
            start: "15:20",
            end: "15:40",
            isWorkshop: false,
            type: "talk",
            lang: "en",
            topics: ["security", "auditing"]
        },
        {
            id: 19,
            title: 'Facts and Figures about Web3 Security: Where Do We Stand?',
            subtitle: "",
            stage: "stage 2",
            speakers: [
                {
                    name: "Davide Carboni",
                    image: s68.src
                }
            ],
            day: 1,
            start: "15:40",
            end: "16:00",
            isWorkshop: false,
            type: "talk",
            lang: "en",
            topics: ["security", "auditing"]
        },
        {
            id: 20,
            title: 'Secrets of Uniswap V4: A Deep Dive into Hooks Security',
            subtitle: "",
            stage: "stage 2",
            speakers: [
                {
                    name: "Damian Rusinek",
                    image: s60.src
                }
            ],
            day: 1,
            start: "16:00",
            end: "16:20",
            isWorkshop: false,
            type: "talk",
            lang: "en",
            topics: ["security", "auditing"]
        },
        {
            id: 21,
            title: 'DeFi Exchange Protocols 101: Precision and Accuracy in Fixed-Point Arithmetic ',
            subtitle: "",
            stage: "stage 2",
            speakers: [
                {
                    name: "Mark Richardson",
                    image: s16.src
                }
            ],
            day: 1,
            start: "16:20",
            end: "16:40",
            isWorkshop: false,
            type: "talk",
            lang: "en",
            topics: ["security", "defi"]
        },
        {
            id: 22,
            title: 'Algorithmic Risk Pricing: Keeping yourself safe in the ecosystem ',
            subtitle: "",
            stage: "stage 2",
            speakers: [
                {
                    name: "Bock",
                    image: s54.src
                }
            ],
            day: 1,
            start: "16:40",
            end: "17:00",
            isWorkshop: false,
            type: "talk",
            lang: "en",
            topics: ['security', 'auditing']
        },

        // Day 1, Stage 3
        {
            id: 544,
            title: 'Breakfast',
            subtitle: "",
            stage: "stage 3",
            speakers: [],
            day: 1,
            start: "09:00",
            end: "10:00",
            isWorkshop: false,
            type: "break",
            lang: "",
            topics: ['other']
        },
        {
            id: 23,
            title: 'Web3 Marketing: Strategies for B2B and B2C in the Decentralized Era',
            subtitle: "",
            isWorkshop: false,
            stage: "stage 3",
            speakers: [
                {
                    name: "James Rae",
                    image: s26.src
                },
                {
                    name: "Victor Tamer",
                    image: s65.src
                }
            ],
            day: 1,
            start: "10:40",
            end: "11:20",
            type: "panel",
            lang: "en",
            topics: ["marketing"],
            moderators: [
                {
                    name: "Dayana Aleksandrova ",
                    image: s25.src
                }
            ]
        },
        {
            id: 24,
            title: 'Web3 for Education and Recruiting',
            subtitle: "",
            stage: "stage 3",
            isWorkshop: false,
            speakers: [
                {
                    name: "Gianfranco Leone",
                    image: s23.src
                }
            ],
            day: 1,
            start: "11:20",
            end: "11:40",
            type: "talk",
            lang: "en",
            topics: ["marketing", "education"]
        },
        {
            id: 25,
            title: 'The Critical Role of Reputation and Relationships in Web3',
            subtitle: "",
            stage: "stage 3",
            speakers: [
                {
                    name: "Lukas Meilhammer",
                    image: s100.src
                }
            ],
            day: 1,
            start: "11:40",
            isWorkshop: false,
            end: "12:00",
            type: "talk",
            lang: "en",
            topics: ["marketing"]
        },
        {
            id: 544,
            title: 'Lunch Break',
            subtitle: "",
            stage: "stage 3",
            speakers: [],
            day: 1,
            start: "12:00",
            end: "14:00",
            isWorkshop: false,
            type: "break",
            lang: "",
            topics: ['other']
        },
        {
            id: 26,
            title: 'Defi Workshop',
            subtitle: "",
            stage: "stage 3",
            isWorkshop: false,
            speakers: [
                {
                    name: "Andrea Paulillo",
                    image: s8.src
                }
            ],
            day: 1,
            start: "14:00",
            end: "15:00",
            type: "workshop",
            lang: "en",
            topics: ["quantum", "defi"]
        },
        {
            id: 27,
            title: 'How to Simplify UI in Defi, Diving into Nex Protocol',
            subtitle: "",
            stage: "stage 3",
            isWorkshop: true,
            speakers: [
                {
                    name: "Gianluca Di Bella",
                    image: "https://napul.eth.limo/_next/static/media/gianluca.ad2208c0.jpeg"
                },
                {
                    name: "Lorenzo Ceppaluni",
                    image: "https://napul.eth.limo/_next/static/media/lore.28ce2651.jpeg"
                }
            ],
            day: 1,
            start: "15:00",
            end: "16:00",
            type: "workshop",
            lang: "en",
            topics: ["defi"]
        },
        {
            id: 28,
            title: 'Solo Staking is Dead? Crypto Passive Incomes.',
            subtitle: "",
            stage: "stage 3",
            speakers: [
                {
                    name: "Davide Milani",
                    image: s66.src
                }
            ],
            day: 1,
            start: "16:00",
            end: "16:40",
            isWorkshop: false,
            type: "talk",
            lang: "en",
            topics: ["staking"]
        },

        // Day 2, Stage 1 (Main)
        {
            id: 544,
            title: 'Breakfast',
            subtitle: "",
            stage: "main",
            speakers: [],
            day: 2,
            start: "09:00",
            end: "10:00",
            isWorkshop: false,
            type: "break",
            lang: "",
            topics: ['other']
        },
        {
            id: 290,
            title: 'What is Bitomat?',
            subtitle: "",
            isWorkshop: false,
            stage: "main",
            speakers: [
                {
                    name: "Gianluca Di Bella",
                    image: "https://napul.eth.limo/_next/static/media/gianluca.ad2208c0.jpeg"
                }
            ],
            day: 2,
            start: "10:00",
            end: "10:20",
            type: "talk",
            lang: "en",
            topics: ['defi']
        },
        {
            id: 29,
            title: 'Federating Multichains: Scaling With Compliance and Existing Technology',
            subtitle: "",
            isWorkshop: false,
            stage: "main",
            speakers: [
                {
                    name: "IIvan Bjelajac",
                    image: s92.src
                }
            ],
            day: 2,
            start: "10:20",
            end: "10:40",
            type: "talk",
            lang: "en",
            topics: ['defi']
        },
        {
            id: 30,
            title: 'Shaping Crypto: The Impact of TAPTAP Projects and the P2E Wave',
            subtitle: "",
            isWorkshop: false,
            stage: "main",
            speakers: [
                {
                    name: "Michele Lotta",
                    image: s69.src
                },
                {
                    name: "Viktor",
                    image: s96.src
                }
            ],
            day: 2,
            start: "10:40",
            end: "11:20",
            type: "panel",
            lang: "en",
            topics: ["defi"],
            moderators: [
                {
                    name: "Chiara Munaretto",
                    image: s91.src
                },
                {
                    name: "Gianluca Di Bella",
                    image: "https://napul.eth.limo/_next/static/media/gianluca.ad2208c0.jpeg"
                }
            ]
        },
        {
            id: 311,
            title: 'Lido Community Staking Module',
            subtitle: "",
            isWorkshop: false,
            stage: "main",
            speakers: [
                {
                    name: "Dmitry Chernukhin",
                    image: s97.src
                }
            ],
            day: 2,
            start: "11:20",
            end: "11:40",
            type: "talk",
            lang: "en",
            topics: ["defi"]
        },
        {
            id: 31,
            title: 'Splitting the Block',
            subtitle: "",
            isWorkshop: false,
            stage: "main",
            speakers: [
                {
                    name: "Daniele Palombi",
                    image: s79.src
                }
            ],
            day: 2,
            start: "11:40",
            end: "12:00",
            type: "talk",
            lang: "en",
            topics: ["defi"]
        },
        {
            id: 544,
            title: 'Lunch Break',
            subtitle: "",
            stage: "main",
            speakers: [],
            day: 2,
            start: "12:00",
            end: "14:00",
            isWorkshop: false,
            type: "break",
            lang: "",
            topics: ['other']
        },
        {
            id: 32,
            title: ' La Semplicità, dalla Finanza Tradizionale a Youhodler',
            subtitle: "",
            stage: "main",
            isWorkshop: false,
            speakers: [
                {
                    name: "Francesco Britti",
                    image: s39.src
                }
            ],
            day: 2,
            start: "14:00",
            end: "14:40",
            type: "talk",
            lang: "it",
            topics: ['defi']
        },
        {
            id: 33,
            title: 'DeFi Marketing Odyssey',
            subtitle: "",
            isWorkshop: false,
            stage: "main",
            speakers: [
                {
                    name: "Maria Maganes",
                    image: s94.src
                }
            ],
            day: 2,
            start: "14:40",
            end: "15:00",
            type: "talk",
            lang: "en",
            topics: ["defi"],
        },
        {
            id: 333,
            title: 'Bolt Protocol: Instant Transfers on Ethereum Mainnet',
            subtitle: "",
            isWorkshop: false,
            stage: "main",
            speakers: [
                {
                    name: "Lorenzo Feroleto",
                    image: s102.src
                },
                {
                    name: "Nicolas Racchi",
                    image: s103.src
                }
            ],
            day: 2,
            start: "15:00",
            end: "15:20",
            type: "talk",
            lang: "en",
            topics: ["defi"],
        },
        {
            id: 34,
            title: 'Why we Need Trustless Finance',
            subtitle: "",
            isWorkshop: false,
            stage: "main",
            speakers: [
                {
                    name: "Cryptocuty",
                    image: s72.src
                }
            ],
            day: 2,
            start: "15:20",
            end: "15:40",
            type: "talk",
            lang: "en",
            topics: ["defi"]
        },
        {
            id: 35,
            isWorkshop: false,
            title: 'Risks in DeFi',
            subtitle: "",
            stage: "main",
            speakers: [
                {
                    name: "Carlo Parisi",
                    image: s74.src
                }
            ],
            day: 2,
            start: "15:40",
            end: "16:00",
            type: "talk",
            lang: "en",
            topics: ["defi"]
        },
        {
            id: 36,
            title: 'Crosschain DeFi to Compete with CeFi',
            subtitle: "",
            isWorkshop: false,
            stage: "main",
            speakers: [
                {
                    name: "Filippo Moraschi",
                    image: s80.src
                }
            ],
            day: 2,
            start: "16:00",
            end: "16:20",
            type: "talk",
            lang: "en",
            topics: ["defi"]
        },
        {
            id: 37,
            title: 'How Geopolitics and Macroeconomics Influence Token Volatility',
            subtitle: "",
            isWorkshop: false,
            stage: "main",
            speakers: [
                {
                    name: "Valentina Marzioni ",
                    image: s61.src
                }
            ],
            day: 2,
            start: "16:20",
            end: "16:40",
            type: "talk",
            lang: "en",
            topics: ["defi"]
        },
        {
            id: 38,
            isWorkshop: false,
            title: 'Innovation and the Financial Future',
            subtitle: "",
            stage: "main",
            speakers: [
                {
                    name: "Mario Giovanni Figlioli",
                    image: s87.src
                },
                {
                    name: "Malek Almsaddi",
                    image: s88.src
                }
            ],
            day: 2,
            start: "16:40",
            end: "17:00",
            type: "talk",
            lang: "en",
            topics: ["defi"]
        },

        // Day 2, Stage 2
        {
            id: 544,
            title: 'Breakfast',
            subtitle: "",
            stage: "stage 2",
            speakers: [],
            day: 2,
            start: "09:00",
            end: "10:00",
            isWorkshop: false,
            type: "break",
            lang: "",
            topics: ['other']
        },
        {
            id: 39,
            title: 'How to Use Blockchain Tech for a Supply Chain System',
            subtitle: "",
            isWorkshop: false,
            stage: "stage 2",
            speakers: [
                {
                    name: "Elio Barbera",
                    image: s37.src
                }
            ],
            day: 2,
            start: "10:00",
            end: "10:20",
            type: "talk",
            lang: "en",
            topics: ["rwa"]
        },
        {
            id: 40,
            isWorkshop: false,
            title: ' Tokenization Unfolding: the Merge of TradFi and DeFi',
            subtitle: "",
            stage: "stage 2",
            speakers: [
                {
                    name: "Pietro Rossetto",
                    image: s17.src
                }
            ],
            day: 2,
            start: "10:20",
            end: "10:40",
            type: "talk",
            lang: "en",
            topics: ["rwa", "defi"]
        },
        {
            id: 41,
            title: 'Real World Asset Tokenization: Merging Traditional Finance with Digital Innovation',
            subtitle: "",
            stage: "stage 2",
            isWorkshop: false,
            speakers: [
                {
                    name: "Silvio Ventre",
                    image: s48.src
                },
                {
                    name: "Lorenzo Amoroso ",
                    image: s64.src
                },
                {
                    name: "Philipp Pieper",
                    image: s63.src
                },
                {
                    name: "Lorenzo Rigatti",
                    image: s13.src
                }
            ],
            day: 2,
            start: "10:40",
            end: "11:20",
            type: "panel",
            lang: "en",
            topics: ["rwa"],
            moderators: [
                {
                    name: "Ionut Gaucan",
                    image: s90.src
                }
            ]
        },
        {
            id: 42,
            title: 'On-chain Finance: One Block at a Time',
            subtitle: "",
            isWorkshop: false,
            stage: "stage 2",
            speakers: [
                {
                    name: "Lorenzo Rigatti",
                    image: s13.src
                }
            ],
            day: 2,
            start: "11:20",
            end: "11:40",
            type: "talk",
            lang: "en",
            topics: ["rwa", "defi"]
        },
        {
            id: 43,
            title: 'Bringing Real World Assets to DeFi',
            subtitle: "",
            stage: "stage 2",
            isWorkshop: false,
            speakers: [
                {
                    name: "Christian Santagata",
                    image: s29.src
                }
            ],
            day: 2,
            start: "11:40",
            end: "12:00",
            type: "talk",
            lang: "en",
            topics: ["rwa", "defi"]
        },
        {
            id: 544,
            title: 'Lunch Break',
            subtitle: "",
            stage: "stage 2",
            speakers: [],
            day: 2,
            start: "12:00",
            end: "14:00",
            isWorkshop: false,
            type: "break",
            lang: "",
            topics: ['other']
        },
        {
            id: 44,
            title: "Evoluzione dell'Identità Digitale: eiDAS2 e l'Ascesa della Self Sovereign Identity",
            subtitle: "",
            isWorkshop: false,
            stage: "stage 2",
            speakers: [
                {
                    name: "Filippo Chiricozzi",
                    image: s34.src
                }
            ],
            day: 2,
            start: "14:00",
            end: "14:20",
            type: "talk",
            lang: "it",
            topics: ["digital identity", "legal", "it"]
        },
        {
            id: 45,
            title: 'Considerazioni su MICAr',
            subtitle: "",
            isWorkshop: false,
            stage: "stage 2",
            speakers: [
                {
                    name: "Giovanni Piccirillo",
                    image: "https://moodglobalservices.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPolygon9.2a45b724.png&w=256&q=75"
                }
            ],
            day: 2,
            start: "14:20",
            end: "14:40",
            type: "talk",
            lang: "it",
            topics: ["legal", "it"]
        },
        {
            id: 46,
            title: 'Blockchain, Web3 e Criptovalute: Stato di Adozione e Sviluppi Futuri',
            subtitle: "",
            stage: "stage 2",
            isWorkshop: false,
            speakers: [
                {
                    name: "Davide Ghezzi",
                    image: s40.src
                }
            ],
            day: 2,
            start: "14:40",
            end: "15:00",
            type: "talk",
            lang: "it",
            topics: ["education", "legal", "it"]
        },
        {
            id: 47,
            title: 'MICAr dopo 3 mesi. Cosa succeede in Europa?',
            isWorkshop: false,
            subtitle: "",
            stage: "stage 2",
            speakers: [
                {
                    name: "Marco Tulio Giordano",
                    image: s81.src
                },
                {
                    name: "Edoardo degli Innocenti",
                    image: s93.src
                }
            ],
            day: 2,
            start: "15:00",
            end: "15:40",
            type: "panel",
            lang: "it",
            topics: ["it", "legal"],
            moderators: [
                {
                    name: "Giovanni Piccirillo",
                    image: "https://moodglobalservices.com/_next/image?url=%2F_next%2Fstatic%2Fmedia%2FPolygon9.2a45b724.png&w=256&q=75"
                }
            ]
        },
        {
            id: 48,
            title: 'Quando lo Scam Danneggia la Tua Reputazione',
            subtitle: "",
            isWorkshop: false,
            stage: "stage 2",
            speakers: [
                {
                    name: "Piera Di Stefano",
                    image: s2.src
                }
            ],
            day: 2,
            start: "15:40",
            end: "16:00",
            type: "talk",
            lang: "it",
            topics: ["legal", "it"]
        },
        {
            id: 481,
            title: 'DeFi vs TradFi: Sfide, Problemi e Cosa ci Riserva il Futuro',
            subtitle: "",
            isWorkshop: false,
            stage: "stage 2",
            speakers: [
                {
                    name: "Francesco Bianchi",
                    image: s41.src
                },
                {
                    name: "Rosario Napolano",
                    image: s71.src
                },
                {
                    name: "Gianluca Di Bella",
                    image: "https://napul.eth.limo/_next/static/media/gianluca.ad2208c0.jpeg"
                },
            ],
            day: 2,
            start: "16:00",
            end: "16:40",
            type: "panel",
            lang: "it",
            topics: ["defi"]
        },

        // Day 2, Stage 3
        {
            id: 544,
            title: 'Breakfast',
            subtitle: "",
            stage: "stage 3",
            speakers: [],
            day: 2,
            start: "09:00",
            end: "10:00",
            isWorkshop: false,
            type: "break",
            lang: "",
            topics: ['other']
        },
        {
            id: 50,
            title: 'Empowering Devs: A Practical Guide to User-Centric UI/UX Design in Web3',
            subtitle: "",
            stage: "stage 3",
            isWorkshop: false,
            speakers: [
                {
                    name: "Sundaram Jha",
                    image: s11.src
                }
            ],
            day: 2,
            start: "11:00",
            end: "12:00",
            type: "workshop",
            lang: "en",
            topics: ["ux"]
        },
        {
            id: 544,
            title: 'Lunch Break',
            subtitle: "",
            stage: "stage 3",
            speakers: [],
            day: 2,
            start: "12:00",
            end: "14:00",
            isWorkshop: false,
            type: "break",
            lang: "",
            topics: ['other']
        },
        {
            id: 52,
            title: 'Essential Maths for Zero Knowledge Proofs',
            subtitle: "",
            isWorkshop: false,
            stage: "stage 3",
            speakers: [
                {
                    name: "Laurence Kirk",
                    image: s73.src
                }
            ],
            day: 2,
            start: "14:00",
            end: "15:00",
            type: "workshop",
            lang: "en",
            topics: ["zk proofs"]
        },
        {
            id: 53,
            title: 'Open Games Meet HEVM',
            subtitle: "",
            stage: "stage 3",
            isWorkshop: true,
            speakers: [
                {
                    name: "Philipp Zahn",
                    image: s70.src
                }
            ],
            day: 2,
            start: "15:00",
            end: "16:00",
            type: "workshop",
            lang: "en",
            topics: ["game theory"]
        },
        {
            id: 54,
            title: 'Monetize and Protect Data: A Web3 Developer Toolkit',
            subtitle: "",
            isWorkshop: false,
            stage: "stage 3",
            speakers: [
                {
                    name: "Martin Leclerq",
                    image: s75.src
                }
            ],
            day: 2,
            start: "16:00",
            end: "17:00",
            type: "workshop",
            lang: "en",
            topics: ["security"]
        },

        // Day 3 , Stage 1 (Main)
        {
            id: 544,
            title: 'Breakfast',
            subtitle: "",
            stage: "main",
            speakers: [],
            day: 3,
            start: "09:00",
            end: "10:00",
            isWorkshop: false,
            type: "break",
            lang: "",
            topics: ['other']
        },
        {
            id: 55,
            title: 'Post-Quantum World: Are We Ready?',
            subtitle: "",
            isWorkshop: false,
            stage: "main",
            speakers: [
                {
                    name: "Lucas Bonnard",
                    image: s98.src
                }
            ],
            day: 3,
            start: "10:00",
            end: "10:20",
            type: "talk",
            lang: "en",
            topics: ["quantum"]
        },
        {
            id: 56,
            title: 'The Future is Quantum',
            subtitle: "",
            stage: "main",
            isWorkshop: false,
            speakers: [
                {
                    name: "Fabrizio Genovese",
                    image: "https://napul.eth.limo/_next/static/media/FabrizioGenovese.bdcae4db.jpg"
                }
            ],
            day: 3,
            start: "10:20",
            end: "10:40",
            type: "talk",
            lang: "en",
            topics: ["quantum"]
        },
        {
            id: 57,
            title: 'Quantum Doom Vs, Quantum Optimism',
            subtitle: "",
            isWorkshop: false,
            stage: "main",
            speakers: [
                {
                    name: "Stefano Gogioso",
                    image: s76.src
                },
                {
                    name: "Ian Smith",
                    image: s83.src
                },
                {
                    name: "Lucas Bonnard",
                    image: s98.src
                }
            ],
            day: 3,
            start: "10:40",
            end: "11:20",
            type: "panel",
            lang: "en",
            topics: ["quantum"],
            moderators: [
                {
                    name: "Fabrizio Genovese",
                    image: "https://napul.eth.limo/_next/static/media/FabrizioGenovese.bdcae4db.jpg"
                }
            ]
        },
        {
            id: 58,
            title: 'Device-Independent Quantum Cryptography',
            isWorkshop: false,
            subtitle: "",
            stage: "main",
            speakers: [
                {
                    name: "Stefano Gogioso",
                    image: s76.src
                }
            ],
            day: 3,
            start: "11:20",
            end: "11:40",
            type: "talk",
            lang: "en",
            topics: ["quantum"]
        },
        {
            id: 59,
            title: 'Quantum Computing vs Web3 Cryptography: Risks, Challenges and Opportunities',
            subtitle: "",
            stage: "main",
            isWorkshop: false,
            speakers: [
                {
                    name: "Ian Smith",
                    image: s83.src
                }
            ],
            day: 3,
            start: "11:40",
            end: "12:00",
            type: "talk",
            lang: "en",
            topics: ["quantum"]
        },
        {
            id: 544,
            title: 'Lunch Break',
            subtitle: "",
            stage: "main",
            speakers: [],
            day: 3,
            start: "12:00",
            end: "14:00",
            isWorkshop: false,
            type: "break",
            lang: "",
            topics: ['other']
        },
        {
            id: 60,
            title: 'NFTs on Bitcoin',
            subtitle: "",
            stage: "main",
            isWorkshop: false,
            speakers: [
                {
                    name: "ChefPino",
                    image: s82.src
                }
            ],
            day: 3,
            start: "14:00",
            end: "14:20",
            type: "talk",
            lang: "en",
            topics: ["nft", "bitcoin", "art"]
        },
        // {
        //     id: 61,
        //     title: 'Branding in the Blockchain Era: Navigating NFTs and Web3 for Business Innovation',
        //     subtitle: "",
        //     stage: "main",
        //     isWorkshop: false,
        //     speakers: [
        //         {
        //             name: "Sara Noggler",
        //             image: s6.src
        //         }
        //     ],
        //     day: 3,
        //     start: "14:20",
        //     end: "14:40",
        //     type: "talk",
        //     lang: "en",
        //     topics: ["art"]
        // },
        {
            id: 62,
            title: 'NFTs for a Better World: Tokenization, Gaming, and Charity in the Future of Blockchain',
            isWorkshop: false,
            subtitle: "",
            stage: "main",
            speakers: [
                {
                    name: "Alessandro Brigato",
                    image: s51.src
                },
                {
                    name: "Antonio Ramicello",
                    image: s59.src
                },
                {
                    name: "Alessandra Brandi",
                    image: s7.src
                }
            ],
            day: 3,
            start: "14:20",
            end: "15:20",
            type: "panel",
            lang: "en",
            topics: ["art"],
            moderators: [
                {
                    name: "Victor Tamer",
                    image: s65.src
                }
            ]
        },
        {
            id: 63,
            title: 'Web3 #tarantellafriendly',
            isWorkshop: false,
            subtitle: "",
            stage: "main",
            speakers: [
                {
                    name: "Alessandra Brandi",
                    image: s7.src
                }
            ],
            day: 3,
            start: "15:20",
            end: "15:40",
            type: "talk",
            lang: "en",
            topics: ["art"]
        },
        {
            id: 64,
            title: 'Gaming: The New Frontier of Engagement and the Next Social Media Revolution',
            subtitle: "",
            isWorkshop: false,
            stage: "main",
            speakers: [
                {
                    name: "Morteza Shahini",
                    image: s77.src
                },
                {
                    name: "Soe Haghighi",
                    image: s95.src
                }
            ],
            day: 3,
            start: "15:40",
            end: "16:20",
            type: "talk",
            lang: "en",
            topics: ["gaming"]
        },
        {
            id: 65,
            title: 'Closing: Startup Battle Winner, BGA, Core Team Greetings',
            subtitle: "Startup Winner",
            isWorkshop: false,
            stage: "main",
            speakers: [
                {
                    name: 'NapulETH',
                    image: 'https://belonqevent.com/wp-content/uploads/2024/07/Logo_NapulETH.svg'
                }
            ],
            day: 3,
            start: "16:20",
            end: "17:00",
            type: "talk",
            lang: "en",
            topics: ['other']
        },

        // Day 3 , Stage 2
        {
            id: 544,
            title: 'Breakfast',
            subtitle: "",
            stage: "stage 2",
            speakers: [],
            day: 3,
            start: "09:00",
            end: "10:00",
            isWorkshop: false,
            type: "break",
            lang: "",
            topics: ['other']
        },
        {
            id: 66,
            title: 'Investigating the Prospects of Web3, NFTs, and the Metaverse',
            subtitle: "",
            isWorkshop: false,
            stage: "stage 2",
            speakers: [
                {
                    name: "Isola",
                    image: s1.src
                }
            ],
            day: 3,
            start: "10:00",
            end: "10:20",
            type: "talk",
            lang: "en",
            topics: ["art"]
        },
        {
            id: 67,
            title: 'NFT and Utilities: Building Memberships and Loyalty Programs',
            subtitle: "",
            isWorkshop: false,
            stage: "stage 2",
            speakers: [
                {
                    name: "Miro Radenovic",
                    image: s32.src
                }
            ],
            day: 3,
            start: "10:20",
            end: "10:40",
            type: "talk",
            lang: "en",
            topics: ["art"]
        },
        {
            id: 68,
            title: 'Le Fasi del Web dal 1990 al 2030',
            subtitle: "",
            isWorkshop: false,
            stage: "stage 2",
            speakers: [
                {
                    name: "Fabrizio Maiocco",
                    image: s55.src
                }
            ],
            day: 3,
            start: "10:40",
            end: "11:20",
            type: "talk",
            lang: "it",
            topics: ["art"]
        },
        {
            id: 69,
            title: 'A New Patronage Class in the Digital Art World',
            subtitle: "",
            stage: "stage 2",
            isWorkshop: false,
            speakers: [
                {
                    name: "Francesco Fontana",
                    image: s35.src
                }
            ],
            day: 3,
            start: "11:20",
            end: "11:40",
            type: "talk",
            lang: "en",
            topics: ["art"]
        },
        {
            id: 70,
            title: 'How Web3 is Reshaping Fashion and Luxury',
            subtitle: "",
            isWorkshop: false,
            stage: "stage 2",
            speakers: [
                {
                    name: "Americo Cacciapuoti",
                    image: s36.src
                }
            ],
            day: 3,
            start: "11:40",
            end: "12:00",
            type: "talk",
            lang: "en",
            topics: ["art", "marketing"]
        },
        {
            id: 544,
            title: 'Lunch Break',
            subtitle: "",
            stage: "stage 2",
            speakers: [],
            day: 3,
            start: "12:00",
            end: "14:00",
            isWorkshop: false,
            type: "break",
            lang: "",
            topics: ['other']
        },
        {
            id: 71,
            title: 'AI Singularity: AI x Crypto Convergence',
            subtitle: "",
            isWorkshop: false,
            stage: "stage 2",
            speakers: [
                {
                    name: "Luigi Senese",
                    image: s49.src
                }
            ],
            day: 3,
            start: "14:00",
            end: "14:20",
            type: "talk",
            lang: "en",
            topics: ["privacy", "ai"]
        },
        {
            id: 72,
            title: 'Optimizing Commit-and-Reveal for Smart Contracts',
            isWorkshop: false,
            subtitle: "",
            stage: "stage 2",
            speakers: [
                {
                    name: "Julie Bettens",
                    image: s50.src
                }
            ],
            day: 3,
            start: "14:20",
            end: "14:40",
            type: "talk",
            lang: "en",
            topics: ["privacy"]
        },
        {
            id: 73,
            title: 'The Future of Privacy: Exploring ZK, Quantum, and Beyond',
            isWorkshop: false,
            subtitle: "",
            stage: "stage 2",
            speakers: [
                {
                    name: "Vladyslav Dudchenko",
                    image: s45.src
                },
                {
                    name: "Laurence Kirk",
                    image: s73.src
                },
                {
                    name: "Daniele Palombi",
                    image: s79.src
                }
            ],
            day: 3,
            start: "14:40",
            end: "15:20",
            type: "panel",
            lang: "en",
            topics: ["privacy", "zk proofs", "quantum"],
            moderators: [
                {
                    name: "Gianluca Di Bella",
                    image: "https://napul.eth.limo/_next/static/media/gianluca.ad2208c0.jpeg"
                }
            ]
        },
        {
            id: 74,
            title: "It's Time for TEEs",
            subtitle: "",
            stage: "stage 2",
            isWorkshop: false,
            speakers: [
                {
                    name: "Gavin Thomas",
                    image: s78.src
                }
            ],
            day: 3,
            start: "15:20",
            end: "15:40",
            type: "talk",
            lang: "en",
            topics: ["privacy"]
        },
        {
            id: 75,
            title: 'Zero-Knowledge Proofs Demystified: A Beginner’s Guide',
            isWorkshop: false,
            subtitle: "",
            stage: "stage 2",
            speakers: [
                {
                    name: "Raffaele Orefice",
                    image: "https://napul.eth.limo/_next/static/media/raffa.c537576a.jpg"
                }
            ],
            day: 3,
            start: "15:40",
            end: "16:00",
            type: "talk",
            lang: "en",
            topics: ["zk proofs"]
        },
        {
            id: 76,
            title: 'Digital Identity of Businesses and Employees: Key Technology in Fighting AI Phishing and Control of Digital Assets',
            isWorkshop: false,
            subtitle: "",
            stage: "stage 2",
            speakers: [
                {
                    name: "Federico Costa",
                    image: s53.src
                }
            ],
            day: 3,
            start: "16:00",
            end: "16:20",
            type: "talk",
            lang: "en",
            topics: ["privacy", "legal"]
        },

        // Day 3, Stage 3
        {
            id: 544,
            title: 'Breakfast',
            subtitle: "",
            stage: "stage 3",
            speakers: [],
            day: 3,
            start: "09:00",
            end: "10:00",
            isWorkshop: false,
            type: "break",
            lang: "",
            topics: ['other']
        },
        {
            id: 77,
            title: 'Privacy in Machine Learning with zkML',
            isWorkshop: false,
            subtitle: "",
            stage: "stage 3",
            speakers: [
                {
                    name: "Laurence Kirk",
                    image: s73.src
                }
            ],
            day: 3,
            start: "10:00",
            end: "11:00",
            type: "workshop",
            lang: "en",
            topics: ["privacy"]
        },
        {
            id: 78,
            title: 'Guadagna con la Volatilità',
            isWorkshop: false,
            subtitle: "",
            stage: "stage 3",
            speakers: [
                {
                    name: "Stefano De Masi",
                    image: s89.src
                }
            ],
            day: 3,
            start: "11:00",
            end: "12:00",
            type: "workshop",
            lang: "it",
            topics: ["defi"]
        },
        {
            id: 544,
            title: 'Lunch Break',
            subtitle: "",
            stage: "stage 3",
            speakers: [],
            day: 3,
            start: "12:00",
            end: "14:00",
            isWorkshop: false,
            type: "break",
            lang: "en",
            topics: ['other']
        },
    ]

    const { t, i18n } = useTranslation();

    const [day, setDay] = useState(1)

    const [filtersOpened, setFiltersOpened] = useState(false);

    const [typeFilter, setTypeFilter] = useState<string[]>([]);
    const [languageFilter, setLanguageFilter] = useState<string[]>([]);
    const [topicFilter, setTopicFilter] = useState<string[]>([]);
    const [searchString, setSearchString] = useState("");

    const [filteredEvents, setFilteredEvents] = useState(events);

    function toggleType(property: string) {
        setTypeFilter((prevTypeFilter) => {
            if (prevTypeFilter.includes(property)) {
                return prevTypeFilter.filter((type) => type !== property);
            } else {
                return [...prevTypeFilter, property];
            }
        });
    }

    function toggleLang(language: string) {
        setLanguageFilter((prevLanguageFilter) => {
            if (prevLanguageFilter.includes(language)) {
                return prevLanguageFilter.filter((lang) => lang !== language);
            } else {
                return [...prevLanguageFilter, language];
            }
        });
    }

    function toggleTopic(topic: string) {
        setTopicFilter((prevTopicFilter) => {
            if (prevTopicFilter.includes(topic)) {
                return prevTopicFilter.filter((top) => top !== topic);
            } else {
                return [...prevTopicFilter, topic];
            }
        });
    }

    function changeSearchString(s: string) {
        setSearchString(s);
    }

    function filterEvents(events: any[]) {
        if (searchString != "") {
            return events.filter((event) =>
                event.title.toLowerCase().includes(searchString.toLowerCase())
                || event.speakers.some((speaker: { name: string; image: string }) => speaker.name.toLowerCase().includes(searchString.toLowerCase()))
            );
        }
        else if (typeFilter.length === 0 && languageFilter.length === 0 && topicFilter.length === 0 && searchString === "") {
            return events;
        }

        else return events.filter((event) => {
            let matches = true;

            if (typeFilter.length > 0 && !typeFilter.includes(event.type)) {
                matches = false;
            }

            if (languageFilter.length > 0 && !languageFilter.includes(event.lang)) {
                matches = false;
            }

            if (topicFilter.length > 0 && !event.topics.some((topic: string) => topicFilter.includes(topic))) {
                matches = false;
            }

            return matches;
        });
    }



    function toggleFilters() {
        if (filtersOpened) setFiltersOpened(false)
        else setFiltersOpened(true)
    }

    function resetFilters() {
        setTypeFilter([]);
        setLanguageFilter([]);
    }

    useEffect(() => {
        console.log(typeFilter);
        console.log(filteredEvents);
        console.log(languageFilter);
        console.log(searchString);
        console.log(topicFilter);
        const newFilteredEvents = filterEvents(events);
        setFilteredEvents(newFilteredEvents);
    }, [typeFilter, languageFilter, topicFilter, searchString]);

    return (
        <section className="w-full lg:w-10/12 mx-auto flex flex-col items-center justify-start mt-20 gap-2">
            <div className="w-11/12 lg:w-10/12 h-fit flex flex-col items-center justify-start">

                <div className="w-full h-fit flex flex-row items-center justify-stretch gap-1 mb-4">
                    <input
                        type="text"
                        className="w-full mx-auto bg-white border border-white p-4 rounded-md lg:w-[95%]"
                        placeholder="Search..."
                        onChange={(e) => { changeSearchString(e.target.value.toLowerCase()) }}
                    />
                    <button className=" bg-white rounded-md py-2 px-3 lg:px-0 flex flex-row items-center justify-center flex-grow w-fit lg:w-[5%] h-14" onClick={toggleFilters}>
                        <IoFilterOutline size={26} color="#252525" />
                    </button>
                </div>
                {
                    filtersOpened ? (
                        <div className="w-full h-fit bg-white rounded-md p-4 mb-4 flex flex-col items-start justify-start">
                            <div className="w-full h-fit flex flex-row items-center justify-between mb-3">
                                <p className="text-xl text-black Medium">Filters:</p>
                                <p className="text-md text-blue-500 cursor-pointer" onClick={() => { resetFilters() }}>Reset all</p>
                            </div>

                            <p className="text-lg text-black Medium mb-2">Type:</p>
                            <div className="w-full h-fit flex flex-row items-center justify-start gap-2 mb-3">
                                <button className={`py-1 px-3 rounded-full border border-black ${typeFilter.includes('talk') ? "text-white bg-black" : "text-black bg-white"}`} onClick={() => { toggleType('talk'); }}>Talks</button>
                                <button className={`py-1 px-3 rounded-full border border-black ${typeFilter.includes('panel') ? "text-white bg-black" : "text-black bg-white"}`} onClick={() => { toggleType('panel'); }}>Panels</button>
                                <button className={`py-1 px-3 rounded-full border border-black ${typeFilter.includes('workshop') ? "text-white bg-black" : "text-black bg-white"}`} onClick={() => { toggleType('workshop'); }}>Workshops</button>
                            </div>
                            <p className="text-lg text-black Medium mb-2">Language:</p>
                            <div className="w-full hèfit flex flex-row items-center justify-start gap-2">
                                <button className={`py-1 px-3 rounded-full border border-black ${languageFilter.includes('it') ? "text-white bg-black" : "text-black bg-white"}`} onClick={() => { toggleLang('it'); }}>Italian</button>
                                <button className={`py-1 px-3 rounded-full border border-black ${languageFilter.includes('en') ? "text-white bg-black" : "text-black bg-white"}`} onClick={() => { toggleLang('en'); }}>English</button>
                            </div>
                            <p className="text-lg text-black Medium mb-2">Topics:</p>
                            <div className="w-full h-fit grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 auto-rows-auto gap-2">
                                <button className={`py-1 px-3 rounded-full border border-black whitespace-nowrap ${topicFilter.includes('ai') ? "text-white bg-black" : "text-black bg-white"}`} onClick={() => { toggleTopic('ai'); }}>AI</button>
                                <button className={`py-1 px-3 rounded-full border border-black whitespace-nowrap ${topicFilter.includes('art') ? "text-white bg-black" : "text-black bg-white"}`} onClick={() => { toggleTopic('art'); }}>Art</button>
                                <button className={`py-1 px-3 rounded-full border border-black whitespace-nowrap ${topicFilter.includes('auditing') ? "text-white bg-black" : "text-black bg-white"}`} onClick={() => { toggleTopic('auditing'); }}>Auditing</button>
                                <button className={`py-1 px-3 rounded-full border border-black whitespace-nowrap ${topicFilter.includes('bitcoin') ? "text-white bg-black" : "text-black bg-white"}`} onClick={() => { toggleTopic('bitcoin'); }}>Bitcoin</button>
                                <button className={`py-1 px-3 rounded-full border border-black whitespace-nowrap ${topicFilter.includes('community') ? "text-white bg-black" : "text-black bg-white"}`} onClick={() => { toggleTopic('community'); }}>Community</button>
                                <button className={`py-1 px-3 rounded-full border border-black whitespace-nowrap ${topicFilter.includes('defi') ? "text-white bg-black" : "text-black bg-white"}`} onClick={() => { toggleTopic('defi'); }}>Defi</button>
                                <button className={`py-1 px-3 rounded-full border border-black whitespace-nowrap ${topicFilter.includes('digital identity') ? "text-white bg-black" : "text-black bg-white"}`} onClick={() => { toggleTopic('digital identity'); }}>Digital Ide.</button>
                                <button className={`py-1 px-3 rounded-full border border-black whitespace-nowrap ${topicFilter.includes('education') ? "text-white bg-black" : "text-black bg-white"}`} onClick={() => { toggleTopic('education'); }}>Education</button>
                                <button className={`py-1 px-3 rounded-full border border-black whitespace-nowrap ${topicFilter.includes('gaming') ? "text-white bg-black" : "text-black bg-white"}`} onClick={() => { toggleTopic('gaming'); }}>Gaming</button>
                                <button className={`py-1 px-3 rounded-full border border-black whitespace-nowrap text-center ${topicFilter.includes('game theory') ? "text-white bg-black" : "text-black bg-white"}`} onClick={() => { toggleTopic('game theory'); }}>Game Theory</button>
                                <button className={`py-1 px-3 rounded-full border border-black whitespace-nowrap ${topicFilter.includes('it') ? "text-white bg-black" : "text-black bg-white"}`} onClick={() => { toggleTopic('it'); }}>IT</button>
                                <button className={`py-1 px-3 rounded-full border border-black whitespace-nowrap ${topicFilter.includes('legal') ? "text-white bg-black" : "text-black bg-white"}`} onClick={() => { toggleTopic('legal'); }}>legal</button>
                                <button className={`py-1 px-3 rounded-full border border-black whitespace-nowrap ${topicFilter.includes('marketing') ? "text-white bg-black" : "text-black bg-white"}`} onClick={() => { toggleTopic('marketing'); }}>Marketing</button>
                                <button className={`py-1 px-3 rounded-full border border-black whitespace-nowrap ${topicFilter.includes('nft') ? "text-white bg-black" : "text-black bg-white"}`} onClick={() => { toggleTopic('nft'); }}>NFT</button>
                                <button className={`py-1 px-3 rounded-full border border-black whitespace-nowrap ${topicFilter.includes('privacy') ? "text-white bg-black" : "text-black bg-white"}`} onClick={() => { toggleTopic('privacy'); }}>Privacy</button>
                                <button className={`py-1 px-3 rounded-full border border-black whitespace-nowrap ${topicFilter.includes('quantum') ? "text-white bg-black" : "text-black bg-white"}`} onClick={() => { toggleTopic('quantum'); }}>Quantum</button>
                                <button className={`py-1 px-3 rounded-full border border-black whitespace-nowrap ${topicFilter.includes('rwa') ? "text-white bg-black" : "text-black bg-white"}`} onClick={() => { toggleTopic('rwa'); }}>RWA</button>
                                <button className={`py-1 px-3 rounded-full border border-black whitespace-nowrap ${topicFilter.includes('scaling') ? "text-white bg-black" : "text-black bg-white"}`} onClick={() => { toggleTopic('scaling'); }}>Scaling</button>
                                <button className={`py-1 px-3 rounded-full border border-black whitespace-nowrap ${topicFilter.includes('security') ? "text-white bg-black" : "text-black bg-white"}`} onClick={() => { toggleTopic('security'); }}>Security</button>
                                <button className={`py-1 px-3 rounded-full border border-black whitespace-nowrap ${topicFilter.includes('socialfi') ? "text-white bg-black" : "text-black bg-white"}`} onClick={() => { toggleTopic('socialfi'); }}>SocialFi</button>
                                <button className={`py-1 px-3 rounded-full border border-black whitespace-nowrap ${topicFilter.includes('staking') ? "text-white bg-black" : "text-black bg-white"}`} onClick={() => { toggleTopic('staking'); }}>Staking</button>
                                <button className={`py-1 px-3 rounded-full border border-black whitespace-nowrap ${topicFilter.includes('ux') ? "text-white bg-black" : "text-black bg-white"}`} onClick={() => { toggleTopic('ux'); }}>UX</button>
                                <button className={`py-1 px-3 rounded-full border border-black whitespace-nowrap ${topicFilter.includes('zk proofs') ? "text-white bg-black" : "text-black bg-white"}`} onClick={() => { toggleTopic('zk proofs'); }}>Zk Proofs</button>
                                <button className={`py-1 px-3 rounded-full border border-black whitespace-nowrap ${topicFilter.includes('other') ? "text-white bg-black" : "text-black bg-white"}`} onClick={() => { toggleTopic('other'); }}>Other</button>
                            </div>
                        </div>
                    ) : ("")
                }
                <div className="w-full h-fit flex flex-row items-center justify-center gap-4 mb-2 bg-white shadow-md rounded-md border-4 border-[#eddb55]">
                    <div className="w-fit flex flex-row items-center justify-center gap-4 pb-2">
                        <Link href="" onClick={(e) => { e.preventDefault(); setDay(1) }}>
                            <p className={`text-black text-2xl lg:text-xl Medium px-2 pt-2 pb-1 ${day == 1 ? 'bg-white border-b-4 border-b-black' : ''}`}>Day 1</p>
                        </Link>
                        <Link href="" onClick={(e) => { e.preventDefault(); setDay(2) }}>
                            <p className={`text-black text-2xl lg:text-xl Medium px-2 pt-2 pb-1 ${day == 2 ? 'bg-white border-b-4 border-b-black' : ''} `}>Day 2</p>
                        </Link>
                        <Link href="" onClick={(e) => { e.preventDefault(); setDay(3) }}>
                            <p className={`text-black text-2xl lg:text-xl Medium px-2 pt-2 pb-1 ${day == 3 ? 'bg-white border-b-4 border-b-black' : ''}`}>Day 3</p>
                        </Link>
                    </div>

                </div>
            </div>
            <div className="w-10/12 h-fit hidden lg:flex flex-row items-start justify-center gap-2">
                <div className="flex w-1/3 py-2 flex-row items-center justify-center bg-white border-4 border-[#eddb55] text-black text-xl Medium">Main Stage</div>
                <div className="flex w-1/3 py-2 flex-row items-center justify-center bg-white border-4 border-[#eddb55] text-black text-xl Medium">Stage 2</div>
                <div className="flex w-1/3 py-2 flex-row items-center justify-center bg-white border-4 border-[#eddb55] text-black text-xl Medium">Stage 3</div>
            </div>
            <div className="w-11/12 lg:w-10/12 h-fit flex flex-col lg:flex-row items-center lg:items-start justify-start lg:justify-center gap-2">
                <div className="flex lg:hidden w-full py-2 flex-row items-center justify-center bg-white border-4 border-[#eddb55] text-black text-xl Medium">Main Stage</div>
                <div className="w-full lg:w-1/3 h-fit flex flex-col items-center justify-start gap-1">
                    {
                        filteredEvents.filter(event => event.day === day && event.stage == "main").map((event, key) => {
                            return (
                                <div key={key} className="w-full h-fit flex flex-row items-start justify-start gap-2">
                                    <div className={`w-full ${event.type == "break" ? " bg-[#F18681] " : "bg-white"} rounded-md shadow-sm flex flex-col items-start justify-start py-3 px-4`}>
                                        <div className="w-full h-fit flex flex-row items-center justify-start gap-2 mb-3">
                                            <p className={`text-sm ${event.type == "break" ? " text-white text-center w-full" : "text-black text-left"} Medium `}>
                                                {event.start + " - " + event.end}
                                            </p>
                                            {
                                                event.type != "break" ? (
                                                    <p className="text-sm px-2 py-1 rounded shadow text-white Medium" style={{
                                                        backgroundColor: event.type == "talk" ? "#49CCF7" : event.type == "panel" ? "#D870AD" : event.type == "break" ? "#F18681" : "#91CE35"
                                                    }}>
                                                        {event.type.toUpperCase()}
                                                    </p>
                                                ) : ("")
                                            }
                                            {
                                                event.lang == "it" ? (
                                                    <div className="h-[1.6rem] w-[2.4rem] rounded bg-red-400 bg-center bg-cover" style={{
                                                        backgroundImage: "url('https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/320px-Flag_of_Italy.svg.png')"
                                                    }}></div>
                                                ) : ("")
                                            }
                                            {
                                                event.id == 78 ? (
                                                    <Link href="https://lu.ma/n3bwlh76" className="w-fit h-fit flex justify-start items-center">
                                                        <div className="h-[1.6rem] w-fit px-2 SemiBold rounded bg-red-400" style={{

                                                        }}>Luma</div>
                                                    </Link>
                                                ) : ("")
                                            }
                                        </div>
                                        {
                                            event.title != "" && event.type != "break" ? (
                                                <p className="text-xl text-black Medium mb-2">{event.title}</p>
                                            ) : event.title != "" && event.type != "break" ? (
                                                <p className="text-xl text-gray-400 Medium italic mb-2">Title to be announced later...</p>
                                            ) : ""
                                        }
                                        {
                                            event.type == "break" && event.title == "Breakfast" ? (
                                                <p className="text-xl text-white Medium my-2 w-full text-center">☕🥐&nbsp;{event.title} &nbsp;🥐☕</p>
                                            ) : event.type == "break" && event.title != "Breakfast" ? (<p className="text-xl text-white Medium my-2 w-full text-center">🍝🍕&nbsp;{event.title} &nbsp;🍕🍝</p>) : ("")
                                        }
                                        {
                                            event.type != "break" ? (
                                                <div className="w-full h-fit flex flex-row items-center justify-start gap-1 mb-12">
                                                    <MdOutlinePlace size={20} color="#252525" />
                                                    <p className="text-xs text-black Medium">
                                                        {event.stage == "main" ? "Main Stage" : event.stage == "stage 2" ? "Stage 2" : "Stage 3"}
                                                    </p>
                                                </div>
                                            ) : ""
                                        }
                                        {
                                            event.speakers.length != 0 ? (
                                                <p className="text-md text-gray-700 mb-2">
                                                    Speakers:<br />
                                                    <span className="Medium">
                                                        {
                                                            event.speakers.map(speaker => speaker.name).join(', ')
                                                        }
                                                    </span>
                                                </p>
                                            ) :
                                                ("")
                                        }

                                        {
                                            event.speakers.length != 0 ? (
                                                <div className="flex flex-row items-center justify-start w-full h-fit">
                                                    {
                                                        event.speakers.map((speaker, speakerKey) => {
                                                            return (
                                                                <div key={speakerKey} className={`w-12 aspect-square rounded-full bg-white bg-center bg-cover bg-no-repeat shadow-lg `} style={{
                                                                    marginLeft: `${speakerKey / 2 * 15 * -1}px`,
                                                                    backgroundImage: speaker.image != "" ? `url('${speaker.image}')` : "url('https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg=')"
                                                                }}></div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            ) : ("")
                                        }
                                        {
                                            event.moderators && event.moderators.length != 0 ? (
                                                <p className="text-md text-gray-700 mt-4 mb-2">
                                                    Moderators:<br />
                                                    <span className="Medium">
                                                        {
                                                            event.moderators.map(mod => mod.name).join(', ')
                                                        }
                                                    </span>
                                                </p>
                                            ) :
                                                ("")
                                        }
                                        {
                                            event.moderators && event.moderators.length != 0 ? (
                                                <div className="flex flex-row items-center justify-start w-full h-fit">
                                                    {
                                                        event.moderators.map((mod, modKey) => {
                                                            return (
                                                                <div key={modKey} className={`w-6 aspect-square rounded-full bg-white bg-center bg-cover bg-no-repeat shadow-lg `} style={{
                                                                    marginLeft: `${modKey / 2 * 15 * -1}px`,
                                                                    backgroundImage: mod.image != "" ? `url('${mod.image}')` : "url('https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg=')"
                                                                }}></div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            ) : ("")
                                        }

                                        {
                                            event.topics.length != 0 && event.type != "break" ? (
                                                <>
                                                    <div className="w-full h-[0.5px] bg-black/40 mx-auto mt-6 mb-4"></div>
                                                    <p className="text-md text-gray-700 Bold mb-2">
                                                        Topics: {
                                                            event.topics.map(string => `#${string.toUpperCase()}`).join(', ')
                                                        }
                                                    </p>
                                                </>
                                            ) : ("")
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="flex lg:hidden w-full py-2 flex-row items-center justify-center bg-white border-4 border-[#eddb55] text-black text-xl Medium">Stage 2</div>
                <div className="w-full lg:w-1/3 h-fit flex flex-col items-center justify-start gap-1">
                    {
                        filteredEvents.filter(event => event.day === day && event.stage == "stage 2").map((event, key) => {
                            return (
                                <div key={key} className="w-full h-fit flex flex-row items-start justify-start gap-2">
                                    <div className={`w-full ${event.type == "break" ? " bg-[#F18681] " : "bg-white"} rounded-md shadow-sm flex flex-col items-start justify-start py-3 px-4`}>
                                        <div className="w-full h-fit flex flex-row items-center justify-start gap-2 mb-3">
                                            <p className={`text-sm ${event.type == "break" ? " text-white text-center w-full" : "text-black text-left"} Medium `}>
                                                {event.start + " - " + event.end}
                                            </p>
                                            {
                                                event.type != "break" ? (
                                                    <p className="text-sm px-2 py-1 rounded shadow text-white Medium" style={{
                                                        backgroundColor: event.type == "talk" ? "#49CCF7" : event.type == "panel" ? "#D870AD" : event.type == "break" ? "#F18681" : "#91CE35"
                                                    }}>
                                                        {event.type.toUpperCase()}
                                                    </p>
                                                ) : ("")
                                            }
                                            {
                                                event.lang == "it" ? (
                                                    <div className="h-[1.6rem] w-[2.4rem] rounded bg-red-400 bg-center bg-cover" style={{
                                                        backgroundImage: "url('https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/320px-Flag_of_Italy.svg.png')"
                                                    }}></div>
                                                ) : ("")
                                            }
                                            {
                                                event.id == 78 ? (
                                                    <Link href="https://lu.ma/n3bwlh76" className="w-fit h-fit flex justify-start items-center">
                                                        <div className="h-[1.6rem] w-fit px-2 SemiBold rounded bg-red-400" style={{

                                                        }}>Luma</div>
                                                    </Link>
                                                ) : ("")
                                            }
                                        </div>
                                        {
                                            event.title != "" && event.type != "break" ? (
                                                <p className="text-xl text-black Medium mb-2">{event.title}</p>
                                            ) : event.title != "" && event.type != "break" ? (
                                                <p className="text-xl text-gray-400 Medium italic mb-2">Title to be announced later...</p>
                                            ) : ""
                                        }
                                        {
                                            event.type == "break" && event.title == "Breakfast" ? (
                                                <p className="text-xl text-white Medium my-2 w-full text-center">☕🥐&nbsp;{event.title} &nbsp;🥐☕</p>
                                            ) : event.type == "break" && event.title != "Breakfast" ? (<p className="text-xl text-white Medium my-2 w-full text-center">🍝🍕&nbsp;{event.title} &nbsp;🍕🍝</p>) : ("")
                                        }
                                        {
                                            event.type != "break" ? (
                                                <div className="w-full h-fit flex flex-row items-center justify-start gap-1 mb-12">
                                                    <MdOutlinePlace size={20} color="#252525" />
                                                    <p className="text-xs text-black Medium">
                                                        {event.stage == "main" ? "Main Stage" : event.stage == "stage 2" ? "Stage 2" : "Stage 3"}
                                                    </p>
                                                </div>
                                            ) : ""
                                        }
                                        {
                                            event.speakers.length != 0 ? (
                                                <p className="text-md text-gray-700 mb-2">
                                                    Speakers:<br />
                                                    <span className="Medium">
                                                        {
                                                            event.speakers.map(speaker => speaker.name).join(', ')
                                                        }
                                                    </span>
                                                </p>
                                            ) :
                                                ("")
                                        }

                                        {
                                            event.speakers.length != 0 ? (
                                                <div className="flex flex-row items-center justify-start w-full h-fit">
                                                    {
                                                        event.speakers.map((speaker, speakerKey) => {
                                                            return (
                                                                <div key={speakerKey} className={`w-12 aspect-square rounded-full bg-white bg-center bg-cover bg-no-repeat shadow-lg `} style={{
                                                                    marginLeft: `${speakerKey / 2 * 15 * -1}px`,
                                                                    backgroundImage: speaker.image != "" ? `url('${speaker.image}')` : "url('https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg=')"
                                                                }}></div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            ) : ("")
                                        }
                                        {
                                            event.moderators && event.moderators.length != 0 ? (
                                                <p className="text-md text-gray-700 mt-4 mb-2">
                                                    Moderators:<br />
                                                    <span className="Medium">
                                                        {
                                                            event.moderators.map(mod => mod.name).join(', ')
                                                        }
                                                    </span>
                                                </p>
                                            ) :
                                                ("")
                                        }
                                        {
                                            event.moderators && event.moderators.length != 0 ? (
                                                <div className="flex flex-row items-center justify-start w-full h-fit">
                                                    {
                                                        event.moderators.map((mod, modKey) => {
                                                            return (
                                                                <div key={modKey} className={`w-6 aspect-square rounded-full bg-white bg-center bg-cover bg-no-repeat shadow-lg `} style={{
                                                                    marginLeft: `${modKey / 2 * 15 * -1}px`,
                                                                    backgroundImage: mod.image != "" ? `url('${mod.image}')` : "url('https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg=')"
                                                                }}></div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            ) : ("")
                                        }
                                        {
                                            event.topics.length != 0 && event.type != "break" ? (
                                                <>
                                                    <div className="w-full h-[0.5px] bg-black/40 mx-auto mt-6 mb-4"></div>
                                                    <p className="text-md text-gray-700 Bold mb-2">
                                                        Topics: {
                                                            event.topics.map(string => `#${string.toUpperCase()}`).join(', ')
                                                        }
                                                    </p>
                                                </>
                                            ) : ("")
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>

                <div className="flex lg:hidden w-full py-2 flex-row items-center justify-center bg-white border-4 border-[#eddb55] text-black text-xl Medium">Stage 3</div>
                <div className="w-full lg:w-1/3 h-fit flex flex-col items-center justify-start gap-1">
                    {
                        filteredEvents.filter(event => event.day === day && event.stage == "stage 3").map((event, key) => {

                            return (
                                <div key={key} className="w-full h-fit flex flex-row items-start justify-start gap-2">
                                    <div className={`w-full ${event.type == "break" ? " bg-[#F18681] " : "bg-white"} rounded-md shadow-sm flex flex-col items-start justify-start py-3 px-4`}>
                                        <div className="w-full h-fit flex flex-row items-center justify-start gap-2 mb-3">
                                            <p className={`text-sm ${event.type == "break" ? " text-white text-center w-full" : "text-black text-left"} Medium `}>
                                                {event.start + " - " + event.end}
                                            </p>
                                            {
                                                event.type != "break" ? (
                                                    <p className="text-sm px-2 py-1 rounded shadow text-white Medium" style={{
                                                        backgroundColor: event.type == "talk" ? "#49CCF7" : event.type == "panel" ? "#D870AD" : event.type == "break" ? "#F18681" : "#91CE35"
                                                    }}>
                                                        {event.type.toUpperCase()}
                                                    </p>
                                                ) : ("")
                                            }
                                            {
                                                event.lang == "it" ? (
                                                    <div className="h-[1.6rem] w-[2.4rem] rounded bg-red-400 bg-center bg-cover" style={{
                                                        backgroundImage: "url('https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/320px-Flag_of_Italy.svg.png')"
                                                    }}></div>
                                                ) : ("")
                                            }
                                            {
                                                event.id == 78 ? (
                                                    <Link href="https://lu.ma/n3bwlh76" className="w-fit h-fit flex justify-start items-center">
                                                        <div className="h-[1.6rem] w-fit px-2 SemiBold rounded bg-red-400" style={{

                                                        }}>Luma</div>
                                                    </Link>
                                                ) : ("")
                                            }
                                        </div>
                                        {
                                            event.title != "" && event.type != "break" ? (
                                                <p className="text-xl text-black Medium mb-2">{event.title}</p>
                                            ) : event.title != "" && event.type != "break" ? (
                                                <p className="text-xl text-gray-400 Medium italic mb-2">Title to be announced later...</p>
                                            ) : ""
                                        }
                                        {
                                            event.type == "break" && event.title == "Breakfast" ? (
                                                <p className="text-xl text-white Medium my-2 w-full text-center">☕🥐&nbsp;{event.title} &nbsp;🥐☕</p>
                                            ) : event.type == "break" && event.title != "Breakfast" ? (<p className="text-xl text-white Medium my-2 w-full text-center">🍝🍕&nbsp;{event.title} &nbsp;🍕🍝</p>) : ("")
                                        }
                                        {
                                            event.type != "break" ? (
                                                <div className="w-full h-fit flex flex-row items-center justify-start gap-1 mb-12">
                                                    <MdOutlinePlace size={20} color="#252525" />
                                                    <p className="text-xs text-black Medium">
                                                        {event.stage == "main" ? "Main Stage" : event.stage == "stage 2" ? "Stage 2" : "Stage 3"}
                                                    </p>
                                                </div>
                                            ) : ""
                                        }

                                        {
                                            event.speakers.length != 0 ? (
                                                <p className="text-md text-gray-700 mb-2">
                                                    Speakers:<br />
                                                    <span className="Medium">
                                                        {
                                                            event.speakers.map(speaker => speaker.name).join(', ')
                                                        }
                                                    </span>
                                                </p>
                                            ) :
                                                ("")
                                        }

                                        {
                                            event.speakers.length != 0 ? (
                                                <div className="flex flex-row items-center justify-start w-full h-fit">
                                                    {
                                                        event.speakers.map((speaker, speakerKey) => {
                                                            return (
                                                                <div key={speakerKey} className={`w-12 aspect-square rounded-full bg-white bg-center bg-cover bg-no-repeat shadow-lg `} style={{
                                                                    marginLeft: `${speakerKey / 2 * 15 * -1}px`,
                                                                    backgroundImage: speaker.image != "" ? `url('${speaker.image}')` : "url('https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg=')"
                                                                }}></div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            ) : ("")
                                        }
                                        {
                                            event.moderators && event.moderators.length != 0 ? (
                                                <p className="text-md text-gray-700 mt-4 mb-2">
                                                    Moderators:<br />
                                                    <span className="Medium">
                                                        {
                                                            event.moderators.map(mod => mod.name).join(', ')
                                                        }
                                                    </span>
                                                </p>
                                            ) :
                                                ("")
                                        }
                                        {
                                            event.moderators && event.moderators.length != 0 ? (
                                                <div className="flex flex-row items-center justify-start w-full h-fit">
                                                    {
                                                        event.moderators.map((mod, modKey) => {
                                                            return (
                                                                <div key={modKey} className={`w-6 aspect-square rounded-full bg-white bg-center bg-cover bg-no-repeat shadow-lg `} style={{
                                                                    marginLeft: `${modKey / 2 * 15 * -1}px`,
                                                                    backgroundImage: mod.image != "" ? `url('${mod.image}')` : "url('https://media.istockphoto.com/id/1332100919/vector/man-icon-black-icon-person-symbol.jpg?s=612x612&w=0&k=20&c=AVVJkvxQQCuBhawHrUhDRTCeNQ3Jgt0K1tXjJsFy1eg=')"
                                                                }}></div>
                                                            )
                                                        })
                                                    }
                                                </div>
                                            ) : ("")
                                        }
                                        {
                                            event.topics.length != 0 && event.type != "break" ? (
                                                <>
                                                    <div className="w-full h-[0.5px] bg-black/40 mx-auto mt-6 mb-4"></div>
                                                    <p className="text-md text-gray-700 Bold mb-2">
                                                        Topics: {
                                                            event.topics.map(string => `#${string.toUpperCase()}`).join(', ')
                                                        }
                                                    </p>
                                                </>
                                            ) : ("")
                                        }
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    )
}

export default Agenda;
