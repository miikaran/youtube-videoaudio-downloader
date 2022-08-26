import logo from '../assets/Frontpage 1.svg'

export default function Navigation(){

    return(

        <div class="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8">
            <div class="flex items-center justify-between h-20">
            <div class="md:flex md:items-center md:gap-12">
                <a class="block font-bold text-2xl logo" href="/">
                    forbidden<span class="text-yellow-600">.MP4</span>
                </a>
            </div>
            <div class="hidden md:block">
                <nav aria-labelledby="header-navigation">
                <h2 class="sr-only" id="header-navigation">Header navigation</h2>

                <ul class="flex items-center gap-20 text-lg font-medium">
                    <li>
                    <a class="text-gray-700 transition  hover:text-gray-400" href="#About">
                        ABOUT
                    </a>
                    </li>

                    <li>
                    <a class="text-gray-700 transition hover:text-gray-400" href="https://github.com/miikaran/youtube-videoaudio-downloader">
                        SOURCE <b class="text-yellow-500">//</b> CONTRIBUTE
                    </a>
                    </li>    

                    <li>
                    <a class="text-gray-700 transition hover:text-gray-400" href="#FAQ">
                        FAQ
                    </a>
                    </li>               
                </ul>
                </nav>
            </div>
        </div>

    </div>

    )
}