import React from 'react';
import { useState } from 'react'


export default function Search(){


    const [userSearch, setuserSearch] = useState('')
    const [videoData, setvideoData] = useState([]);
    const [videoURL, setvideoURL] = useState(null);
    const [videoFormat, setvideoFormat] = useState('');
    const [videoQuality, setvideoQuality] = useState('');
    const [hasSearched, sethasSearched] = useState(false);
    const [loading, setloading]= useState(true);
    const [search, setSearch] = useState('') ;
    
    const port = 4000
    const url = `http://localhost:${port}/VIDEOS/` // SERVERSIDE API ENDPOINT //
    let resultAmount = 10; 



    // SEND NECESSARY DATA TO SERVER //
    const sendDataToServer = async () => {
       
        setvideoFormat("mp4")
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
                    resultAmount,
                })  
            })
        }      

        catch(err){
            console.log(err)
        }
        
        fetchServerData();
    }



    // FETCH DATA FROM SERVER //
    const fetchServerData = async() => {

        try{

            const response = await fetch(url)
            const data = await response.json()     
            console.log(data)
            setvideoData(data.result.YOUTUBE_SEARCH.items)
            sethasSearched(true)

        }
        catch(err){
            console.log(err)
        }
    }


    // LOAD MORE RESULTS //
    const loadMore = async () => {

        resultAmount += 10
        await sendDataToServer();
    }


    // SEND DOWNLOAD URL TO SERVER //
    const downloadUrlToServer = async (info) => {

        console.log(videoURL)

    
        try{

            const response = await fetch(`${url}`, {

                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({     
                    videoURL,
                })  
            })

        }      

        catch(err){
            console.log(err)
        }
    }




    return(

        <div class="mt-2">
            <div class="py-5 rounded">
                <div class="">
                        <div class="max-w-5xl">
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

                                    <button                             
                                        onClick={sendDataToServer}
                                        type="submit"
                                        class="w-full mx-2 px-12 py-3 mt-4 text-white transition bg-pink-600 hover:bg-pink-800 sm:mt-0 sm:w-auto group focus:outline-none focus:ring focus:ring-yellow-400"
                                        >
                                        <span class="text-md font-bold"> SEARCH </span>
                                    </button>
                                </div>                                                  
                            </div>
                        </form>
                    </div>
                    
                    {hasSearched ? (

                     <div class="mt-20">
                        <div class="text-white text-3xl text-center mr-10 font-bold py-5">Results with the word: <span class="text-4xl mx-1 text-sky-400"> {userSearch} </span></div>

                        {videoData.map(info => {
                            

                            return (

                                <a class="relative block p-8 py-14 overflow-hidden bg-gray-100 mt-2 border border-gray-100" /*href={'https://www.youtube.com/watch?v=' + info.id.videoId}*/>
                                
                                <span class="absolute inset-x-0 bottom-0 h-3  bg-gradient-to-r from-green-500 via-blue-700 to-purple-600"></span>

                                <div class="justify-between sm:flex">

                                    <div class="flex-shrink-0 hidden ml-5 sm:block">
                                    <img class="object-cover w-96 h-52 bg-gray-900 p-1 shadow-xl" src={info.snippet.thumbnails.medium.url} alt="thumbnail"/>
                                    </div>

                                </div>

                                <div class="mt-5 mx-1">
                                    <p class="mx-4 text-2xl font-bold py-2">{info.snippet.channelTitle}</p>
                                    <p class="mt-1 font-bold text-lg mx-4"><span class="font-medium text-md">{info.snippet.title}</span></p>
                                    <p class="text-xs mx-4 py-2">{info.snippet.description}</p>
                                    <button onClick={downloadUrlToServer} class="bg-indigo-500 p-2 px-5 font-bold text-white mx-4 mt-5 hover:bg-indigo-700">DOWNLOAD</button>
                                </div>

                                </a>

                                
                            )

                        })}

                    <div class="mt-10">
                        <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={loadMore}>
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
