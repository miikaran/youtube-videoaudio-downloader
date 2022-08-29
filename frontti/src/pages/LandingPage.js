import React from 'react';
import Search from '../components/Search'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import InfoAlert from '../components/InfoAlert'
import { createContext } from 'react'
import { useState } from 'react'

export const ModeChanger = createContext(null);

export default function LandingPage(){

    const [mode, setmode] = useState("light");
    // DARK/LIGHT MODE TOGGLE //
    const changeMode = () => {
        setmode((curr) => (curr == "light" ? "dark" : "light" ))
    }

    return(

        <ModeChanger.Provider value={{mode, changeMode}}>
            <div id={mode}>
                <Navigation changeMode={changeMode} mode ={mode}  />
                <div class="py-20 flex items-center justify-center herobg">
                    <div class="text-gray-800 mt-4 hero">
                        <div class="font-bold">
                        <br />
                            <span class="text-7xl herocontent herotext tracking-tight">
                            Let's build Your content,<br /> Starting from here...</span>         
                        </div>
                        <div class="text-3xl herocontent text-gray-700 mt-8 herotext2">
                            Download youtube videos, audios and shorts fast & easily!<br />
                            <b>Select details, Enter video URL or name below & press search</b>
                        </div>
                        <InfoAlert />
                        <Search />        
                    </div>
                </div>

                <div class="text-white flex items-center justify-center ml-7 info" id="About">
                    <div class="max-w-4xl text-gray-600 mt-16 text-lg about">
                        <p class="font-bold text-4xl py-5 text-gray-700 about">What's <span class="about logo text-gray-800">forbidden<span class="logotext text-yellow-600">.MP4</span></span>?</p>
                        Forbidden.MP4 is a tool which you can use to download videos, audios & shorts straight from youtube.
                        It uses <b>Node.js</b> package called <a class="underline" href="https://www.npmjs.com/package/ytdl-core"><b>YTDL-core</b></a> to download the content. It's also open source, so feel free to contribute
                        at <a class="underline" href="https://github.com/miikaran/youtube-videoaudio-downloader"><b>Github</b></a> & fix some issues it has, or just inspect the code for fun! 😀
                        <br /><br />
                        You can give feedback here - <a class="underline text-blue-400" href="https://twitter.com/miikulitsu">Twitter</a>
                        <br /><br />
                        <p class="font-bold text-2xl py-2 text-gray-700 about">How to use it?</p>
                        <hr class="mt-2 py-2 w-14"></hr>
                        1. Select content details, <b>Video / Audio only.</b><br />
                        2. Search the content you want to download by entering it's <b>URL</b> or <b>keyword.</b><br />
                        3. Download the one you need from the list.<br />
                        4. <b>Done!</b> <br />

                        <p class="mt-3 font-medium">Your file should now start downloading!</p>
            
                        <div class="space-y-8 mt-14" id="FAQ">
                            <div class="text-4xl font-bold text-gray-700 py-5 about">FAQ -</div>
                            <details class="group">
                                <summary class="flex items-center justify-center p-5 cursor-pointer border-2 border-amber-400">
                                <h5 class="font-medium text-gray-700 about">
                                    Does the downloaders contain malware?
                                </h5>

                                <svg
                                    class="flex-shrink-0 ml-1.5 w-5 h-5 transition duration-300 group-open:-rotate-180"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                                </summary>

                                <p class="px-4 mt-4 leading-relaxed text-gray-700 about">
                                No. When you download content from here, it does not include any kinds of malware & includes only the file you wanted😀
                                </p>
                            </details>

                            <details class="group">
                                <summary
                                class="flex items-center justify-center p-5 cursor-pointer border-2 border-amber-400"
                                >
                                <h5 class="font-medium text-gray-700 about">
                                How can i use it after the download feature is removed?
                                </h5>

                                <svg
                                    class="flex-shrink-0 ml-1.5 w-5 h-5 transition duration-300 group-open:-rotate-180"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                                </summary>

                                <p class="px-4 mt-4 leading-relaxed text-gray-700 about">
                                This entire project is public at my <a class="font-bold underline" href="https://github.com/miikaran/youtube-videoaudio-downloader"> Github </a>, so you can just get the code from there & enable it by yourself!😀
                                </p>
                            </details>

                            <details class="group">
                                <summary class="flex items-center justify-center p-5 cursor-pointer border-2 border-amber-400">
                                <h5 class="font-medium text-gray-700 about">
                                    Do you have other converters?
                                </h5>

                                <svg
                                    class="flex-shrink-0 ml-1.5 w-5 h-5 transition duration-300 group-open:-rotate-180"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                
                                    strokeWidth="2"
                                    d="M19 9l-7 7-7-7"
                                    />
                                </svg>
                                </summary>

                                <p class="px-4 mt-4 leading-relaxed text-gray-700 about">
                                Not yet, but i might make more in the future.
                                </p>
                            </details>
                        </div>

                        <div>
                            <p class="font-bold text-4xl py-5 mt-20 text-gray-700 about">How to contribute to this project?</p>
                            This project is saved at my public <a class="underline font-bold" href="https://github.com/miikaran/youtube-videoaudio-downloader">GitHub</a> repository.
                            You can fork it and start thinking solutions to issues i add every now and then. Every issues has information about the case & possible options 
                            on how to fix it. Alternatively you can try to find them issues yourselves & let me know!😀
                            <br /><br />
                            <a class="bg-amber-200 sourcebutton border border-gray-400 hover:bg-amber-300 py-3 px-10 font-bold" href="https://github.com/miikaran/youtube-videoaudio-downloader">SOURCE</a>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </ModeChanger.Provider>
    )


}