import React from 'react';
import style from './Button.module.css';

const Button = ({ link, text, isBlank = true }) => {

  const handleClick = () => {
    window.open(link, isBlank ? "_blank" : "self", "noopener,noreferrer");
  };

  return (
    <button className={style.button} onClick={handleClick}>
      {text}
    </button>
  );
};

export default Button;