import { useState, Fragment } from "react";

import { Transition, Dialog } from "@headlessui/react";
import { motion } from "framer-motion";

import { Bird, Menu, X, Phone, Mail, Linkedin } from "lucide-react";

export default function Index() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    const mobileMenuAnimationContainer = {
        hidden: { opacity: 1, scale: 0 },
        visible: {
            opacity: 1,
            scale: 1,
            transition: { delayChildren: 0.3, staggerChildren: 0.07 },
        },
        exit: { opacity: 1, scale: 0 },
    };

    const mobileMenuAnimationItem = {
        hidden: { y: 20, opacity: 0 },
        visible: { y: 0, opacity: 1 },
        exit: { y: 20, opacity: 0 },
    };

    const solutions = [
        {
            id: 0,
            title: "🌐 Website Development",
            description:
                "Get online at breakneck speeds. We'll work tirelessly to construct a beautifully reliable website to showcase to the world what your business is all about!",
            image: "https://notioly.com/wp-content/uploads/2022/04/123.Website-builder.png",
        },
        {
            id: 1,
            title: "🤖 GPT Chatbot Integration",
            description:
                "Empower your website visitors with the expertise of highly advanced Large Language Models. Our GPT Chatbot Integrations are designed to seamlessly guide customers through your homepage, providing valuable assistance in lead generation, recommendations, booking, and more. This automation learns the ins and outs of your products and will make a worlds difference in your customer's online experience.",
            image: "https://notioly.com/wp-content/uploads/2023/04/228.Robot_.png",
        },
        {
            id: 2,
            title: "📈 Search Engine Optimization",
            description:
                "Elevate your website's visibility and attract organic traffic with our all-encompassing SEO solutions. Our team harnesses the power of advanced techniques and state-of-the-art tools to optimize your website for search engines. Experience the benefits of higher rankings and an enhanced online presence, as we propel your website towards unparalleled success within spaces such as Google Search, Google Maps, and more.",
            image: "https://notioly.com/wp-content/uploads/2023/04/221.Googling.png",
        },
    ];

    return (
        <>
            <main>
                <header className="fixed left-0 right-0 top-0 z-40 flex flex-row items-center border-b-[1px] border-neutral-100 bg-white/70 px-8 py-4 backdrop-blur-sm md:static">
                    <a
                        href="/"
                        rel="noreferrer"
                        className="flex grow flex-row items-center"
                    >
                        <Bird className="text-neutral-800" />

                        <h1 className="ml-2 text-left text-2xl font-medium tracking-tighter text-neutral-800">
                            Zenith Web Solutions
                        </h1>
                    </a>

                    <div className="hidden flex-row items-center space-x-6 md:flex">
                        <button
                            className="text-md text-right font-light tracking-tighter text-neutral-800"
                            onClick={() => {
                                const aboutUs =
                                    document.getElementById("about-us");
                                aboutUs?.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start",
                                });
                            }}
                        >
                            About Us
                        </button>

                        <button
                            className="text-md text-right font-light tracking-tighter text-neutral-800"
                            onClick={() => {
                                const solutions =
                                    document.getElementById("solutions");
                                solutions?.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start",
                                });
                            }}
                        >
                            Our Solutions
                        </button>

                        <a
                            href="https://calendly.com/hello-azs/online-consultation"
                            rel="noreferrer"
                            target="_blank"
                            className="text-md rounded-full bg-neutral-900 px-4 py-2 text-right font-light text-white"
                        >
                            Book Consulation
                        </a>
                    </div>

                    <div className="flex flex-row items-center md:hidden">
                        <button
                            onClick={() => {
                                setMobileMenuOpen(true);
                            }}
                            className="text-right text-sm font-light tracking-tighter text-neutral-800"
                        >
                            <Menu />
                        </button>
                    </div>
                </header>

                <div
                    id="hero"
                    className="mx-auto flex h-screen max-w-5xl flex-col items-center space-y-6 px-4 pt-32 md:px-6 lg:px-8"
                >
                    <div>
                        <h1 className="text-center text-4xl font-medium tracking-tighter text-neutral-800 md:text-6xl">
                            Supercharge Your
                        </h1>

                        <h1 className="text-center text-4xl font-medium tracking-tighter text-neutral-800 md:text-6xl">
                            Growth with Our
                        </h1>

                        <h1 className="text-center text-4xl font-medium tracking-tighter text-neutral-800 md:text-6xl">
                            AI & Web Development Team
                        </h1>
                    </div>

                    <div>
                        <p className="text-center text-lg font-light tracking-tighter text-neutral-800">
                            Looking to boost leads and sales?
                        </p>

                        <p className="text-center text-lg font-light tracking-tighter text-neutral-800">
                            Let us handle the heavy lifting by deploying
                            cutting-edge technology onto your workflows!
                        </p>
                    </div>

                    <div className="flex flex-col items-center space-y-4 md:flex-row md:space-x-4 md:space-y-0">
                        <a
                            href="https://calendly.com/hello-azs/online-consultation"
                            rel="noreferrer"
                            target="_blank"
                            className="tracking-tigher w-80 rounded-full bg-neutral-900 px-6 py-4 text-center text-xl font-light text-white md:w-auto md:px-8"
                        >
                            ☎️&nbsp;&nbsp;&nbsp;Book Consultation
                        </a>

                        <button
                            className="tracking-tigher w-80 rounded-full border-2 border-neutral-950 px-6 py-4 text-center text-xl font-light text-neutral-800 md:w-auto md:px-8"
                            onClick={() => {
                                const solutions =
                                    document.getElementById("solutions");
                                solutions?.scrollIntoView({
                                    behavior: "smooth",
                                    block: "start",
                                });
                            }}
                        >
                            ⚡️&nbsp;&nbsp;&nbsp;View Our Solutions
                        </button>
                    </div>
                </div>

                <div id="about-us" className="bg-green-950 py-24">
                    <div className="mx-auto flex max-w-5xl flex-col items-center justify-center space-y-6 px-4 pt-0 md:px-6 lg:px-8">
                        <h1 className="text-center text-4xl font-medium tracking-tighter text-white md:text-5xl">
                            About Us
                        </h1>

                        <p className="text-center text-lg font-light tracking-tighter text-white">
                            Welcome! Zenith Web Solutions is dedicated to empowering
                            businesses to reach new heights through the
                            transformative power of cutting-edge Artificial
                            Intelligence technology. Our mission is to enhance
                            your workflows, making them stronger, better, and
                            faster. We take immense pride in our client-centric
                            approach, forming close partnerships with our
                            clients, guiding them every step of the way, from
                            the initial implementation to unimaginable scale!
                        </p>
                    </div>
                </div>

                <div id="solutions" className="py-24">
                    <div className="mx-auto flex max-w-5xl flex-col items-center justify-center space-y-6 px-4 pt-0 md:px-6 lg:px-8">
                        <h1 className="text-center text-4xl font-medium tracking-tighter text-neutral-800 md:text-5xl">
                            Our Solutions
                        </h1>

                        <p className="text-center text-lg font-light tracking-tighter text-neutral-800">
                            Although we are incredibly flexible in finding the
                            tech solutions that are right for your business,
                            here are some we specialize in.
                        </p>

                        {solutions.map((solution, solutionIDX) => {
                            return (
                                <>
                                    {(solutionIDX + 1) % 2 === 1 ? (
                                        <div
                                            id={`solution-${solution.id}`}
                                            className="grid grid-cols-1 gap-16 py-24 md:grid-cols-2 md:gap-16"
                                        >
                                            <img
                                                src={solution.image}
                                                className="1/6 ml-auto md:h-5/6"
                                            />

                                            <div className="my-auto">
                                                <h1 className="tracking-tighte mt-4 text-center text-4xl font-medium text-neutral-800 md:text-left md:text-5xl">
                                                    {solution.title}
                                                </h1>

                                                <p className="mt-4 text-center text-lg font-light tracking-tighter text-neutral-800 md:text-left">
                                                    {solution.description}
                                                </p>
                                            </div>
                                        </div>
                                    ) : (
                                        <div className="grid grid-cols-1 gap-16 py-24 md:grid-cols-2 md:gap-16">
                                            <div className="order-last my-auto md:order-first">
                                                <h1 className="text-center text-4xl font-medium tracking-tighter text-neutral-800 md:text-left md:text-5xl">
                                                    {solution.title}
                                                </h1>

                                                <p className="mt-4 text-center text-lg font-light tracking-tighter text-neutral-800 md:text-left">
                                                    {solution.description}
                                                </p>
                                            </div>

                                            <img
                                                src={solution.image}
                                                className="1/6 ml-auto md:h-5/6"
                                            />
                                        </div>
                                    )}
                                </>
                            );
                        })}
                    </div>
                </div>

                <div className="bg-green-950 py-24">
                    <div className="mx-auto flex max-w-5xl flex-col items-center justify-center space-y-6 px-4 pt-0 md:px-6 lg:px-8">
                        <h1 className="text-center text-4xl font-medium tracking-tighter text-white md:text-5xl">
                            Ready to level up with cutting edge tech?
                        </h1>

                        <p className="text-center text-lg font-light tracking-tighter text-white">
                            Zenith Web Solutions is ready to start building when you are!
                            Let's chat and unlock a world of personalized
                            solutions for your business.
                        </p>

                        <a
                            href="https://calendly.com/hello-azs/online-consultation"
                            rel="noreferrer"
                            target="_blank"
                            className="w-80 rounded-full bg-neutral-950 bg-opacity-50 px-6 py-4 text-center text-xl font-light tracking-tighter text-white backdrop-blur-2xl"
                        >
                            👋&nbsp;&nbsp;&nbsp;Let's Talk Today
                        </a>
                    </div>
                </div>

                <footer id="footer" className="pt-24">
                    <div className="mx-auto max-w-screen-xl space-y-14 px-4 pb-6 pt-16 md:px-6 lg:px-8 lg:pt-24">
                        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                            <div>
                                <div className="flex flex-row items-center justify-center md:justify-start md:text-left">
                                    <Bird className="text-neutral-800" />

                                    <h1 className="ml-2 text-2xl font-medium tracking-tighter text-neutral-800 md:text-left md:text-center">
                                        Zenith Web Solutions
                                    </h1>
                                </div>

                                <p className="mt-8 max-w-md text-center font-light tracking-tighter text-neutral-800 md:max-w-xs md:text-left">
                                    Looking to boost leads and sales? Let us
                                    handle the heavy lifting by deploying
                                    cutting-edge technology onto your workflows!
                                </p>
                            </div>

                            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:grid-cols-4 lg:col-span-2">
                                <div className="text-center md:text-left">
                                    <p className="text-lg font-medium text-neutral-800">
                                        About Us
                                    </p>

                                    <ul className="mt-8 space-y-4 text-sm">
                                        <li>
                                            <button
                                                className="font-light text-neutral-800 transition hover:text-neutral-800/75"
                                                onClick={() => {
                                                    const hero =
                                                        document.getElementById(
                                                            "hero",
                                                        );
                                                    hero?.scrollIntoView({
                                                        behavior: "smooth",
                                                        block: "start",
                                                    });
                                                }}
                                            >
                                                Welcome
                                            </button>
                                        </li>

                                        <li>
                                            <button
                                                className="font-light text-neutral-800 transition hover:text-neutral-800/75"
                                                onClick={() => {
                                                    const aboutUs =
                                                        document.getElementById(
                                                            "about-us",
                                                        );
                                                    aboutUs?.scrollIntoView({
                                                        behavior: "smooth",
                                                        block: "start",
                                                    });
                                                }}
                                            >
                                                About Us
                                            </button>
                                        </li>

                                        <li>
                                            <button
                                                className="font-light text-neutral-800 transition hover:text-neutral-800/75"
                                                onClick={() => {
                                                    const solutions =
                                                        document.getElementById(
                                                            "solutions",
                                                        );
                                                    solutions?.scrollIntoView({
                                                        behavior: "smooth",
                                                        block: "start",
                                                    });
                                                }}
                                            >
                                                Our Solutions
                                            </button>
                                        </li>
                                    </ul>
                                </div>

                                <div className="text-center md:text-left">
                                    <p className="text-lg font-medium text-neutral-800">
                                        Our Solutions
                                    </p>

                                    <ul className="mt-8 space-y-4 text-sm">
                                        {solutions.map(
                                            (solution, solutionIDX) => {
                                                return (
                                                    <li>
                                                        <button
                                                            className="font-light text-neutral-800 transition hover:text-neutral-800/75"
                                                            onClick={() => {
                                                                document
                                                                    .getElementById(
                                                                        "solution-" +
                                                                            solution.id,
                                                                    )
                                                                    ?.scrollIntoView(
                                                                        {
                                                                            behavior:
                                                                                "smooth",
                                                                            block: "start",
                                                                        },
                                                                    );
                                                            }}
                                                        >
                                                            {solution.title}
                                                        </button>
                                                    </li>
                                                );
                                            },
                                        )}
                                    </ul>
                                </div>

                                <div className="text-center md:text-left">
                                    <p className="text-lg font-medium text-neutral-800">
                                        Helpful Links
                                    </p>

                                    <ul className="mt-8 space-y-4 text-sm">
                                        <li>
                                            <a
                                                href="https://calendly.com/hello-azs/online-consultation"
                                                rel="noreferrer"
                                                target="_blank"
                                                className="font-light text-neutral-800 transition hover:text-neutral-800/75"
                                            >
                                                Book Consultation
                                            </a>
                                        </li>
                                    </ul>
                                </div>

                                <div className="text-center md:text-left">
                                    <p className="text-lg font-medium text-gray-900">
                                        Contact Us
                                    </p>

                                    <ul className="mt-8 space-y-4 text-sm">
                                        <li>
                                            <a
                                                href="mailto:hello@zenithai.site"
                                                rel="noreferrer"
                                                className="font-light text-neutral-800 transition hover:text-neutral-800/75"
                                            >
                                                📬&nbsp;&nbsp;&nbsp;hello@zenithai.site
                                            </a>
                                        </li>

                                        <li>
                                            <a
                                                rel="noreferrer"
                                                className="font-light text-neutral-800 transition hover:text-neutral-800/75"
                                            >
                                                📍&nbsp;&nbsp;&nbsp;Los Angeles,
                                                CA
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        <div className="mt-12 border-t border-gray-100 pt-6">
                            <div className="text-center md:flex md:justify-between md:text-left">
                                <p className="text-sm text-neutral-800">
                                    <span className="block md:inline">
                                        All rights
                                        reserved&nbsp;&nbsp;&middot;&nbsp;&nbsp;
                                    </span>

                                    <a
                                        href="https://www.termsfeed.com/live/3dd7716e-8aea-4c24-905c-085c25dbea18"
                                        rel="noreferrer"
                                        target="_blank"
                                        className="inline-block underline transition"
                                    >
                                        Terms & Conditions
                                    </a>
                                </p>

                                <p className="mt-4 text-sm text-neutral-800 md:order-first md:mt-0">
                                    &copy;2024 Zenith Web Solutions
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            </main>

            <Transition appear show={mobileMenuOpen} as={Fragment}>
                <Dialog
                    as="div"
                    className="relative z-50"
                    onClose={() => {
                        setMobileMenuOpen(false);
                    }}
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

                    <div className="fixed inset-0 flex w-full flex-col overflow-y-auto px-8 pt-4">
                        <div className="flex flex-row items-center pb-24">
                            <div className="flex grow flex-row items-center outline-0">
                                <Bird className="text-white" />

                                <h1 className="ml-2 text-2xl font-medium tracking-tighter text-white">
                                    Zenith Web Solutions
                                </h1>
                            </div>

                            <div className="flex flex-row items-center space-x-6">
                                <button
                                    onClick={() => {
                                        setMobileMenuOpen(false);
                                    }}
                                    className="text-sm font-light tracking-tighter text-white outline-0"
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
                                    setMobileMenuOpen(false);

                                    setTimeout(() => {
                                        const aboutUs =
                                            document.getElementById("about-us");
                                        aboutUs?.scrollIntoView({
                                            behavior: "smooth",
                                            block: "start",
                                        });
                                    }, 500);
                                }}
                                className="text-left text-4xl font-thin tracking-tighter text-white outline-0 md:text-7xl"
                            >
                                About Us
                            </motion.button>

                            <motion.button
                                key="solutions-menu-item"
                                variants={mobileMenuAnimationItem}
                                onClick={() => {
                                    setMobileMenuOpen(false);
                                    setTimeout(() => {
                                        const solutions =
                                            document.getElementById(
                                                "solutions",
                                            );
                                        solutions?.scrollIntoView({
                                            behavior: "smooth",
                                            block: "start",
                                        });
                                    }, 500);
                                }}
                                className="text-left text-4xl font-thin tracking-tighter text-white outline-0 md:text-7xl"
                            >
                                Our Solutions
                            </motion.button>

                            <motion.a
                                href="https://calendly.com/hello-azs/online-consultation"
                                rel="noreferrer"
                                target="_blank"
                                key="book-consultation-menu-item"
                                variants={mobileMenuAnimationItem}
                                className="text-left text-4xl font-thin tracking-tighter text-white outline-0 md:text-7xl"
                            >
                                Book Consultation
                            </motion.a>
                        </motion.div>

                        <motion.div
                            key="menu-container"
                            variants={mobileMenuAnimationContainer}
                            initial="hidden"
                            animate="visible"
                            className="flex w-full grow flex-row items-end justify-center space-x-6 pb-8"
                        >
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
    );
}
