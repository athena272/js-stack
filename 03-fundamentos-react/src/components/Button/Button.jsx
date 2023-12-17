import React from 'react';
import PropTypes from "prop-types"

const Button = ({ onClick, children, theme }) => (

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

Button.propTypes = {
    theme: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired
}

export default Button