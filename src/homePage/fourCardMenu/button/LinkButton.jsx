import React from 'react';
import style from './LinkButton.module.css';

const LinkButton = ({ link, text, isBlank = true }) => {

  const handleClick = () => {
    window.open(link, isBlank ? "_blank" : "self", "noopener,noreferrer");
  };

  return (
    <button className={style.button} onClick={handleClick}>
      {text}
    </button>
  );
};

export default LinkButton;