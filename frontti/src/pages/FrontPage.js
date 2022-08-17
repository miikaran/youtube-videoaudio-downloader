import React from 'react';
import { useState } from 'react'


export default function FrontPage(){

    const [userSearch, setuserSearch] = useState('')
    const [videoThumbnail, setvideoThumbnail] = useState([])
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



    
    const loadMore = () => {

        resultAmount += 10;
        fetchYoutubeData();
        
    }



    /*const fetchServerData = async() => {

        const response = await fetch(url)
        const data = await response.json()
        console.log(data.result.info)
        setvideoThumbnail(data.result.info)
    }*/


    const sendDataToAPI = async () => {
       
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
                })  
            })
        }      
        catch(err){
            console.log(err)
        }

        /*fetchData();*/
    }





    return(
        <div>
            <div class="mt-20 p-14 max-w-7xl mx-auto bg-gray-300 rounded shadow-lg flex items-center">
                <div class="mx-5">
                    <div class="text-4xl font-bold text-center text-black">DOWNLOAD VIDEOS BY NAME OR URL:</div>
                        <div class="max-w-xl mx-auto mt-8">
                            <form action="#" class="sm:gap-4 sm:flex">
                    
                            <div class="sm:flex-1">

                                <input
                                    onChange ={event => setuserSearch(event.target.value)} 
                                    type="text"
                                    placeholder="https://www.youtube.com/watch?v=1etY7PkIusI"
                                    class="w-full p-3 text-gray-700 transition border-2 bg-white border-gray-200 rounded-md shadow-sm focus:ring focus:outline-none focus:ring-yellow-400 focus:border-white"
                                />
                                
                            </div>

                            <button
                            
                                onClick={sendDataToAPI}
                                type="submit"
                                class="flex items-center justify-center w-full px-5 py-3 mt-4 text-white transition rounded-md bg-rose-600 sm:mt-0 sm:w-auto group focus:outline-none focus:ring focus:ring-yellow-400"
                                >
                                <span class="text-sm font-medium"> SEARCH </span>
                            </button>

                            <button
                            onClick={fetchYoutubeData}
                            type="submit"
                            class="flex items-center justify-center w-full px-5 py-3 mt-4 text-white transition rounded-md bg-rose-600 sm:mt-0 sm:w-auto group focus:outline-none focus:ring focus:ring-yellow-400"
                            >
                            <span class="text-sm font-medium"> FETCH </span>
                        </button>
                        </form>
                    </div>
                    {hasSearched ? (
                     <div class="mt-10 mx-2">
                        <div class="font-bold text-2xl flex justify-center">
                            ALL THE RESULTS
                        </div>

                        <hr class="mt-5"></hr>

                        {videoThumbnail.map(info => {
                            
                            return (
                                
                                <a href={'https://www.youtube.com/watch?v=' + info.id.videoId}>
                                    <div class="mt-10 bg-gray-200 p-5 flex">
                                        <div class="p-3">
                                            <img src={info.snippet.thumbnails.medium.url} width = "250"></img>
                                        </div>
                                        <div class="">
                                            <p class="mx-4 text-2xl font-bold">{info.snippet.channelTitle}</p>
                                            <p class="mt-1 font-bold text-lg mx-4"><span class="font-medium text-md">{info.snippet.title}</span></p>
                                            <p class="text-xs mx-4 py-2">{info.snippet.description}</p>
                                        </div>
                                    </div>    
                                </a>
                                
                            )

                        })}

                    <div class="mt-10">
                        <button onClick={loadMore} class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
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
