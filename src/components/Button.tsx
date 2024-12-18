import React from 'react';

interface ButtonProps {
    text: string;
    onClick?: () => void;
    variant?: 'primary' | 'outline';
}

const Button: React.FC<ButtonProps> = ({ text, onClick, variant = 'primary' }) => {
    const styles =
        variant === 'primary'
            ? { backgroundColor: '#2c8e45', color: '#fff' }
            : { border: '2px solid #2c8e45', color: '#2c8e45', background: 'transparent' };

    return (
        <button style={{ padding: '10px 15px', borderRadius: '5px', cursor: 'pointer', ...styles }} onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;
