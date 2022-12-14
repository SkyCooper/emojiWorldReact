import React from "react";

const Card = ({ item }) => {
  const { char, group, name, category } = item;

  return (
    <div className="container">
      <p className="emoji-img">{char}</p>
      <p className="emoji-name">{name}</p>
      <br />
      <p className="emoji-category"> Category:
        <br />
        {category}
      </p>
      <p className="emoji-group">
        Emoji Groups⬇️
        <br />
        {group}
      </p>
    </div>
  );
};

export default Card;
