import react from "react";
import { useState } from "react";

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <div>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-slate-200 mb-3">
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <a
                            className="text-lg font-bold font-sans leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-slate-500"
                            href="#pablo"
                        >
                            Practice 1 - Listening Test
                        </a>
                        <button
                            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <i>=</i>
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center" +
                            (navbarOpen ? " flex" : " hidden")
                        }
                        id="example-navbar-danger"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                            <li className="nav-item">
                                <button class="bg-blue-100 h-12 w-32 border-blue-600 border-solid text-slate-400 font-semibold py-2 px-4 mx-4 border">
                                    Instruction
                                </button>
                            </li>
                            <li className="nav-item">
                                <button class="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full">
                                    (x) Exit
                                </button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar;