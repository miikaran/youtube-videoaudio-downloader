import React from 'react';
import { useState } from 'react'
import SearchAnimation from './SearchAnimation'
import DownloadAlert from './DownloadAlert'


export default function Search(){


    const [userSearch, setuserSearch] = useState('')
    const [videoData, setvideoData] = useState([]);
    const [videoFormat, setvideoFormat] = useState('');
    const [videoQuality, setvideoQuality] = useState('');
    const [hasSearched, sethasSearched] = useState(false);
    const [searching, setsearching]= useState(false);
    const [downloading, setdownloading] = useState(false);
    
    const port = 4000
    const url = `https://forbidden-mp4-downloader.herokuapp.com/VIDEOS/` // SERVERSIDE API ENDPOINT FOR VIDEOS //
    const url2 = `https://forbidden-mp4-downloader.herokuapp.com/download` //SERVERSIDE API ENDPOINT FOR UPLOADS & DOWNLOADS //
    //const url = `http://localhost:4000/VIDEOS/`
    //const url2 = `http://localhost:4000/download`
    let resultAmount = 5; 
    let videoID = '';
    let videoURL = '';



    /*===================================
          FETCH DATA FROM SERVER
    ===================================*/
    const fetchServerData = async() => {

        try{

            setsearching(true);
            const response = await fetch(url)
            const data = await response.json()  
            
            if(!response.ok){
                alert('Error fetching the data')
            }

            setvideoData(data.result.YOUTUBE_SEARCH.items)
            sethasSearched(true)
            setsearching(false)
            console.log(data)
        }

        catch(err){
            console.log(err)
        }
    }



  /*===================================
       SEND SEARCH DATA TO SERVER
    ===================================*/
    const searchDataToServer = async (e) => {

        if(e){
            e.preventDefault();
        }

        try{

            const response = await fetch(`${url}`, {

                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({

                    userSearch,
                    resultAmount,
                })  
            })

            if(!response.ok){
                alert('Error searching the data')
            }
        }      

        catch(err){
            console.log(err)
        }
        
        fetchServerData();
    }



    /*===================================
         LOAD MORE SEARCH RESULTS
    ===================================*/
    const loadMore =  (e) => {

        e.preventDefault();
        resultAmount += 5;
        searchDataToServer();
    }



    /*===================================
         SEND DOWNLOAD URL TO SERVER
    ===================================*/
    const downloadUrlToServer = async (id) => {

        videoID = (id)
        videoURL = (`https://www.youtube.com/watch?v=${videoID}`)

        setdownloading(true);
        const response = await fetch(`${url2}`, {

            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ 
                videoURL,    
                videoQuality,
                videoFormat,
            })  
        })
        if(!response.ok){
            alert('Error downloading')
        }
        downloadContentFile();
    }


    /*===================================
              DOWNLOAD FILE
    ===================================*/
    const downloadContentFile = () => {

        window.location.href = url2
    }


    return(

        <div class="mt-2">
            <div class="py-5">
                <div class="">
                        <div class="max-w-5xl">
                        <form class="sm:gap-4">       
                            <div class="sm:flex-1">
                                <div class="flex inputbar">

                                    <input
                                        onChange ={event => setuserSearch(event.target.value)} 
                                        placeholder="Enter video URL or name here..."
                                        class="w-full p-3 py-4 text-lg font-medium text-gray-900 transition border-2 border-gray-300 rounded-sm shadow-sm focus:ring focus:outline-none focus:ring-yellow-200 focus:border-white"
                                    /> 

                                    <select class="py-2 buttons font-bold text-center border-2 border-gray-300 focus:ring focus:outline-none focus:ring-yellow-200 focus:border-white" onChange ={event => setvideoFormat(event.target.value)}>
                                        <option value="audioandvideo">VIDEO</option>
                                        <option value="audioonly">AUDIO ONLY</option>
                                        <option value="videoonly">VIDEO ONLY</option>
                                    </select>

                                    <button                             
                                        onClick={searchDataToServer}
                                        class="herocontent searchbutton buttons w-full mx-2 px-14 py-5  mt-4 text-white rounded-sm transition bg-gray-800 hover:bg-gray-700 sm:mt-0 sm:w-auto group focus:outline-none focus:ring focus:ring-yellow-400">
                                        <span class="text-lg font-bold">SEARCH➜</span>
                                    </button>
                                </div>
            
                                { searching ? (

                                    <div class="flex justify-center mr-32 mt-14">
                                        <SearchAnimation />
                                    </div>   

                                ): null}                                            
                            </div>
                        </form>
                    </div>
                    
                    { downloading ? (

                        <DownloadAlert />

                    ): null}
        
        
                    { hasSearched ? (

                     <div class="mt-20 videos">
                                          
                        {videoData.map(info => {
                            
                            return (

                                <div class="boxes relative block p-8 py-14 overflow-hidden bg-gray-200 shadow-2xl mt-2 border-4 border-gray-300" key={info.id.videoId}>

                                <span class="absolute inset-x-0 bottom-0 h-2  bg-gradient-to-r from-green-500 via-blue-700 to-purple-600"></span>

                                <div class="justify-between sm:flex">
                                    <div class="ml-5">
                                        <img class="lg:h-50 bg-gray-900 p-1" src={info.snippet.thumbnails.medium.url} alt="thumbnail"/>
                                    </div>
                                </div>

                                <div class="mt-5 mx-1">
                                    <a class="underline" href={'https://www.youtube.com/watch?v=' + info.id.videoId}><p class="mx-4 text-2xl font-bold py-2">{info.snippet.channelTitle}</p></a>
                                    <p class="mt-1 font-bold text-lg mx-4"><span class="font-medium text-md">{info.snippet.title}</span></p>
                                    <p class="text-xs mx-4 py-2">{info.snippet.description}</p>
                                    <p class="text-sm mx-4">Published: <b>{info.snippet.publishTime.slice(0, 10)}</b></p>
                                    <p class="mx-4 mt-4 font-bold">Choose preferred quality!</p>

                                    
                                    { videoFormat === 'audioonly' ? (

                                        null

                                    ):  <select class="py-2 px-8 mx-3 font-bold border-2 quality-select" onChange ={event => setvideoQuality(event.target.value)}>
                                        <option value="highest">720p</option>
                                        <option value="lowest">360p</option>
                                        </select>}

                                    
                                    <button onClick={() => {
                                      downloadUrlToServer(info.id.videoId)
                                    }}
                                    class="bg-indigo-500 p-2 px-4 mx-2 font-bold text-white mt-5 hover:bg-indigo-700 download-button">DOWNLOAD
                                    </button>
                                </div>

                                </div>                               
                            )

                        })}

                    <div class="mt-10 flex justify-center">
                        <button class="bg-gray-700 mx-1 hover:bg-gray-800 text-white font-bold py-4 px-10" onClick={loadMore}>
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
