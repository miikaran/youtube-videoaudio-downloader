import {useState, useEffect} from 'react'


export default function Alert(){

    const [show, setshow] = useState(true);
    const [counter, setcounter] = useState(10);

    const closeAlert = () =>{
        setshow(false)
    }

    // SIMPLE COUNTDOWN TIMER // 
    useEffect(() => {

        const timer = counter > 0 && setInterval(() => setcounter(counter - 1), 1000);

        if(counter == 0){
            setshow(false);
        }

        return () => clearInterval(timer); 
         
      }, [counter]);

    return (

        <div class="fixed inset-x-0 bottom-0 px-4 pb-3 flex justify-end alert">

        {show ? (

            <div class="relative px-4 rounded-sm max-w-screen-md py-3 text-gray-700 bg-yellow-200 transition duration-300 hover:bg-gray-700 hover:text-gray-200 border-2 border-gray-800 rounded-sm pr-14">
                <p class="text-lg font-medium text-left sm:text-center">
                😊<a href="https://github.com/miikaran/youtube-videoaudio-downloader"><u class="italic hover:text-gray-300">Get the entire project from here. It's free!</u></a>
                <br />
                Closing in.. <span class="text-2xl">{counter}</span>
                </p>

                <button
                onClick={closeAlert}
                aria-label="Close"
                class="absolute p-1 transition -translate-y-1/2 rounded-lg top-1/2 right-4 bg-black/10 hover:bg-black/20"
                >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="w-5 h-5"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                >
                    <path
                    fillRule="evenodd"
                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                    clipRule="evenodd"
                    />
                </svg>
                </button>
            </div>
            ): null}
        </div>

    )
}
