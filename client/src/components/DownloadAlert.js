import {useState, useEffect} from 'react'

export default function DownloadAnimation(){

    const [show, setshow] = useState(true);
    const [counter, setcounter] = useState(10);

    const closeAlert = () =>{

        setTimeout(function(){
            setshow(false)
        }, 2000)
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

        <div class="z-30 fixed inset-x-0 bottom-0 pb-3 mt-10 flex justify-end download-alert">

            {show ? (

                <div class="px-10 rounded-sm py-5 text-gray-100 bg-gray-700 transition duration-300 hover:bg-gray-800 rounded-sm pr-14">
                    <p class="text-md font-medium text-left">
                    Your download has started! <br /> It might take a second depending on the size of the file.<br></br>
                    <i>Closing in... {counter}</i>
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