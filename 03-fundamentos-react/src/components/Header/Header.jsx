import React, { useContext } from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import Button from "../Button/Button.jsx"
import { ThemeContext } from "../../context/ThemeContext/ThemeContext.jsx"

const Title = styled.h1`
    color: #637BF3;
`

const Div = styled.div`
    background-color: #393939;

`

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