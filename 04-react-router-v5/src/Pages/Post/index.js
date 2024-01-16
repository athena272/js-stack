import React from "react";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

export default function Home() {
    const params = useParams()
    
    console.log(params)

    return (
        <h1>Post page</h1>
    )
}