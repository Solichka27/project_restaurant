import React from 'react';
import style from './Button.module.css';

const Button = (props)=> {

  const handleClick = () => {
    window.open(props.link, "_blank", "noopener,noreferrer");
  };

    return (
      <button className={style.button} onClick={handleClick}>
        {props.text}
      </button>
    );
};

export default Button;