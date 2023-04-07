import React from "react"
import PropTypes from 'prop-types'


export function Header(props) {
    return (
        <React.Fragment>
            <h1>{props.title}</h1>
            {props.children} 
        </React.Fragment>
    )
}

Header.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.node
}

Header.defaultProps = {
    title: `JStack Pro Blog`,
}