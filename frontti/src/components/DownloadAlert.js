import {useState} from 'react'

export default function DownloadAlert(){

    const [show, setshow] = useState(true);

    const closeDownloadAlert = () =>{
        setshow(false)
    }

    return(
        <section class="rounded-md">

            {show ? (

                <div class="">

                </div>


            ): null}
        </section>

    )

}