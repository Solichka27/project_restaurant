import React from 'react';
import style from './LinkButton.module.css';

const LinkButton = ({ link, text, isBlank = true }) => {

  const handleClick = () => {
    if (isBlank) {
      window.open(link, "_blank", "noopener,noreferrer");
    } else {
      window.location.href = link;
    }
  };

  return (
    <button className={style.button} onClick={handleClick}>
      {text}
    </button>
  );
};

export default LinkButton;