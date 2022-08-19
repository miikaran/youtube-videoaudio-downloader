import React from 'react';
import Search from '../components/Search'
import {useState} from 'react'


export default function LandingPage(){

    return(
        <div class="mt-52">
            <div class="text-left">
                <div class="text-gray-800">
                    <div class="font-bold">
                       <br /><span class="text-transparent text-7xl bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600"><span class="text-transparent bg-clip-text bg-gradient-to-r from-sky-500 to-pink-500"> One & only </span> <br /> forbidden downloader</span> 
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