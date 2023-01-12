import { ScriptProps } from "next/script";

import NavBar from "./NavBar";

export default function Layout({children}:ScriptProps):React.ReactElement{
    return (
        <>
            <NavBar/>
            <div>{children}</div>
        </>
    )
}