import React from 'react';
import { useState } from 'react'


export default function Search(){

    const [userSearch, setuserSearch] = useState('')
    const [videoThumbnail, setvideoThumbnail] = useState([])
    const [videoURL, setvideoURL] = useState('');
    const [videoFormat, setvideoFormat] = useState('');
    const [hasSearched, sethasSearched] = useState(false)
    const [search, setSearch] = useState('')
    const [errors, setErrors] = useState('')

    let resultAmount = 10;
    const port = 4000
    const youtubeAPIKey = ""

    //SERVERSIDE API ENDPOINT
    const url = `http://localhost:${port}/VIDEOS/`

    //YOUTUBE DATA API
    const youtubeURL = `https://www.googleapis.com/youtube/v3/search?key=${youtubeAPIKey}&type=video&part=snippet&maxResults=${resultAmount}&q=${userSearch}`




    const fetchYoutubeData = async () => {

        const response = await fetch(youtubeURL)
        const data = await response.json()
        console.log(data)

        sethasSearched(true)
        setvideoThumbnail(data.items)
    }



    
    /*const loadMore = async () => {

        resultAmount += 10;
        await fetchYoutubeData();
        console.log("moinfeniinfe")
        
    }*/

    

    const fetchServerData = async() => {

        const response = await fetch(url)
        const data = await response.json()
        console.log(data.result.info)
        setvideoThumbnail(data.result.info)
    }


    const sendDataToServer = async () => {
       
        setvideoURL("https://www.youtube.com/watch?v=AcpcEdL1Ho0")
        setvideoFormat("mp3")
        setSearch("helou")
        console.log(userSearch)
    
        try{

            const response = await fetch(`${url}`, {

                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    search,
                    userSearch,
                    videoURL,
                    videoFormat,
                })  
            })
        }      
        catch(err){
            console.log(err)
        }

        fetchServerData();
    }


    return(

        <div>
            <div class="py-5 rounded">
                <div class="">
                        <div class="max-w-xl">
                            <form action="#" class="sm:gap-4">
                    
                            <div class="sm:flex-1">

                                <div class="flex">

                                    <input
                                        onChange ={event => setuserSearch(event.target.value)} 
                                        type="text"
                                        placeholder="ENTER URL OR NAME HERE"
                                        class="w-full p-3 text-gray-900 transition border-2 bg-white rounded-sm shadow-sm focus:ring focus:outline-none focus:ring-yellow-400 focus:border-white"
                                    /> 

                                    <select name="type" id="type" class="py-2 px-8 font-bold border-2" onChange ={event => setvideoFormat(event.target.value)}>
                                        <option value="mp3">MP3</option>
                                        <option value="mp4">MP4</option>
                                    </select>  

                                </div>
                                                     
                            </div>

                            <div class="sm:flex gap-4 mt-5 mr-5">

                                <button                             
                                    onClick={sendDataToServer}
                                    type="submit"
                                    class="flex items-center justify-center w-full px-12 py-3 mt-4 text-white transition bg-pink-600 sm:mt-0 sm:w-auto group focus:outline-none focus:ring focus:ring-yellow-400"
                                    >
                                    <span class="text-sm font-medium"> SEARCH </span>
                                </button>

                                <button
                                onClick={fetchYoutubeData}
                                type="submit"
                                class="flex items-center justify-center w-full px-12 py-3 mt-4 text-white transition bg-pink-600  sm:mt-0 sm:w-auto group focus:outline-none focus:ring focus:ring-yellow-400"
                                >
                                <span class="text-sm font-medium"> FETCH </span>
                                </button>

                            </div>
                        </form>
                    </div>
                    
                    {hasSearched ? (

                     <div class="grid grid-cols-1 gap-3 mt-52 md:grid-cols-2 lg:grid-cols-3">

                        {videoThumbnail.map(info => {

                            return (

                                <a class="relative block p-8 overflow-hidden bg-gray-200 border border-gray-100" href={'https://www.youtube.com/watch?v=' + info.id.videoId}>
                                <span class="absolute inset-x-0 bottom-0 h-1  bg-gradient-to-r from-green-500 via-blue-700 to-purple-600"></span>

                                <div class="justify-between sm:flex">

                                    <div class="flex-shrink-0 hidden ml-5 sm:block">
                                    <img class="object-cover w-72 h-32 shadow-lg" src={info.snippet.thumbnails.medium.url} alt="thumbnail"/>
                                    </div>

                                </div>

                                <div class="mt-5 mx-1">
                                    <p class="mx-4 text-2xl font-bold">{info.snippet.channelTitle}</p>
                                    <p class="mt-1 font-bold text-lg mx-4"><span class="font-medium text-md">{info.snippet.title}</span></p>
                                    <p class="text-xs mx-4 py-2">{info.snippet.description}</p>
                                    <button class="bg-indigo-500 p-2 px-5 font-bold text-white mx-4">DOWNLOAD</button>
                                </div>

                                </a>

                                
                            )

                        })}

                    <div class="mt-10">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                            LOAD MORE...
                        </button>
                    </div>
                        
                    </div>
                    ): null}

                </div>
            </div>
        </div>
    )
}
