import React from "react";

function ChoiceCard({ gameItem, handleGameItemChange }) {
  const { url, name } = gameItem;
  const handleClick = () => {
    handleGameItemChange(gameItem);
  };
  return (
    <img
      onClick={handleClick}
      className="choice"
      src={url}
      alt={name}
    />
  );
}

export default ChoiceCard;
