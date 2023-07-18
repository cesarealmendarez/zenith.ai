import { Fragment, useState } from "react";

import { Disclosure, Transition, Dialog } from "@headlessui/react"
import { motion } from "framer-motion";

import { Bird, Moon, Menu, ChevronRight, X, Mail } from "lucide-react";

export default function Index() {
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
            <div className="relative w-full">
                <div className="fixed top-0 left-0 right-0 md:static flex flex-row items-center px-8 py-4 bg-white/70 backdrop-blur-sm border-b-[1px] border-neutral-100">
                    <a href="" className="flex flex-row grow items-center">
                        <Bird />

                        <h1 className="text-2xl text-neutral-800 font-medium tracking-tighter ml-2">Zenith AI</h1>
                    </a>

                    <div className="hidden md:flex flex-row items-center space-x-6">
                        <a href="#" className="text-sm text-neutral-800 font-light tracking-tighter">About Us</a>
                        <a href="#" className="text-sm text-neutral-800 font-light tracking-tighter">Services</a>
                        <a href="#" className="text-sm text-neutral-800 font-light tracking-tighter">FAQs</a>
                        <a href="#" className="text-sm text-neutral-800 font-light tracking-tighter">Our Team</a>
                        <a href="" className="text-sm text-white font-light tracking-tighter bg-neutral-950 px-4 py-2 rounded-full">Book Consultation</a>

                    </div>

                    <div className="flex flex-row items-center space-x-6 md:hidden">
                        <button onClick={() => { setMobileMenuOpen(true) }} className="text-sm text-neutral-800 font-light tracking-tighter"><Menu /></button>
                    </div>
                </div>

                <div className="max-w-5xl flex flex-col items-center mx-auto px-4 md:px-6 lg:px-8 pt-32 pb-24 space-y-6">
                    <div>
                        <h1 className="text-center text-5xl text-neutral-800 font-medium tracking-tighter md:text-7xl">Accelerate Your</h1>
                        <h1 className="text-center text-5xl text-neutral-800 font-medium tracking-tighter md:text-7xl">Growth with Our</h1>
                        <h1 className="text-center text-5xl text-neutral-800 font-medium tracking-tighter md:text-7xl">Web & AI Development Team</h1>
                    </div>

                    <div>
                        <p className="text-center text-lg text-neutral-800 font-light tracking-tighter">Do you want to increase sales? You can use search</p>
                        <p className="text-center text-lg text-neutral-800 font-light tracking-tighter">optimzation and our SEO agency to achieve your goals.</p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-x-4 md:space-y-0">
                        <a href="" className="w-80 md:w-auto text-center text-xl text-white font-light tracking-tighter bg-neutral-950 px-6 py-4 md:py-2 rounded-full">☎️&nbsp;&nbsp;&nbsp;Book Consultation</a>
                        <a href="" className="w-80 md:w-auto text-center text-xl text-black font-light tracking-tighter border-2 border-neutral-950 px-6 py-4 md:py-2 rounded-full">⚡️&nbsp;&nbsp;&nbsp;View Our Solutions</a>
                    </div>
                </div>

                <div className="py-24 bg-neutral-950">
                    <div className="max-w-5xl flex flex-col items-center mx-auto px-4 md:px-6 lg:px-8 pt-0 space-y-6">
                        <h1 className="text-center text-4xl text-white font-medium tracking-tighter md:text-5xl">About Us</h1>

                        <p className="text-center text-lg text-white font-light tracking-tighter">Morningside AI is your full-cycle AI development partner, from concept to production and beyond. We're not just machine learning specialists, we're the team that helps startups and enterprises create cutting-edge AI products that optimize efficiency and accelerate growth. Led by founder Liam Ottley, we guide you through the entire process and shape your ideas into ready-to-go solutions.</p>
                    </div>
                </div>

                <div className="py-24">
                    <div className="max-w-5xl flex flex-col items-center mx-auto px-4 md:px-6 lg:px-8 pt-0 space-y-6">
                        {/* <p className="text-center text-lg text-green-500 font-light tracking-tighter">Morningside AI is your full-cycle AI development partner.</p> */}

                        <h1 className="text-center text-4xl text-neutral-800 font-medium tracking-tighter md:text-5xl">Comprehensive Growth Solutions</h1>

                        <p className="text-center text-lg text-neutral-800 font-light tracking-tighter">Morningside AI is your full-cycle AI development partner, from concept to production and beyond</p>
                        {/* <div className="grid grid-cols-1 md:grid-cols-4 gap-y-6 w-full">
                        <div className="col-start-1 col-span-1 flex justify-center">
                            <a href="" className="w-auto text-center text-base text-black font-light tracking-tighter bg-green-50 border-2 border-green-500 px-6 py-4 md:py-2 rounded-full">🤖&nbsp;&nbsp;&nbsp;GPT Chatbot Integration</a>
                        </div>
                        <div className="col-start-1 md:col-start-2 col-span-1 flex justify-center">
                            <a href="" className="w-auto text-center text-base text-black font-light tracking-tighter bg-green-50 border-2 border-green-500 px-6 py-4 md:py-2 rounded-full">👨‍💻&nbsp;&nbsp;&nbsp;Web Design</a>
                        </div>
                        <div className="col-start-1 md:col-start-3 col-span-1 flex justify-center">
                            <a href="" className="w-auto text-center text-base text-black font-light tracking-tighter bg-green-50 border-2 border-green-500 px-6 py-4 md:py-2 rounded-full">📱&nbsp;&nbsp;&nbsp;App Design</a>
                        </div>
                        <div className="col-start-1 md:col-start-4 col-span-1 flex justify-center">
                            <a href="" className="w-auto text-center text-base text-black font-light tracking-tighter bg-green-50 border-2 border-green-500 px-6 py-4 md:py-2 rounded-full">🚀&nbsp;&nbsp;&nbsp;Web Deployment</a>
                        </div>
                        <div className="col-start-1 md:col-start-2 col-span-1 flex justify-center">
                            <a href="" className="w-auto text-center text-base text-black font-light tracking-tighter bg-green-50 border-2 border-green-500 px-6 py-4 md:py-2 rounded-full">📹&nbsp;&nbsp;&nbsp;Media</a>
                        </div>
                        <div className="col-start-1 md:col-start-3 col-span-1 flex justify-center">
                            <a href="" className="w-auto text-center text-base text-black font-light tracking-tighter bg-green-50 border-2 border-green-500 px-6 py-4 md:py-2 rounded-full">🌐&nbsp;&nbsp;&nbsp;Search Engine Optimzation</a>
                        </div>
                    </div> */}

                        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-16 py-24">
                            <div>
                                <img src="https://framerusercontent.com/images/3UvsRX2tal7Ts7r8iY108Y7FM.png?scale-down-to=4096" className="h-6/6 ml-auto" />
                            </div>
                            <div className="my-auto">
                                {/* <p className="text-center md:text-left text-base text-green-500 font-semibold tracking-tighter">SEO Mastery</p> */}

                                <h1 className="text-center md:text-left text-4xl text-neutral-800 font-medium tracking-tighter md:text-5xl">Website Development</h1>

                                <p className="text-center md:text-left text-base text-neutral-800 font-light tracking-tighter mt-4">Boost your website's visibility and drive organic traffic with our comprehensive SEO solutions. Our team of experts utilizes cutting-edge techniques and tools to optimize your website for search engines, ensuring higher rankings and better online presence.</p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-16 py-24">
                            <div className="order-last md:order-first">
                                {/* <p className="text-center md:text-left text-base text-green-500 font-semibold tracking-tighter">SEO Mastery</p> */}

                                <h1 className="text-center md:text-left text-4xl text-neutral-800 font-medium tracking-tighter md:text-5xl">GPT Chatbot Integration</h1>

                                <p className="text-center md:text-left text-base text-neutral-800 font-light tracking-tighter mt-4">Boost your website's visibility and drive organic traffic with our comprehensive SEO solutions. Our team of experts utilizes cutting-edge techniques and tools to optimize your website for search engines, ensuring higher rankings and better online presence.</p>
                            </div>
                            <div className="my-auto">
                                <img src="https://framerusercontent.com/images/TwojwVpws1RqKxAvxHAyjxy7OY.png?scale-down-to=4096" className="h-6/6 mr-auto" />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-16 py-24">
                            <div>
                                <img src="https://framerusercontent.com/images/3UvsRX2tal7Ts7r8iY108Y7FM.png?scale-down-to=4096" className="h-6/6 ml-auto" />
                            </div>
                            <div className="my-auto">
                                {/* <p className="text-center md:text-left text-base text-green-500 font-semibold tracking-tighter">Search Engine Optimization</p> */}

                                <h1 className="text-center md:text-left text-4xl text-neutral-800 font-medium tracking-tighter md:text-5xl">Search Engine Optimization</h1>

                                <p className="text-center md:text-left text-base text-neutral-800 font-light tracking-tighter mt-4">Boost your website's visibility and drive organic traffic with our comprehensive SEO solutions. Our team of experts utilizes cutting-edge techniques and tools to optimize your website for search engines, ensuring higher rankings and better online presence.</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="py-24">
                    <div className="max-w-5xl flex flex-col items-center mx-auto px-4 md:px-6 lg:px-8 pt-0 space-y-6">

                        <h1 className="text-center text-4xl text-neutral-800 font-medium tracking-tighter md:text-5xl">FAQs</h1>

                        <p className="text-center text-lg text-neutral-800 font-light tracking-tighter">Morningside AI is your full-cycle AI development partner, from concept to production and beyond. We're not just machine learning specialists, we're the team that helps startups and enterprises create cutting-edge AI products that optimize efficiency and accelerate.</p>

                        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-4">
                            {faqs.map((faq, faqIndex) => {
                                return (
                                    <Disclosure as="div" className="flex flex-row col-span-1 items-start text-left space-x-4 py-4 px-2 text-neutral-800 font-normal border-[1px] border-neutral-200 rounded-lg">
                                        {({ open }) => (
                                            <Disclosure.Button as="div" className="flex flex-row items-start text-left space-x-4">
                                                <div className="flex flex-col justify-center items-start">
                                                    <ChevronRight color="gray" />
                                                </div>
                                                <div className="space-y-6">
                                                    <p>{faq.question}</p>

                                                    <Disclosure.Panel>
                                                        <p>{faq.answer}</p>
                                                    </Disclosure.Panel>
                                                </div>
                                            </Disclosure.Button>
                                        )}
                                    </Disclosure>
                                )
                            })}

                            {/* <Disclosure as="div" className="col-span-1 flex flex-row items-start text-left space-x-4 py-4 px-2 text-neutral-800 font-normal border-[1px] border-neutral-200 rounded-lg">
                                {({ open }) => (
                                    <Disclosure.Button as="div" className="flex flex-row items-start text-left space-x-4">
                                        <div className="flex flex-col">
                                            <ChevronRight color="gray" />
                                        </div>
                                        <div className="space-y-6">
                                            <p>How can AI automation benefit my business?</p>
                                            <Disclosure.Panel>
                                                <p>How can AI automation benefit my business?</p>
                                            </Disclosure.Panel>
                                        </div>
                                    </Disclosure.Button>
                                )}
                            </Disclosure>

                            <Disclosure as="div" className="col-span-1 flex flex-row items-center text-left space-x-4 py-4 px-2 text-neutral-800 font-normal border-[1px] border-neutral-200 rounded-lg">
                                {({ open }) => (
                                    <Disclosure.Button as="div" className="flex flex-row items-start text-left space-x-4">
                                        <div className="flex flex-col justify-center items-center">
                                            <ChevronRight color="gray" />
                                        </div>
                                        <div className="space-y-4">
                                            <p>How can AI automation benefit my business?</p>
                                            <Disclosure.Panel>
                                                <p>How can AI automation benefit my business?</p>
                                            </Disclosure.Panel>
                                        </div>
                                    </Disclosure.Button>
                                )}
                            </Disclosure> */}
                        </div>
                    </div>
                </div>

                <div className="py-24 bg-green-950">
                    <div className="max-w-5xl flex flex-col items-center mx-auto px-4 md:px-6 lg:px-8 pt-0 space-y-6">
                        <h1 className="text-center text-4xl text-white font-medium tracking-tighter md:text-5xl">Ready to level up with cutting edge tech?</h1>

                        <p className="text-center text-lg text-white font-light tracking-tighter">Boost your website's visibility and drive organic traffic with our comprehensive SEO solutions. Our team of experts utilizes cutting-edge techniques and tools to optimize your website for search engines, ensuring higher rankings and better online presence.</p>

                        <a href="" className="w-80 text-center text-xl text-white font-light tracking-tighter bg-neutral-950 bg-opacity-50 backdrop-blur-2xl px-6 py-4 rounded-full animate-pulse duration-1000">👋&nbsp;&nbsp;&nbsp;Let's Talk Today</a>
                    </div>
                </div>

                <footer className="bg-white pt-24">
                    <div className="mx-auto max-w-screen-xl px-4 pb-6 pt-16 md:px-6 lg:px-8 lg:pt-24 space-y-14">
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                            <div>

                                <div className="flex flex-row items-center justify-center md:justify-start md:text-left">
                                    <Bird />
                                    <h1 className="text-2xl md:text-center md:text-left text-neutral-800 font-medium tracking-tighter ml-2">Zenith AI</h1>
                                </div>

                                <p className="mt-8 max-w-md md:max-w-xs  md:text-left text-center tracking-tighter text-neutral-800 font-light transition hover:text-neutral-800/75">
                                    Gain a competitive edge with the latest AI breakthroughs and updates - all in a 5 minute email.
                                    Our AI experts sift through the clutter, honing in on the news that truly matters.
                                </p>

                                <ul className="mt-8 flex justify-center gap-6 md:justify-start md:gap-8">
                                    <li>
                                        <a
                                            href="/"
                                            rel="noreferrer"
                                            target="_blank"
                                            className="text-neutral-950 transition hover:text-neutral-950/75"
                                        >
                                            <span className="sr-only">Facebook</span>
                                            <svg
                                                className="h-6 w-6"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href="/"
                                            rel="noreferrer"
                                            target="_blank"
                                            className="text-neutral-950 transition hover:text-neutral-950/75"
                                        >
                                            <span className="sr-only">Instagram</span>
                                            <svg
                                                className="h-6 w-6"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href="/"
                                            rel="noreferrer"
                                            target="_blank"
                                            className="text-neutral-950 transition hover:text-neutral-950/75"
                                        >
                                            <span className="sr-only">Twitter</span>
                                            <svg
                                                className="h-6 w-6"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"
                                                />
                                            </svg>
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href="/"
                                            rel="noreferrer"
                                            target="_blank"
                                            className="text-neutral-950 transition hover:text-neutral-950/75"
                                        >
                                            <span className="sr-only">GitHub</span>
                                            <svg
                                                className="h-6 w-6"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                        </a>
                                    </li>

                                    <li>
                                        <a
                                            href="/"
                                            rel="noreferrer"
                                            target="_blank"
                                            className="text-neutral-950 transition hover:text-neutral-950/75"
                                        >
                                            <span className="sr-only">Dribbble</span>
                                            <svg
                                                className="h-6 w-6"
                                                fill="currentColor"
                                                viewBox="0 0 24 24"
                                                aria-hidden="true"
                                            >
                                                <path
                                                    fill-rule="evenodd"
                                                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c5.51 0 10-4.48 10-10S17.51 2 12 2zm6.605 4.61a8.502 8.502 0 011.93 5.314c-.281-.054-3.101-.629-5.943-.271-.065-.141-.12-.293-.184-.445a25.416 25.416 0 00-.564-1.236c3.145-1.28 4.577-3.124 4.761-3.362zM12 3.475c2.17 0 4.154.813 5.662 2.148-.152.216-1.443 1.941-4.48 3.08-1.399-2.57-2.95-4.675-3.189-5A8.687 8.687 0 0112 3.475zm-3.633.803a53.896 53.896 0 013.167 4.935c-3.992 1.063-7.517 1.04-7.896 1.04a8.581 8.581 0 014.729-5.975zM3.453 12.01v-.26c.37.01 4.512.065 8.775-1.215.25.477.477.965.694 1.453-.109.033-.228.065-.336.098-4.404 1.42-6.747 5.303-6.942 5.629a8.522 8.522 0 01-2.19-5.705zM12 20.547a8.482 8.482 0 01-5.239-1.8c.152-.315 1.888-3.656 6.703-5.337.022-.01.033-.01.054-.022a35.318 35.318 0 011.823 6.475 8.4 8.4 0 01-3.341.684zm4.761-1.465c-.086-.52-.542-3.015-1.659-6.084 2.679-.423 5.022.271 5.314.369a8.468 8.468 0 01-3.655 5.715z"
                                                    clip-rule="evenodd"
                                                />
                                            </svg>
                                        </a>
                                    </li>
                                </ul>
                            </div>

                            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:grid-cols-4 lg:col-span-2">
                                <div className="text-center md:text-left">
                                    <p className="text-lg text-neutral-800 font-medium">About Us</p>

                                    <ul className="mt-8 space-y-4 text-sm">
                                        <li>
                                            <a className="text-neutral-800 font-light transition hover:text-neutral-800/75" href="/">Overview</a>
                                        </li>

                                        <li>
                                            <a className="text-neutral-800 font-light transition hover:text-neutral-800/75" href="/">About Us</a>
                                        </li>

                                        <li>
                                            <a className="text-neutral-800 font-light transition hover:text-neutral-800/75" href="/">Solutions</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="text-center md:text-left">
                                    <p className="text-lg text-neutral-800 font-medium">Our Services</p>

                                    <ul className="mt-8 space-y-4 text-sm">
                                        <li>
                                            <a className="text-neutral-800 font-light transition hover:text-neutral-800/75" href="/">Web Design & Development</a>
                                        </li>

                                        <li>
                                            <a className="text-neutral-800 font-light transition hover:text-neutral-800/75" href="/">Search Engine Optimzation</a>
                                        </li>

                                        <li>
                                            <a className="text-neutral-800 font-light transition hover:text-neutral-800/75" href="/">GPT Chatbot Integration</a>
                                        </li>

                                        <li>
                                            <a className="text-neutral-800 font-light transition hover:text-neutral-800/75" href="/">AI Content Generation</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="text-center md:text-left">
                                    <p className="text-lg text-neutral-800 font-medium">Helpful Links</p>

                                    <ul className="mt-8 space-y-4 text-sm">
                                        <li>
                                            <a className="text-neutral-800 font-light transition hover:text-neutral-800/75" href="/">FAQs</a>
                                        </li>

                                        <li>
                                            <a className="text-neutral-800 font-light transition hover:text-neutral-800/75" href="/">Book Consultation</a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="text-center md:text-left">
                                    <p className="text-lg font-medium text-gray-900">Contact Us</p>

                                    <ul className="mt-8 space-y-4 text-sm">
                                        <li>
                                            <a className="text-neutral-800 font-light transition hover:text-neutral-800/75" href="/">hello@zenith.ai</a>
                                        </li>

                                        <li>
                                            <a className="text-neutral-800 font-light transition hover:text-neutral-800/75" href="/">+1 (818) 220-3266</a>
                                        </li>

                                        <li>
                                            <a className="text-neutral-800 font-light transition hover:text-neutral-800/75" href="/">Los Angeles, CA</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 border-t border-gray-100 pt-6">
                            <div className="text-center md:flex md:justify-between md:text-left">
                                <p className="text-sm text-neutral-800">
                                    <span className="block md:inline">All rights reserved&nbsp;&nbsp;</span>

                                    <a
                                        className="inline-block underline transition"
                                        href="/"
                                    >
                                        Terms & Conditions
                                    </a>

                                    <span>&nbsp;&middot;&nbsp;</span>

                                    <a
                                        className="inline-block underline transition"
                                        href="/"
                                    >
                                        Privacy Policy
                                    </a>
                                </p>

                                <p className="mt-4 text-sm text-neutral-800 md:order-first md:mt-0">
                                    &copy; 2023 Zenith AI
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>


            </div>

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

                    <div className="fixed inset-0 overflow-y-auto flex flex-col w-full px-8 pt-4">
                        <div className="flex flex-row items-center pb-24">
                            <button
                                onClick={() => { setMobileMenuOpen(false) }}
                                className="flex flex-row grow items-center outline-0"
                            >
                                <Bird className="text-white" />

                                <h1 className="text-2xl text-white font-medium tracking-tighter ml-2">Zenith AI</h1>
                            </button>

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
                            variants={menuAnimationContainer}
                            initial="hidden"
                            animate="visible"
                            className="flex flex-col space-y-6"
                        >
                            <motion.button
                                key="about-us-menu-item"
                                variants={menuAnimationItem}
                                onClick={() => { }}
                                className="text-left text-4xl text-white font-thin tracking-tighter md:text-7xl outline-0"
                            >
                                About Us
                            </motion.button>

                            <motion.button
                                key="services-menu-item"
                                variants={menuAnimationItem}
                                onClick={() => { }}
                                className="text-left text-4xl text-white font-thin tracking-tighter md:text-7xl outline-0"
                            >
                                Services
                            </motion.button>

                            <motion.button
                                key="faqs-menu-item"
                                variants={menuAnimationItem}
                                onClick={() => { }}
                                className="text-left text-4xl text-white font-thin tracking-tighter md:text-7xl outline-0"
                            >
                                FAQs
                            </motion.button>

                            <motion.button
                                key="book-consultation-menu-item"
                                variants={menuAnimationItem}
                                onClick={() => { }}
                                className="text-left text-4xl text-green-800 font-thin tracking-tighter md:text-7xl outline-0"
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