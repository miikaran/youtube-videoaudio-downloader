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

                <ul class="flex items-center gap-20 text-lg">
                    <li>
                    <a class="text-white transition  hover:text-white/75" href="/">
                        ABOUT
                    </a>
                    </li>

                    <li>
                    <a class="text-white transition hover:text-white/75" href="/">
                        CONTRIBUTE HERE 
                    </a>
                    </li>

                    <li>
                    <a class="text-white transition shadow-white hover:text-white/75" href="/">
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