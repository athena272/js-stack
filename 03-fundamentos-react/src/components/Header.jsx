import React from "react"
import PropTypes from "prop-types"

const Header = ({ title, children }) => (
    <>
        <h1>
            {title}
        </h1>
        {children}
    </>
)

Header.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
}

Header.defaultProps = {
    title: `🔥🔥🔥 JS Blog 🔥🔥🔥`
}


export default Header