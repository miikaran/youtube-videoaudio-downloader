import React from 'react';
import Search from '../components/Search'
import {useState} from 'react'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import Alert from '../components/Alert'


export default function LandingPage(){

    const [showAlert, setshowAlert] = useState(true);

    const closeAlert = (e) => {

        if(e.target.id == "alert"){
            setshowAlert(false)
        }
    }

    return(

        <div class="">
            <Navigation />
            <div class="text-left mt-32 mr-24 flex items-center justify-center">
                <div class="text-gray-800">
                    <div class="font-bold">
                       <br />
                        <span class="text-transparent text-7xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                        <span class="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-pink-500"> One & only  open source </span>
                         <br />forbidden downloader - <br /> <span class="text-transparent bg-clip-text bg-gradient-to-l from-sky-300 to-pink-500">- coding project.</span></span> 
                    </div>
                    <div class="text-3xl text-gray-200 mt-8">
                        Download youtube videos & audios easily from here!<br />
                        <b>Select format, Enter video URL or name below & press search</b>
                    </div>
                    <Search />
                    <Alert />
                </div>
            </div>


            <div class="text-white flex items-center justify-center mr-14">
                <p class="max-w-4xl mt-12 text-gray-500 text-lg">
                    <p class="font-bold text-4xl py-5 text-gray-100">What's the forbidden-mp3?</p>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    when an unknown printer took a galley of type and scrambled it to make a type specimen.
                    <br /><br />
                    <p class="font-bold text-2xl py-2 text-gray-100">How to use it?</p>
                    <hr class="mt-2 py-2 w-14"></hr>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                    ly dummy text of the printing and typesetting industry.
                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
        
                    <div class="space-y-8 mt-14">
                        <div class="text-4xl font-bold text-gray-300 py-5">POPULAR QUESTIONS -</div>
                        <details class="group" open>
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
                            class="flex items-center justify-center p-5 cursor-pointer border-2 border-indigo-300"
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
                    </div>

                    <div>
                        <p>
                        <p class="font-bold text-4xl py-5 mt-20 text-gray-100">How to contribute to this project?</p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        when an unknown printer took a galley of type and scrambled it to make a type specimen.
                        </p>
                    </div>
                </p>
            </div>
            <Footer />
        </div>
    )


}