import Head from "next/head"
import React from "react";
import Seo from "../components/Seo";

export default function Home():React.ReactElement{
 
    return( 
    <div>
        <Seo title="Home"/>
        <h1 className="active">Hello</h1>
    </div>)
}