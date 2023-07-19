import { Bird, Menu } from "lucide-react";

export default function Index() {
    const solutions = [
        {
            id: 0,
            title: "🤖 GPT Chatbot Integration",
            description: "Let a highly advanced Large Language Model, guide customers throughout your homepage. GPT learns the ins and outs of your workflow and can help in lead generation, booking, etc. Take a look at this site with our GPT Chatbot Integration.",
            image: "https://framerusercontent.com/images/3UvsRX2tal7Ts7r8iY108Y7FM.png?scale-down-to=4096"
        },
        {
            id: 1,
            title: "🖼️ AI Content Generation Systems",
            description: "Boost your website's visibility and drive organic traffic with our comprehensive SEO solutions. Our team of experts utilizes cutting-edge techniques and tools to optimize your website for search engines, ensuring higher rankings and better online presence.",
            image: "https://framerusercontent.com/images/TwojwVpws1RqKxAvxHAyjxy7OY.png?scale-down-to=4096"
        },
        {
            id: 2,
            title: "📈 Search Engine Optimization",
            description: "Boost your website's visibility and drive organic traffic with our comprehensive SEO solutions. Our team of experts utilizes cutting-edge techniques and tools to optimize your website for search engines, ensuring higher rankings and better online presence.",
            image: "https://framerusercontent.com/images/3UvsRX2tal7Ts7r8iY108Y7FM.png?scale-down-to=4096"
        },
        {
            id: 3,
            title: "🌐 Website Development",
            description: "Boost your website's visibility and drive organic traffic with our comprehensive SEO solutions. Our team of experts utilizes cutting-edge techniques and tools to optimize your website for search engines, ensuring higher rankings and better online presence.",
            image: "https://framerusercontent.com/images/TwojwVpws1RqKxAvxHAyjxy7OY.png?scale-down-to=4096"
        }
    ]

    return (
        <>
            <main>
                <header className="fixed top-0 left-0 right-0 md:static flex flex-row items-center px-8 py-4 bg-white/70 backdrop-blur-sm border-b-[1px] border-neutral-100">
                    <a href="/" rel="noreferrer" className="flex flex-row grow items-center">
                        <Bird />

                        <h1 className="text-left text-2xl text-neutral-800 font-medium tracking-tighter ml-2">
                            Zenith AI
                        </h1>
                    </a>

                    <div className="hidden md:flex flex-row items-center space-x-6">
                        <button onClick={() => { }} className="text-right text-md text-neutral-800 font-light tracking-tighter">
                            About Us
                        </button>

                        <button onClick={() => { }} className="text-right text-md text-neutral-800 font-light tracking-tighter">
                            Solutions
                        </button>

                        <button onClick={() => { }} className="text-right text-md text-neutral-800 font-light tracking-tighter">
                            FAQs
                        </button>

                        <a href="#" rel="noreferrer" className="text-right text-md text-white font-light bg-neutral-900 px-4 py-2 rounded-full">
                            Book Consulation
                        </a>
                    </div>

                    <div className="flex flex-row items-center md:hidden">
                        <button onClick={() => { }} className="text-right text-sm text-neutral-800 font-light tracking-tighter">
                            <Menu />
                        </button>
                    </div>

                </header>

                <div className="max-w-5xl flex flex-col items-center mx-auto px-4 md:px-6 lg:px-8 h-screen pt-32 space-y-6">
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
                            Want to increase leads and sales?
                        </p>

                        <p className="text-center text-lg text-neutral-800 font-light tracking-tighter">
                            Let us take on the heavy lifting by deploying cutting edge tech onto your workflows!
                        </p>
                    </div>

                    <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4">
                        <a href="#" rel="noreferrer" className="w-80 md:w-auto text-center text-xl text-white font-light tracking-tigher bg-neutral-900 px-6 md:px-8 py-4 rounded-full">
                            ☎️&nbsp;&nbsp;&nbsp;Book Consultation
                        </a>

                        <a href="#" rel="noreferrer" className="w-80 md:w-auto text-center text-xl text-neutral-800 font-light tracking-tigher border-2 border-neutral-950 px-6 md:px-8 py-4 rounded-full">
                            ⚡️&nbsp;&nbsp;&nbsp;View Our Solutions
                        </a>
                    </div>
                </div>

                <div className="py-24 bg-neutral-900">
                    <div className="max-w-5xl flex flex-col items-center justify-center mx-auto px-4 md:px-6 lg:px-8 pt-0 space-y-6">
                        <h1 className="text-center text-4xl md:text-5xl text-white font-medium tracking-tighter">
                            About Us
                        </h1>

                        <p className="text-center text-lg text-white font-light tracking-tighter">
                            Zenith AI looks to help small and medium sized business grow by exploring ways cutting edge tech can make your workflows stronger, better, and faster.We pride ourselves in working as close as possible with our clients guiding them from initial implementation to unimaginable  growth.Our founding principles lays in a simple law, stating we only rake in dough, once you’re rolling in it!
                        </p>
                    </div>
                </div>

                <div className="py-24">
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
                                            <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-16 py-24">
                                                <img src={solution.image} className="h-6/6 ml-auto" />

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

                                                <img src={solution.image} className="h-6/6 ml-auto" />
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
                            Boost your website's visibility and drive organic traffic with our comprehensive SEO solutions. Our team of experts utilizes cutting-edge techniques and tools to optimize your website for search engines, ensuring higher rankings and better online presence.
                        </p>

                        <a
                            href="#"
                            rel="noreferrer"
                            className="w-80 text-center text-xl text-white font-light tracking-tighter bg-neutral-950 bg-opacity-50 backdrop-blur-2xl px-6 py-4 rounded-full"
                        >
                            👋&nbsp;&nbsp;&nbsp;Let's Talk Today
                        </a>
                    </div>
                </div>


            </main>
        </>
    )
}