import React from 'react';
import Search from '../components/Search'
import {useState} from 'react'
import Navigation from '../components/Navigation'
import fp from '../assets/Frontpage 2.svg'

export default function LandingPage(){

    return(
        <div class="">
            <Navigation />
            <div class="text-left mt-40 flex items-center justify-center">
                <div class="text-gray-800">
                    <div class="font-bold">
                       <br /><span class="text-transparent text-7xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
                        <span class="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-pink-500"> One & only  open source </span>
                         <br />forbidden downloader - <br /> <span class="text-transparent bg-clip-text bg-gradient-to-l from-sky-300 to-pink-500">- coding project.</span></span> 
                    </div>
                    <div class="text-3xl text-gray-200 mt-5">
                        Download youtube videos & audios easily from here!<br />
                        <b>Select format, Enter video URL or name below & press search</b>
                    </div>
                    <Search />
                </div>
            </div>
        </div>
    )


}