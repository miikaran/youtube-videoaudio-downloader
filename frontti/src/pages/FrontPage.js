import React from 'react';
import { useState } from 'react'


export default function FrontPage(){

    const [userSearch, setuserSearch] = useState('')
    const [videoThumbnail, setvideoThumbnail] = useState('')
    const [search, setSearch] = useState('')
    const [errors, setErrors] = useState('')
    const port = 4000


    //API ENDPOINT
    const url = `http://localhost:${port}/VIDEOS/`

    const fetchData = async() => {

        const response = await fetch(url)
        const data = await response.json()
        console.log(data.result.info)
        setvideoThumbnail(data.result.info)
    }


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

        fetchData();
    }





    return(
        <div>
            <div class="mt-72 p-14 max-w-2xl mx-auto bg-gray-300 rounded shadow-lg flex items-center">
                <div class="mx-5">
                    <div class="text-4xl font-bold text-center text-black">ENTER THE VIDEO URL HERE:</div>
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
                            
                            type="submit"
                            class="flex items-center justify-center w-full px-5 py-3 mt-4 text-white transition rounded-md bg-rose-600 sm:mt-0 sm:w-auto group focus:outline-none focus:ring focus:ring-yellow-400"
                            >
                            <span class="text-sm font-medium"> FETCH </span>
                        </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
