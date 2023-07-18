import { useState, Fragment, useRef } from "react"

import { Disclosure, Transition, Dialog } from "@headlessui/react"
import { motion } from "framer-motion"

import { Bird, Menu, Facebook, Instagram, Dribbble, Twitter, Github, X } from "lucide-react"

export default function Landing() {
    const heroSectionRef = useRef(null)
    const aboutUsSectionRef = useRef(null)
    const solutionsSectionRef = useRef(null)
    const solution1SectionRef = useRef(null)
    const solution2SectionRef = useRef(null)
    const solution3SectionRef = useRef(null)
    const solution4SectionRef = useRef(null)
    const faqsSectionRef = useRef(null)

    // const scrollToSection = (section) => {
    //     switch (section) {
    //         case "hero":
    //             heroSectionRef.current.scrollIntoView({
    //                 behavior: "smooth",
    //                 block: "start",
    //             })
    //         case "aboutUs":
    //             aboutUsSectionRef.current.scrollIntoView({
    //                 behavior: "smooth",
    //                 block: "start",
    //             })
    //         case "solutions":
    //             solutionsSectionRef.current.scrollIntoView({
    //                 behavior: "smooth",
    //                 block: "start",
    //             })
    //         case "solution1":
    //             solution1SectionRef.current.scrollIntoView({
    //                 behavior: "smooth",
    //                 block: "start",
    //             })
    //         case "solution2":
    //             solution2SectionRef.current.scrollIntoView({
    //                 behavior: "smooth",
    //                 block: "start",
    //             })
    //         case "solution3":
    //             solution3SectionRef.current.scrollIntoView({
    //                 behavior: "smooth",
    //                 block: "start",
    //             })
    //         case "solution4":
    //             solution4SectionRef.current.scrollIntoView({
    //                 behavior: "smooth",
    //                 block: "start",
    //             })
    //         case "faqs":
    //             faqsSectionRef.current.scrollIntoView({
    //                 behavior: "smooth",
    //                 block: "start",
    //             })
    //     }
    // }

    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const menuAnimationContainer = {
        hidden: { opacity: 1, scale: 0 },
        visible: { opacity: 1, scale: 1, transition: { delayChildren: 0.3, staggerChildren: 0.07 } },
        exit: { opacity: 1, scale: 0 },
    }

    const menuAnimationItem = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
        exit: { y: 20, opacity: 0 },
    }

    const solutions = [
        {
            id: 0,
            title: "GPT Chatbot Integration",
            description: "Let a highly advanced Large Language Model, guide customers throughout your homepage. GPT learns the ins and outs of your workflow and can help in lead generation, booking, etc. Take a look at this site with our GPT Chatbot Integration.",
            image: "https://framerusercontent.com/images/3UvsRX2tal7Ts7r8iY108Y7FM.png?scale-down-to=4096"
        },
        {
            id: 1,
            title: "AI Content Generation Systems",
            description: "Boost your website's visibility and drive organic traffic with our comprehensive SEO solutions. Our team of experts utilizes cutting-edge techniques and tools to optimize your website for search engines, ensuring higher rankings and better online presence.",
            image: "https://framerusercontent.com/images/TwojwVpws1RqKxAvxHAyjxy7OY.png?scale-down-to=4096"
        },
        {
            id: 2,
            title: "Search Engine Optimization",
            description: "Boost your website's visibility and drive organic traffic with our comprehensive SEO solutions. Our team of experts utilizes cutting-edge techniques and tools to optimize your website for search engines, ensuring higher rankings and better online presence.",
            image: "https://framerusercontent.com/images/TwojwVpws1RqKxAvxHAyjxy7OY.png?scale-down-to=4096"
        },
        {
            id: 3,
            title: "Website Development",
            description: "Boost your website's visibility and drive organic traffic with our comprehensive SEO solutions. Our team of experts utilizes cutting-edge techniques and tools to optimize your website for search engines, ensuring higher rankings and better online presence.",
            image: "https://framerusercontent.com/images/TwojwVpws1RqKxAvxHAyjxy7OY.png?scale-down-to=4096"
        }
    ]

    const faqs = [
        {
            "id": 0,
            "question": "How can Zenith supercharge my business?",
            "answer": "Zenith can assist in designing, developing and deployment your business website. We also will work tirelessly to seamlessly integrate AI systems into your business workflow. From GPT Chatbots to content generation system, we are confident we can find a way to better equip your business through tech."
        },
        {
            "id": 1,
            "question": "Are your services suitable for small business?",
            "answer": "Of course, in fact we prefer clients who are currently still growing. We believe this way we can work closer with our client to better understand their wants and needs and see the realtime growth together!"
        },
        {
            "id": 2,
            "question": "Do you offer continued support after an initial service deployment?",
            "answer": "Most definetly, as we better undetstand a clients particular needs, we can access how our team can continously maintain and build upon our inital builds."
        },
        {
            "id": 3,
            "question": "What does a typical timeline between us and our clients look like?",
            "answer": "Zenith can assist in designing, developing and deployment your business website. We also will work tirelessly to seamlessly integrate AI systems into your business workflow. From GPT Chatbots to content generation system, we are confident we can find a way to better equip your business through tech."
        }
    ]

    return (
        <>
            <main>
                <header className="fixed top-0 left-0 right-0 md:static flex flex-row items-center px-8 py-4 bg-white/70 backdrop-blur-sm border-b-[1px] border-neutral-100" >
                    <a
                        id="logo"
                        href="#"
                        rel="noreferrer"
                        className="flex flex-row grow items-center"
                    >
                        <Bird />

                        <h1 className="text-2xl text-neutral-800 text-left font-medium tracking-tighter ml-2" > Zenith AI </h1>
                    </a>

                    <div id="desktop-links" className="hidden md:flex flex-row items-center space-x-6" >
                        <button
                            // onClick={scrollToSection("aboutUs")}
                            className="text-md text-neutral-800 text-right font-light tracking-tighter"
                        >
                            About Us
                        </button>
                        <button
                            // onClick={scrollToSection("solutions")}
                            className="text-md text-neutral-800 text-right font-light tracking-tighter"
                        >
                            Solutions
                        </button>
                        <button
                            // onClick={scrollToSection("faqs")}
                            className="text-md text-neutral-800 text-right font-light tracking-tighter"
                        >
                            FAQs
                        </button>
                        <a
                            href="#"
                            rel="noreferrer"
                            className="text-md text-white font-light tracking-tighter bg-neutral-900 px-4 py-2 rounded-full"
                        >
                            Book Consultation
                        </a>
                    </div>

                    <div id="mobile-menu-toggle" className="flex flex-row items-center md:hidden" >
                        <button
                            onClick={() => { setMobileMenuOpen(true) }}
                            className="text-sm text-neutral-800 font-light tracking-tighter"
                        >
                            <Menu />

                        </button>
                    </div>
                </header>

                <div id="hero" ref={heroSectionRef} className="max-w-5xl flex flex-col items-center mx-auto px-4 md:px-6 lg:px-8 h-screen pt-32 space-y-6" >
                    <div>
                        <h1 className="text-5xl text-neutral-800 font-medium tracking-tighter text-center md:text-6xl" > Supercharge Your </h1>
                        <h1 className="text-5xl text-neutral-800 font-medium tracking-tighter text-center md:text-6xl" > Growth with Our </h1>
                        <h1 className="text-5xl text-neutral-800 font-medium tracking-tighter text-center md:text-6xl" > AI &Web Development Team </h1>
                    </div>

                    <div >
                        <p className="text-lg text-neutral-800 font-light tracking-tighter text-center" > Want to increase your leads, and sales.Let us help with the heavy lifting, </p>
                        <p className="text-lg text-neutral-800 font-light tracking-tighter text-center" > all through professional implementation of cutting edge tech.</p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-x-4 md:space-y-0" >
                        <a
                            href="#"
                            rel="noreferrer"
                            className="w-80 md:w-auto text-center text-xl text-white font-light tracking-tighter bg-neutral-900 px-6 md:px-8 py-4 md:py-4 rounded-full"
                        >
                            ☎️&nbsp;&nbsp;&nbsp;Book Consultation
                        </a>
                        <a
                            href="#"
                            rel="noreferrer"
                            className="w-80 md:w-auto text-center text-xl text-black font-light tracking-tighter border-2 border-neutral-950 px-6 md:px-8 py-4 md:py-4 rounded-full"
                        >
                            ⚡️&nbsp;&nbsp;View Our Solutions
                        </a>
                    </div>
                </div>

                <div id="about-us" ref={aboutUsSectionRef} className="py-24 bg-neutral-900" >
                    <div className="max-w-5xl flex flex-col items-center justify-center mx-auto px-4 md:px-6 lg:px-8 pt-0 space-y-6" >
                        <h1 className="text-center text-4xl text-white font-medium tracking-tighter md:text-5xl" > About Us </h1>

                        <p className="text-center text-lg text-white font-light tracking-tighter" > Zenith AI looks to help small and medium sized business grow by exploring ways cutting edge tech can make your workflows stronger, better, and faster.We pride ourselves in working as close as possible with our clients guiding them from initial implementation to unimaginable  growth.Our founding principles lays in a simple law, stating we only rake in dough, once you’re rolling in it! </p>
                    </div>
                </div>

                <div id="solutions" ref={solutionsSectionRef} className="py-24 bg-rose-500" >
                    <div className="max-w-5xl flex flex-col items-center justify-center mx-auto px-4 md:px-6 lg:px-8 pt-0 space-y-6" >
                        <h1 className="text-center text-4xl text-neutral-800 font-medium tracking-tighter md:text-5xl" > Solutions We Offer </h1>

                        <p className="text-center text-lg text-neutral-800 font-light tracking-tighter" > Although we are incredibly flexible in finding the tech thats right for you, here are some solutions we specialize in.</p>

                        {
                            solutions.map((solution, solutionIDX) => {
                                return (
                                    <>
                                        {((solutionIDX + 1) % 2) == 1 ?
                                            <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-16 py-24" >
                                                <img src={solution.image} className="h-6/6 ml-auto" />

                                                <div className="my-auto" >
                                                    <h1 className="text-center md:text-left text-4xl text-neutral-800 font-medium tracking-tighter md:text-5xl" > {solution.title} </h1>

                                                    <p className="text-center md:text-left text-lg text-neutral-800 font-light tracking-tighter mt-4" > {solution.description} </p>
                                                </div>
                                            </div>
                                            :
                                            <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-16 py-24" >
                                                <div className="my-auto order-last md:order-first" >
                                                    <h1 className="text-center md:text-left text-4xl text-neutral-800 font-medium tracking-tighter md:text-5xl" > {solution.title} </h1>

                                                    <p className="text-center md:text-left text-lg text-neutral-800 font-light tracking-tighter mt-4" > {solution.description} </p>
                                                </div>

                                                <img src={solution.image} className="h-6/6 ml-auto" />
                                            </div>
                                        }
                                    </>
                                )
                            })
                        }
                    </div>
                </div>

                <div id="faqs" className="py-24" >
                    <div className="max-w-5xl flex flex-col items-center justify-center mx-auto px-4 md:px-6 lg:px-8 pt-0 space-y-6" >
                        <h1 className="text-center text-4xl text-neutral-800 font-medium tracking-tighter md:text-5xl" > FAQs </h1>
                    </div>
                </div>

                <div id="cta" className="py-24 bg-green-950" >
                    <div className="max-w-5xl flex flex-col items-center justify-center mx-auto px-4 md:px-6 lg:px-8 pt-0 space-y-6" >
                        <h1 className="text-center text-4xl text-white font-medium tracking-tighter md:text-5xl" > Ready to level up with cutting edge tech ? </h1>

                        <p className="text-center text-lg text-white font-light tracking-tighter" > Boost your website's visibility and drive organic traffic with our comprehensive SEO solutions. Our team of experts utilizes cutting-edge techniques and tools to optimize your website for search engines, ensuring higher rankings and better online presence.</p>

                        <a
                            href="#"
                            rel="noreferrer"
                            className="w-80 text-center text-xl text-white font-light tracking-tighter bg-neutral-950 bg-opacity-50 backdrop-blur-2xl px-6 py-4 rounded-full animate-pulse duration-1000"
                        >
                            👋&nbsp;&nbsp;&nbsp;Let's Talk Today
                        </a>
                    </div>
                </div>

                <footer id="footer" className="pt-24" >
                    <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 md:px-6 lg:px-8 lg:pt-24 space-y-14" >
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3" >
                            <div>
                                <div className="flex flex-row items-center justify-center md:justify-start md:text-left" >
                                    <Bird />

                                    <h1 className="text-2xl md:text-center md:text-left text-neutral-800 font-medium tracking-tighter ml-2" > Zenith AI </h1>
                                </div>

                                <p className="mt-8 max-w-md md:max-w-xs md:text-left text-center tracking-tighter text-neutral-800 font-light transition hover:text-neutral-800/75" >
                                    Want to increase your leads, and sales.Let us help with the heavy lifting,
                                    all through professional implementation of cutting edge tech.
                                </p>

                                <ul className="mt-8 flex justify-center gap-6 md:justify-start md:gap-8" >
                                    <li>
                                        <a
                                            href="#"
                                            rel="noreferrer"
                                            className="text-neutral-950 transition hover:text-neutral-950/75"
                                        >
                                            <span className="sr-only" > Facebook </span>

                                            <Facebook />
                                        </a>
                                    </li>

                                    <li >
                                        <a
                                            href="#"
                                            rel="noreferrer"
                                            className="text-neutral-950 transition hover:text-neutral-950/75"
                                        >
                                            <span className="sr-only" > Instagram </span>

                                            <Instagram />
                                        </a>
                                    </li>

                                    <li >
                                        <a
                                            href="#"
                                            rel="noreferrer"
                                            className="text-neutral-950 transition hover:text-neutral-950/75"
                                        >
                                            <span className="sr-only" > Twitter </span>

                                            <Twitter />
                                        </a>
                                    </li>

                                    <li >
                                        <a
                                            href="#"
                                            rel="noreferrer"
                                            className="text-neutral-950 transition hover:text-neutral-950/75"
                                        >
                                            <span className="sr-only" > GitHub </span>

                                            <Github />
                                        </a>
                                    </li>

                                    <li >
                                        <a
                                            href="#"
                                            rel="noreferrer"
                                            className="text-neutral-950 transition hover:text-neutral-950/75"
                                        >
                                            <span className="sr-only" > Dribbble </span>

                                            <Dribbble />
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:grid-cols-4 lg:col-span-2" >
                                <div className="text-center md:text-left" >
                                    <p className="text-lg text-neutral-800 font-medium" > About Us </p>

                                    <ul className="mt-8 space-y-4 text-sm" >
                                        <li>
                                            <a
                                                href="#"
                                                rel="noreferrer"
                                                className="text-neutral-800 font-light transition hover:text-neutral-800/75"
                                            >
                                                Front Door
                                            </a>
                                        </li>
                                        <li >
                                            <a
                                                href="#"
                                                rel="noreferrer"
                                                className="text-neutral-800 font-light transition hover:text-neutral-800/75"
                                            >
                                                Solutions
                                            </a>
                                        </li>
                                        <li >
                                            <a
                                                href="#"
                                                rel="noreferrer"
                                                className="text-neutral-800 font-light transition hover:text-neutral-800/75"
                                            >
                                                About Us
                                            </a>
                                        </li>
                                        <li >
                                            <a
                                                href="#"
                                                rel="noreferrer"
                                                className="text-neutral-800 font-light transition hover:text-neutral-800/75"
                                            >
                                                Our Team
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="text-center md:text-left" >
                                    <p className="text-lg text-neutral-800 font-medium" > Our Services </p>

                                    <ul className="mt-8 space-y-4 text-sm" >
                                        {
                                            solutions.map((solution, solutionIDX) => {
                                                return (
                                                    <li>
                                                        <a
                                                            href="#"
                                                            rel="noreferrer"
                                                            className="text-neutral-800 font-light transition hover:text-neutral-800/75"
                                                        >
                                                            {solution.title}
                                                        </a>
                                                    </li>
                                                )
                                            })}
                                    </ul>
                                </div>

                                <div className="text-center md:text-left" >
                                    <p className="text-lg text-neutral-800 font-medium" > Helpful Links </p>

                                    <ul className="mt-8 space-y-4 text-sm" >
                                        <li>
                                            <a
                                                href="#"
                                                rel="noreferrer"
                                                className="text-neutral-800 font-light transition hover:text-neutral-800/75"
                                            >
                                                FAQs
                                            </a>
                                        </li>

                                        <li >
                                            <a
                                                href="#"
                                                rel="noreferrer"
                                                className="text-neutral-800 font-light transition hover:text-neutral-800/75"
                                            >
                                                Book Consultation
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="text-center md:text-left" >
                                    <p className="text-lg font-medium text-gray-900" > Contact Us </p>

                                    <ul className="mt-8 space-y-4 text-sm" >
                                        <li>
                                            <a
                                                href="#"
                                                rel="noreferrer"
                                                className="text-neutral-800 font-light transition hover:text-neutral-800/75"
                                            >
                                                hello@zenith.ai
                                            </a>
                                        </li>
                                        <li >
                                            <a
                                                href="#"
                                                rel="noreferrer"
                                                className="text-neutral-800 font-light transition hover:text-neutral-800/75"
                                            >
                                                +1(818) 220 - 3266
                                            </a>
                                        </li>
                                        <li >
                                            <a
                                                href="#"
                                                rel="noreferrer"
                                                className="text-neutral-800 font-light transition hover:text-neutral-800/75"
                                            >
                                                Los Angeles, CA
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 border-t border-gray-100 pt-6" >
                            <div className="text-center md:flex md:justify-between md:text-left" >
                                <p className="text-sm text-neutral-800" >
                                    <span className="block md:inline" > All rights reserved &nbsp;&nbsp; </span>

                                    <a
                                        href="#"
                                        rel="noreferrer"
                                        target="_blank"
                                        className="inline-block underline transition"
                                    >
                                        Terms &Conditions
                                    </a>

                                    <span> &nbsp;&middot;&nbsp; </span>

                                    <a
                                        href="#"
                                        rel="noreferrer"
                                        target="_blank"
                                        className="inline-block underline transition"
                                    >
                                        Privacy Policy
                                    </a>
                                </p>

                                <p className="mt-4 text-sm text-neutral-800 md:order-first md:mt-0" >&copy; 2023 Zenith AI </p>
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
                    className="relative z-10"
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

                    <div className="fixed inset-0 overflow-y-auto flex flex-col w-full px-8 pt-4" >
                        <div className="flex flex-row items-center pb-24" >
                            <button
                                onClick={() => { setMobileMenuOpen(false) }}
                                className="flex flex-row grow items-center outline-0"
                            >
                                <Bird className="text-white" />

                                <h1 className="text-2xl text-white font-medium tracking-tighter ml-2" > Zenith AI </h1>
                            </button>

                            <div className="flex flex-row items-center space-x-6" >
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
                            variants={menuAnimationContainer}
                            initial="hidden"
                            animate="visible"
                            className="flex flex-col space-y-6"
                        >
                            <motion.button
                                key="about-us-menu-item"
                                variants={menuAnimationItem}
                                onClick={() => {
                                    setMobileMenuOpen(false)
                                    // scrollToSolutions()
                                    // Link to section
                                }}
                                className="text-left text-4xl text-white font-thin tracking-tighter md:text-7xl outline-0"
                            >
                                About Us
                            </motion.button>

                            <motion.button
                                key="solutions-menu-item"
                                variants={menuAnimationItem}
                                onClick={() => {
                                    setMobileMenuOpen(false)

                                    setTimeout(() => {
                                        // scrollToSolutions()
                                    }, 250)
                                }}
                                className="text-left text-4xl text-white font-thin tracking-tighter md:text-7xl outline-0"
                            >
                                Solutions
                            </motion.button>

                            <motion.button
                                key="faqs-menu-item"
                                variants={menuAnimationItem}
                                onClick={() => {
                                    setMobileMenuOpen(false)

                                    // Link to section
                                }}
                                className="text-left text-4xl text-white font-thin tracking-tighter md:text-7xl outline-0"
                            >
                                FAQs
                            </motion.button>

                            <motion.button
                                key="our-team-menu-item"
                                variants={menuAnimationItem}
                                onClick={() => {
                                    setMobileMenuOpen(false)

                                    // Link to section
                                }}
                                className="text-left text-4xl text-white font-thin tracking-tighter md:text-7xl outline-0"
                            >
                                Our Team
                            </motion.button>

                            <motion.button
                                key="book-consultation-menu-item"
                                variants={menuAnimationItem}
                                onClick={() => {
                                    setMobileMenuOpen(false)

                                    // Link to section
                                }}
                                className="text-left text-4xl text-white font-thin tracking-tighter md:text-7xl outline-0"
                            >
                                Book Consultation
                            </motion.button>
                        </motion.div>
                    </div>
                </Dialog>
            </Transition>
        </>
    )
}