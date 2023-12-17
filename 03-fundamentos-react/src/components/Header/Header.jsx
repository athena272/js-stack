import React from "react"
import PropTypes from "prop-types"
import Button from "../Button/Button.jsx"

const Header = ({ title, onToggleTheme, children }) => (
    <>
        <h1>
            {title}
        </h1>
        {children}

        <Button onClick={onToggleTheme}>
            Change Theme
        </Button>
    </>
)

Header.propTypes = {
    onToggleTheme: PropTypes.func,
    title: PropTypes.string,
    children: PropTypes.node
}

Header.defaultProps = {
    title: `🔥🔥🔥 JS Blog 🔥🔥🔥`
}


export default Header