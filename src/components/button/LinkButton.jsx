import React from "react";
import style from "./LinkButton.module.css";
import { useNavigate } from "react-router-dom";

const LinkButton = ({ link, text, isBlank = false }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (isBlank) {
      window.open(link, "_blank", "noopener,noreferrer");
    } else {
      navigate(link);
    }
  };

  return (
    <button className={style.button} onClick={handleClick}>
      {text}
    </button>
  );
};

export default LinkButton;