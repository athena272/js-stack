import React, { useContext } from "react"
import PropTypes from "prop-types"
import Button from "../Button/Button.jsx"
import { ThemeContext } from "../Provider/ThemeContext.jsx"
import styles from './Header.scss'

const Header = ({ title, children }) => {
    const { onToggleTheme } = useContext(ThemeContext)

    return (
        <div className={styles.container}>
            <h1 className={styles.title}>
                {title}
            </h1>
            {children}
            <Button onClick={onToggleTheme}>
                Change Theme
            </Button>
        </div>
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