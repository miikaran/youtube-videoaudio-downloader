import React from 'react';
import Search from '../components/Search'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Alert from '../components/Alert'
import DownloadAlert from '../components/DownloadAlert'


export default function LandingPage(){


    return(

        <div class="">
            <Navigation />
            <div class="text-left mt-32 mr-24 flex items-center justify-center hero">
                <div class="text-gray-800">
                    <div class="font-bold">
                       <br />
                        <span class="text-transparent text-7xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                        <span class="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-pink-500"> One & only  open source </span>
                         <br />forbidden downloader - <br /> <span class="text-transparent bg-clip-text bg-gradient-to-l from-sky-300 to-pink-500">- coding project.</span></span> 
                    </div>
                    <DownloadAlert />
                    <div class="text-3xl text-gray-200 mt-8">
                        Download youtube videos & audios easily from here!<br />
                        <b>Select details, Enter video URL or name below & press search</b>
                    </div>
                    <Search />
                    <Alert />
                </div>
            </div>
   
            <div class="text-white flex items-center justify-center mr-14">
                <p class="max-w-4xl mt-12 text-gray-500 text-lg">
                    <p class="font-bold text-4xl py-5 text-gray-100">What's forbidden-mp3?</p>
                    Forbidden-mp3 is a tool which you can use to download videos & audios straight from youtube.
                    It uses <b>Node.js</b> package called <a class="underline" href="https://www.npmjs.com/package/ytdl-core"><b>YTDL-core</b></a> to download the content. It's also open source, so feel free to contribute
                    at <a class="underline" href=""><b>Github</b></a> & fix some issues it has 😀
                    <br /><br />
                    You can give feedback here - <a class="underline text-blue-400" href="https://twitter.com/miikulitsu">Twitter</a>
                    <br /><br />
                    <p class="font-bold text-2xl py-2 text-gray-100">How to use it?</p>
                    <hr class="mt-2 py-2 w-14"></hr>
                    1. Select content details, <b>MP3/MP4.</b><br />
                    2. Search the video/audio you want to download by entering it's <b>URL</b> or <b>keyword.</b><br />
                    3. Download the one you need from the list.<br />
                    4. Done! <br />

                    <p class="mt-3 font-medium">File should now pop up to your downloaded files or whatever you have it set to!</p>
        
                    <div class="space-y-8 mt-14">
                        <div class="text-4xl font-bold text-gray-300 py-5">POPULAR QUESTIONS -</div>
                        <details class="group">
                            <summary class="flex items-center justify-center p-5 cursor-pointer border-2 border-indigo-300">
                            <h5 class="font-medium text-gray-200">
                                Does the downloaders contain viruses that will destroy ur PC?
                            </h5>

                            <svg
                                class="flex-shrink-0 ml-1.5 w-5 h-5 transition duration-300 group-open:-rotate-180"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                            
                                stroke-width="2"
                                d="M19 9l-7 7-7-7"
                                />
                            </svg>
                            </summary>

                            <p class="px-4 mt-4 leading-relaxed text-gray-200">
                            no.
                            </p>
                        </details>

                        <details class="group">
                            <summary
                            class="flex items-center justify-center p-5 cursor-pointer border-2 border-indigo-400"
                            >
                            <h5 class="font-medium text-gray-200">
                            Is it legal to download videos/audios from here?
                            </h5>

                            <svg
                                class="flex-shrink-0 ml-1.5 w-5 h-5 transition duration-300 group-open:-rotate-180"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                stroke-width="2"
                                d="M19 9l-7 7-7-7"
                                />
                            </svg>
                            </summary>

                            <p class="px-4 mt-4 leading-relaxed text-gray-200">
                            yessirr.
                            </p>
                        </details>

                        <details class="group">
                            <summary class="flex items-center justify-center p-5 cursor-pointer border-2 border-indigo-500">
                            <h5 class="font-medium text-gray-200">
                                Will Google sue me if i download one video from here?
                            </h5>

                            <svg
                                class="flex-shrink-0 ml-1.5 w-5 h-5 transition duration-300 group-open:-rotate-180"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                            
                                stroke-width="2"
                                d="M19 9l-7 7-7-7"
                                />
                            </svg>
                            </summary>

                            <p class="px-4 mt-4 leading-relaxed text-gray-200">
                            yessiiiiirrr.
                            </p>
                        </details>
                    </div>

                    <div>
                        <p>
                            <p class="font-bold text-4xl py-5 mt-20 text-gray-100">How to contribute to this project?</p>
                            This project is saved at our public <a class="underline font-bold" href="">GitHub</a> repository.
                            You can fork it and start thinking solutions to issues i add every now and then. Every issues has information about the case & possible options 
                            on how to fix it. Alternatively you can try to find them issues yourselves & let us know when you're done!😀
                        </p>
                        <p class="mt-5 text-xl font-bold">How to fork & access the issues?</p>
                        <div class="mt-6">
                        <video width="875" height="500" controls >
                            <source src="" type="video/mp4"/>
                        </video>
                        </div>
                    </div>
                </p>
            </div>
            <Footer />
        </div>
    )


}