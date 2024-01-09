import React, { useContext } from "react"
import PropTypes from "prop-types"
import Button from "../Button/Button.jsx"
import { ThemeContext } from "../../context/ThemeContext/ThemeContext.jsx"
import { Title, Div } from "../Title/styles.js"

const Header = ({ title, children }) => {
    const { onToggleTheme } = useContext(ThemeContext)

    return (
        <Div>
            <Title>
                {title}
            </Title>
            {children}
            <Button onClick={onToggleTheme}>
                Change Theme
            </Button>
        </Div>
    )
}

Header.propTypes = {
    title: PropTypes.string,
    children: PropTypes.node
}

Header.defaultProps = {
    title: `🔥🔥🔥 JS Blog 🔥🔥🔥`
}


export default Header