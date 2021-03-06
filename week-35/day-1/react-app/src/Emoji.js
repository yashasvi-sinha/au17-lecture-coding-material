import React from "react";

export default function Emoji() {
  const [emojis, setEmojis] = React.useState([
    {
      id: 1,
      emoji: "ð"
    },
    {
      id: 2,
      emoji: "ð"
    },
    {
      id: 3,
      emoji: "ðĪŠ"
    },
    {
      id: 4,
      emoji: "ðĪ"
    }
  ]);
  const deleteEmoji = emojiId => {
    const updatedEmojis = emojis.filter(emoji => emoji.id !== emojiId);
    setEmojis(updatedEmojis);
  };

  return (
    <div>
      <h1>Rate these emojis!</h1>
      {emojis.map((emojiObj, i) => (
        <li key={emojiObj.id} className="emoji-item">
          {emojiObj.emoji}
          <select>
            <option>Bad</option>
            <option>Okay</option>
            <option>Very good</option>
          </select>
          <button onClick={() => deleteEmoji(emojiObj.id)}>Delete</button>
        </li>
      ))}
    </div>
  );
}