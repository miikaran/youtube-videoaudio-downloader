import logo from '../assets/Frontpage 1.svg'

export default function Navigation(){

    return(

        <header class="">
        <div class="max-w-screen-xl px-4 mx-auto sm:px-6 lg:px-8 mt-4">
            <div class="flex items-center justify-between h-20">
            <div class="md:flex md:items-center md:gap-12">
                <a class="block mt-12" href="/">
                    <img src={logo} width="100"></img>
                </a>
            </div>
            <div class="hidden md:block">
                <nav aria-labelledby="header-navigation">
                <h2 class="sr-only" id="header-navigation">Header navigation</h2>

                <ul class="flex items-center gap-20 text-lg font-medium">
                    <li>
                    <a class="text-white transition  hover:text-white/75" href="/">
                        ABOUT
                    </a>
                    </li>

                    <li>
                    <a class="text-white transition hover:text-white/75" href="/">
                        SOURCE <b class="text-teal-300">//</b> CONTRIBUTE
                    </a>

            
                    </li>

                    <li>
                    <a class="text-gray-200 font-bold transition border border-pink-500 px-10 py-2 hover:bg-gray-200 hover:text-gray-800 hover:border-gray-100" href="/">
                        CONTACT                    
                    </a>
                    </li>
                </ul>
                </nav>
            </div>
            </div>
        </div>
        </header>

    )
}