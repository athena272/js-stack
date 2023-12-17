import React, { useContext } from 'react';
import PropTypes from "prop-types"
import { ThemeContext } from '../Provider/ThemeContext.jsx';

const Button = ({ onClick, children }) => {
    const { theme } = useContext(ThemeContext)

    return (

        <button
            onClick={onClick}
            style={{
                marginRight: 8,
                marginLeft: 8,
                backgroundColor: theme === 'light' ? '#fff' : '#000',
                color: theme === 'light' ? '#000' : '#fff'
            }}
        >
            {children}
        </button>
    )
}

Button.propTypes = {
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
}

export default Button