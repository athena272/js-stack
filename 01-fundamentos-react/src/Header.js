import React from "react"


export function Header(props) {
    return (
        <React.Fragment>
            <h1>{props.title}</h1>
            {props.children} 
        </React.Fragment>
    )
}