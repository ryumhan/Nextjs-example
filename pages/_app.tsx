import { AppProps } from "next/app";
import NavBar from "../components/NavBar";

import '../styles/globals.css'

export default function App({Component, pageProps}:AppProps):React.ReactElement{
    return <><NavBar/><Component {...pageProps}/>
    <style jsx global>
        {`
            nav {
                background-color: tomato;
            }
            a {
                text-decoration: none;
                color : yellow;
            }
            .active {
                color: white
            }
        `}
    </style>
    </>
}