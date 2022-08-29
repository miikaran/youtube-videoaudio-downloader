import ReactSwitch from 'react-switch'
import { useState } from "react";

export default function Navigation(props){

    const [navbar, setNavbar] = useState(false);

    return(

        <nav className="w-full bg-white shadow navbg">
            <div className="justify-between px-4 mx-auto lg:max-w-7xl md:items-center md:flex md:px-10">
                <div>
                    <div className="flex items-center justify-between py-3 md:py-5 md:block">
                        <a class="block font-bold text-2xl logo about" href="/">
                            forbidden<span class="text-yellow-600">.MP4</span>
                        </a>
                        <div className="md:hidden">
                            <button
                                className="p-2 text-gray-700 rounded-md outline-none focus:border-gray-400 focus:border"
                                onClick={() => setNavbar(!navbar)}
                            >
                                {navbar ? (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        viewBox="0 0 20 20"
                                        fill="currentColor"
                                    >
                                        <path
                                            fillRule="evenodd"
                                            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                            clipRule="evenodd"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="w-6 h-6"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        strokeWidth={2}
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <div>
                    <div
                        className={`flex-1 justify-self-center pb-3 mt-8 md:block md:pb-0 md:mt-0 ${
                            navbar ? "block" : "hidden"
                        }`}
                    >
                        <ul className="items-center justify-center font-medium text-lg gap-14 space-y-8 md:flex md:space-x-10 md:space-y-0">
                        <li>
                        <a class="text-gray-700 transition about hover:text-gray-400" href="#About">
                            ABOUT
                        </a>
                        </li>

                        <li>
                        <a class="text-gray-700 transition about hover:text-gray-400" href="https://github.com/miikaran/youtube-videoaudio-downloader">
                            SOURCE <b class="text-yellow-500">//</b> CONTRIBUTE
                        </a>
                        </li>    

                        <li>
                        <a class="text-gray-700 transition about hover:text-gray-400" href="#FAQ">
                            FAQ
                        </a>
                        </li>  

                        <li>
                            <ReactSwitch 
                                onChange={props.changeMode} 
                                checked={props.mode === "dark"}
                                handleDiameter={28}
                                offColor="#DAA520"
                                onColor="#fff"
                                offHandleColor="#fff"
                                onHandleColor="#023456"
                                height={40}
                                width={70}
                                borderRadius={3}
                                activeBoxShadow="0px 0px 1px 2px #fffc35"
                                uncheckedIcon={
                                <div
                                    style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: "100%",
                                    fontSize: 15,
                                    color: "white",
                                    paddingRight: 2
                                    }}
                                >
                                    OFF
                                </div>
                                }
                                uncheckedHandleIcon={
                                <div
                                    style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: "100%",
                                    fontSize: 20
                                    }}
                                >
                                    🌚
                                </div>
                                }
                                checkedIcon={
                                    <div
                                        style={{
                                        display: "flex",
                                        justifyContent: "center",
                                        alignItems: "center",
                                        height: "100%",
                                        fontSize: 15,
                                        color: "dark",
                                        paddingRight: 2
                                        }}
                                    >
                                        ON
                                    </div>
                                    }
                                checkedHandleIcon={
                                <div
                                    style={{
                                    display: "flex",
                                    justifyContent: "center",
                                    alignItems: "center",
                                    height: "100%",
                                    fontSize: 18
                                    }}
                                >
                                    🌕
                                </div>
                                }
                            />   
                        </li>       
                        </ul>
                    </div>
                </div>
            </div>
    </nav>
    )
}