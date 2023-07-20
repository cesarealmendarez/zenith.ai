import { useState, Fragment } from "react"

import { Disclosure, Transition, Dialog } from "@headlessui/react"
import { motion } from "framer-motion"
import { useRouter } from "next/router"

import { Bird, Menu, Facebook, Instagram, Dribbble, Twitter, Github, X, Phone, Mail, Linkedin } from "lucide-react"

export default function Index() {
    const router = useRouter()

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const mobileMenuAnimationContainer = {
        hidden: { opacity: 1, scale: 0 },
        visible: { opacity: 1, scale: 1, transition: { delayChildren: 0.3, staggerChildren: 0.07 } },
        exit: { opacity: 1, scale: 0 },
    }

    const mobileMenuAnimationItem = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
        exit: { y: 20, opacity: 0 },
    }

    const solutions = [
        {
            id: 0,
            title: "🤖 GPT Chatbot Integration",
            description: "Empower your website visitors with the expertise of highly advanced Large Language Models. Our GPT Chatbot Integrations are designed to seamlessly guide customers through your homepage, providing valuable assistance in lead generation, recommendations, booking, and more. This automation learns the ins and outs of your products and will make a worlds difference in your customer's online experience.",
            image: "https://notioly.com/wp-content/uploads/2023/04/228.Robot_.png"
        },
        {
            id: 1,
            title: "🖼️ AI Content Generation Systems",
            description: "Effortlessly expedite marketing content generation of your products with AI. Need fresh product descriptions, email marketing content, optimized social media posts? Look no further, let our team create personalized systems that will dish content out on command!",
            image: "https://notioly.com/wp-content/uploads/2022/01/27.Artist.png"
        },
        {
            id: 2,
            title: "📈 Search Engine Optimization",
            description: "Elevate your website's visibility and attract organic traffic with our all-encompassing SEO solutions. Our team harnesses the power of advanced techniques and state-of-the-art tools to optimize your website for search engines. Experience the benefits of higher rankings and an enhanced online presence, as we propel your website towards unparalleled success within spaces such as Google Search, Google Maps, and more.",
            image: "https://notioly.com/wp-content/uploads/2023/04/221.Googling.png"
        },
        {
            id: 3,
            title: "🌐 Website Development",
            description: "Get online at breakneck speeds. We'll work tirelessly to construct a beautifully reliable website to showcase to the world what your business is all about!",
            image: "https://notioly.com/wp-content/uploads/2022/04/123.Website-builder.png"
        }
    ]

    return (
        <>
            <main>
                <header className="fixed top-0 left-0 right-0 z-40 md:static flex flex-row items-center px-8 py-4 bg-white/70 backdrop-blur-sm border-b-[1px] border-neutral-100">
                    <a href="/" rel="noreferrer" className="flex flex-row grow items-center">
                        <Bird className="text-neutral-800" />

                        <h1 className="text-left text-2xl text-neutral-800 font-medium tracking-tighter ml-2">
                            Zenith AI
                        </h1>
                    </a>

                    <div className="hidden md:flex flex-row items-center space-x-6">
                        <button
                            className="text-right text-md text-neutral-800 font-light tracking-tighter"
                            onClick={() => {
                                const aboutUs = document.getElementById("about-us")
                                aboutUs?.scrollIntoView({ behavior: "smooth", block: "start" })
                            }}
                        >
                            About Us
                        </button>

                        <button
                            className="text-right text-md text-neutral-800 font-light tracking-tighter"
                            onClick={() => {
                                const solutions = document.getElementById("solutions")
                                solutions?.scrollIntoView({ behavior: "smooth", block: "start" })
                            }}
                        >
                            Our Solutions
                        </button>

                        {/* <button onClick={() => { }} className="text-right text-md text-neutral-800 font-light tracking-tighter">
                            FAQs
                        </button> */}

                        <a href="https://zenith-ai-4888.mailchimpsites.com" rel="noreferrer" target="_blank" className="text-right text-md text-white font-light bg-neutral-900 px-4 py-2 rounded-full">
                            Book Consulation
                        </a>
                    </div>

                    <div className="flex flex-row items-center md:hidden">
                        <button onClick={() => { setMobileMenuOpen(true) }} className="text-right text-sm text-neutral-800 font-light tracking-tighter">
                            <Menu />
                        </button>
                    </div>

                </header>

                <div id="hero" className="max-w-5xl flex flex-col items-center mx-auto px-4 md:px-6 lg:px-8 h-screen pt-32 space-y-6">
                    <div>
                        <h1 className="text-center text-4xl md:text-6xl text-neutral-800 font-medium tracking-tighter">
                            Supercharge Your
                        </h1>

                        <h1 className="text-center text-4xl md:text-6xl text-neutral-800 font-medium tracking-tighter">
                            Growth with Our
                        </h1>

                        <h1 className="text-center text-4xl md:text-6xl text-neutral-800 font-medium tracking-tighter">
                            AI & Web Development Team
                        </h1>
                    </div>

                    <div>
                        <p className="text-center text-lg text-neutral-800 font-light tracking-tighter">
                            Looking to boost leads and sales?
                        </p>

                        <p className="text-center text-lg text-neutral-800 font-light tracking-tighter">
                            Let us handle the heavy lifting by deploying cutting-edge technology onto your workflows!
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                        <a href="https://zenith-ai-4888.mailchimpsites.com" rel="noreferrer" target="_blank" className="w-80 md:w-auto text-center text-xl text-white font-light tracking-tigher bg-neutral-900 px-6 md:px-8 py-4 rounded-full">
                            ☎️&nbsp;&nbsp;&nbsp;Book Consultation
                        </a>

                        <button
                            className="w-80 md:w-auto text-center text-xl text-neutral-800 font-light tracking-tigher border-2 border-neutral-950 px-6 md:px-8 py-4 rounded-full"
                            onClick={() => {
                                const solutions = document.getElementById("solutions")
                                solutions?.scrollIntoView({ behavior: "smooth", block: "start" })
                            }}
                        >
                            ⚡️&nbsp;&nbsp;&nbsp;View Our Solutions
                        </button>
                    </div>
                </div>

                <div id="about-us" className="py-24 bg-green-950">
                    <div className="max-w-5xl flex flex-col items-center justify-center mx-auto px-4 md:px-6 lg:px-8 pt-0 space-y-6">
                        <h1 className="text-center text-4xl md:text-5xl text-white font-medium tracking-tighter">
                            About Us
                        </h1>

                        <p className="text-center text-lg text-white font-light tracking-tighter">
                            {/* Zenith AI looks to help small and medium sized business grow by exploring ways cutting edge tech can make your workflows stronger, better, and faster.We pride ourselves in working as close as possible with our clients guiding them from initial implementation to unimaginable  growth.Our founding principles lays in a simple law, stating we only rake in dough, once you’re rolling in it! */}
                            Welcome! Zenith AI is dedicated to empowering businesses to reach new heights through the transformative power of cutting-edge Artificial Intelligence technology. Our mission is to enhance your workflows, making them stronger, better, and faster.
                            We take immense pride in our client-centric approach, forming close partnerships with our clients, guiding them every step of the way, from the initial implementation to unimaginable scale!
                        </p>
                    </div>
                </div>

                <div id="solutions" className="py-24">
                    <div className="max-w-5xl flex flex-col items-center justify-center mx-auto px-4 md:px-6 lg:px-8 pt-0 space-y-6">
                        <h1 className="text-center text-4xl md:text-5xl text-neutral-800 font-medium tracking-tighter">
                            Our Solutions
                        </h1>

                        <p className="text-center text-lg text-neutral-800 font-light tracking-tighter">
                            Although we are incredibly flexible in finding the tech that's right for you, here are some solutions we specialize in.
                        </p>

                        {
                            solutions.map((solution, solutionIDX) => {
                                return (
                                    <>
                                        {((solutionIDX + 1) % 2) === 1 ?
                                            <div id={`solution-${solution.id}`} className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-16 py-24">
                                                <img src={solution.image} className="1/6 md:h-5/6 ml-auto" />

                                                <div className="my-auto">
                                                    <h1 className="text-center md:text-left text-4xl md:text-5xl text-neutral-800 font-medium tracking-tighte mt-4">{solution.title}</h1>

                                                    <p className="text-center md:text-left text-lg text-neutral-800 font-light tracking-tighter mt-4">{solution.description}</p>
                                                </div>
                                            </div>
                                            :
                                            <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-16 py-24" >
                                                <div className="order-last md:order-first my-auto">
                                                    <h1 className="text-center md:text-left text-4xl md:text-5xl text-neutral-800 font-medium tracking-tighter">{solution.title}</h1>

                                                    <p className="text-center md:text-left text-lg text-neutral-800 font-light tracking-tighter mt-4">{solution.description}</p>
                                                </div>

                                                <img src={solution.image} className="1/6 md:h-5/6 ml-auto" />
                                            </div>
                                        }
                                    </>
                                )
                            })
                        }
                    </div>
                </div>

                <div className="py-24 bg-green-950">
                    <div className="max-w-5xl flex flex-col items-center justify-center mx-auto px-4 md:px-6 lg:px-8 pt-0 space-y-6">
                        <h1 className="text-center text-4xl md:text-5xl text-white font-medium tracking-tighter">
                            Ready to level up with cutting edge tech?
                        </h1>

                        <p className="text-center text-lg text-white font-light tracking-tighter">
                            Zenith AI is ready to start building when you are! Let's chat and unlock a world of personalized solutions for your business.
                        </p>

                        <a
                            href="https://zenith-ai-4888.mailchimpsites.com"
                            rel="noreferrer"
                            target="_blank"
                            className="w-80 text-center text-xl text-white font-light tracking-tighter bg-neutral-950 bg-opacity-50 backdrop-blur-2xl px-6 py-4 rounded-full"
                        >
                            👋&nbsp;&nbsp;&nbsp;Let's Talk Today
                        </a>
                    </div>
                </div>

                <footer id="footer" className="pt-24">
                    <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 md:px-6 lg:px-8 lg:pt-24 space-y-14">
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                            <div>
                                <div className="flex flex-row items-center justify-center md:justify-start md:text-left">
                                    <Bird className="text-neutral-800" />

                                    <h1 className="text-2xl md:text-center md:text-left text-neutral-800 font-medium tracking-tighter ml-2">Zenith AI</h1>
                                </div>

                                <p className="mt-8 max-w-md md:max-w-xs md:text-left text-center tracking-tighter text-neutral-800 font-light" >
                                    Looking to boost leads and sales?
                                    Let us handle the heavy lifting by deploying cutting-edge technology onto your workflows!
                                </p>

                                {/* <ul className="mt-8 flex justify-center gap-6 md:justify-start md:gap-8">
                                    <li>
                                        <a
                                            href="#"
                                            rel="noreferrer"
                                            className="text-neutral-950 transition hover:text-neutral-950/75"
                                        >
                                            <span className="sr-only" >Facebook</span>

                                            <Facebook />
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href="#"
                                            rel="noreferrer"
                                            className="text-neutral-950 transition hover:text-neutral-950/75"
                                        >
                                            <span className="sr-only">Instagram</span>

                                            <Instagram />
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href="#"
                                            rel="noreferrer"
                                            className="text-neutral-950 transition hover:text-neutral-950/75"
                                        >
                                            <span className="sr-only">Twitter</span>

                                            <Twitter />
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href="#"
                                            rel="noreferrer"
                                            className="text-neutral-950 transition hover:text-neutral-950/75"
                                        >
                                            <span className="sr-only">GitHub</span>

                                            <Github />
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href="#"
                                            rel="noreferrer"
                                            className="text-neutral-950 transition hover:text-neutral-950/75"
                                        >
                                            <span className="sr-only">Dribbble</span>

                                            <Dribbble />
                                        </a>
                                    </li>
                                </ul> */}
                            </div>

                            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:grid-cols-4 lg:col-span-2">
                                <div className="text-center md:text-left">
                                    <p className="text-lg text-neutral-800 font-medium">About Us</p>

                                    <ul className="mt-8 space-y-4 text-sm">
                                        <li>
                                            <button
                                                className="text-neutral-800 font-light transition hover:text-neutral-800/75"
                                                onClick={() => {
                                                    const hero = document.getElementById("hero")
                                                    hero?.scrollIntoView({ behavior: "smooth", block: "start" })
                                                }}
                                            >
                                                Welcome
                                            </button>
                                        </li>

                                        <li>
                                            <button
                                                className="text-neutral-800 font-light transition hover:text-neutral-800/75"
                                                onClick={() => {
                                                    const aboutUs = document.getElementById("about-us")
                                                    aboutUs?.scrollIntoView({ behavior: "smooth", block: "start" })
                                                }}
                                            >
                                                About Us
                                            </button>
                                        </li>

                                        <li>
                                            <button
                                                className="text-neutral-800 font-light transition hover:text-neutral-800/75"
                                                onClick={() => {
                                                    const solutions = document.getElementById("solutions")
                                                    solutions?.scrollIntoView({ behavior: "smooth", block: "start" })
                                                }}
                                            >
                                                Our Solutions
                                            </button>
                                        </li>
                                    </ul>
                                </div>

                                <div className="text-center md:text-left">
                                    <p className="text-lg text-neutral-800 font-medium">Our Solutions</p>

                                    <ul className="mt-8 space-y-4 text-sm" >
                                        {
                                            solutions.map((solution, solutionIDX) => {
                                                return (
                                                    <li>
                                                        <button
                                                            className="text-neutral-800 font-light transition hover:text-neutral-800/75"
                                                            onClick={() => {
                                                                // const solution = document.getElementById(`solution-${solutionID}`)
                                                                document.getElementById("solution-" + solution.id)?.scrollIntoView({ behavior: "smooth", block: "start" })
                                                                // alert(solution.id)
                                                            }}
                                                        >
                                                            {solution.title}
                                                        </button>
                                                    </li>
                                                )
                                            })}
                                    </ul>
                                </div>

                                <div className="text-center md:text-left">
                                    <p className="text-lg text-neutral-800 font-medium">Helpful Links</p>

                                    <ul className="mt-8 space-y-4 text-sm">
                                        {/* <li>
                                            <a
                                                href="#"
                                                rel="noreferrer"
                                                className="text-neutral-800 font-light transition hover:text-neutral-800/75"
                                            >
                                                FAQs
                                            </a>
                                        </li> */}

                                        <li>
                                            <a
                                                href="https://zenith-ai-4888.mailchimpsites.com/"
                                                rel="noreferrer"
                                                target="_blank"
                                                className="text-neutral-800 font-light transition hover:text-neutral-800/75"
                                            >
                                                Book Consultation
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="text-center md:text-left">
                                    <p className="text-lg font-medium text-gray-900">Contact Us</p>

                                    <ul className="mt-8 space-y-4 text-sm" >
                                        <li>
                                            <a
                                                href="mailto:hello@zenithai.site"
                                                rel="noreferrer"
                                                className="text-neutral-800 font-light transition hover:text-neutral-800/75"
                                            >
                                                📬&nbsp;&nbsp;&nbsp;hello@zenithai.site
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                href="tel:2094428173"
                                                rel="noreferrer"
                                                className="text-neutral-800 font-light transition hover:text-neutral-800/75"
                                            >
                                                📱&nbsp;&nbsp;&nbsp;+1 (209) 442-8173
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                rel="noreferrer"
                                                className="text-neutral-800 font-light transition hover:text-neutral-800/75"
                                            >
                                                📍&nbsp;&nbsp;&nbsp;Los Angeles, CA
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 border-t border-gray-100 pt-6">
                            <div className="text-center md:flex md:justify-between md:text-left">
                                <p className="text-sm text-neutral-800">
                                    <span className="block md:inline">All rights reserved&nbsp;&nbsp;&middot;&nbsp;&nbsp;</span>

                                    <a
                                        href="#"
                                        rel="noreferrer"
                                        target="_blank"
                                        className="inline-block underline transition"
                                    >
                                        Terms & Conditions
                                    </a>

                                    <span>&nbsp;&middot;&nbsp;</span>

                                    <a
                                        href="#"
                                        rel="noreferrer"
                                        target="_blank"
                                        className="inline-block underline transition"
                                    >
                                        Privacy Policy
                                    </a>
                                </p>

                                <p className="mt-4 text-sm text-neutral-800 md:order-first md:mt-0">&copy;2023 Zenith AI</p>
                            </div>
                        </div>
                    </div>
                </footer>
            </main>

            <Transition
                appear
                show={mobileMenuOpen}
                as={Fragment}
            >
                <Dialog
                    as="div"
                    className="relative z-50"
                    onClose={() => { setMobileMenuOpen(false) }}
                >
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto flex flex-col w-full px-8 pt-4">
                        <div className="flex flex-row items-center pb-24" >
                            <div className="flex flex-row grow items-center outline-0">
                                <Bird className="text-white" />

                                <h1 className="text-2xl text-white font-medium tracking-tighter ml-2">Zenith AI</h1>
                            </div>

                            <div className="flex flex-row items-center space-x-6">
                                <button
                                    onClick={() => { setMobileMenuOpen(false) }}
                                    className="text-sm text-white font-light tracking-tighter outline-0"
                                >
                                    <X />
                                </button>
                            </div>
                        </div>

                        <motion.div
                            key="menu-container"
                            variants={mobileMenuAnimationContainer}
                            initial="hidden"
                            animate="visible"
                            className="flex flex-col space-y-6"
                        >
                            <motion.button
                                key="about-us-menu-item"
                                variants={mobileMenuAnimationItem}
                                onClick={() => {
                                    setMobileMenuOpen(false)

                                    setTimeout(() => {
                                        const aboutUs = document.getElementById("about-us")
                                        aboutUs?.scrollIntoView({ behavior: "smooth", block: "start" })
                                    }, 500)
                                }}
                                className="text-left text-4xl text-white font-thin tracking-tighter md:text-7xl outline-0"
                            >
                                About Us
                            </motion.button>

                            <motion.button
                                key="solutions-menu-item"
                                variants={mobileMenuAnimationItem}
                                onClick={() => {
                                    setMobileMenuOpen(false)
                                    setTimeout(() => {
                                        const solutions = document.getElementById("solutions")
                                        solutions?.scrollIntoView({ behavior: "smooth", block: "start" })
                                    }, 500)
                                }}
                                className="text-left text-4xl text-white font-thin tracking-tighter md:text-7xl outline-0"
                            >
                                Our Solutions
                            </motion.button>

                            {/* <motion.button
                                key="faqs-menu-item"
                                variants={mobileMenuAnimationItem}
                                onClick={() => {
                                    setMobileMenuOpen(false)

                                }}
                                className="text-left text-4xl text-white font-thin tracking-tighter md:text-7xl outline-0"
                            >
                                FAQs
                            </motion.button> */}

                            <motion.a
                                href="https://zenith-ai-4888.mailchimpsites.com"
                                rel="noreferrer"
                                target="_blank"
                                key="book-consultation-menu-item"
                                variants={mobileMenuAnimationItem}
                                className="text-left text-4xl text-white font-thin tracking-tighter md:text-7xl outline-0"
                            >
                                Book Consultation
                            </motion.a>
                        </motion.div>

                        <motion.div
                            key="menu-container"
                            variants={mobileMenuAnimationContainer}
                            initial="hidden"
                            animate="visible"
                            className="w-full flex grow flex-row items-end justify-center pb-8 space-x-6"
                        >
                            <motion.a
                                variants={mobileMenuAnimationItem}
                                href="tel:2094428173"
                                rel="noreferrer"
                                className="text-white"
                            >
                                <Phone />
                            </motion.a>

                            <motion.a
                                variants={mobileMenuAnimationItem}
                                href="mailto:hello@zenithai.site"
                                rel="noreferrer"
                                className="text-white"
                            >
                                <Mail />
                            </motion.a>

                        </motion.div>
                    </div>
                </Dialog>
            </Transition>

        </>
    )
}