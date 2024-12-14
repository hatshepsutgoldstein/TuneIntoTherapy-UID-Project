import React, { useState } from "react";

function ChatInput({ onSendMessage }) {
  const [userInput, setUserInput] = useState("");

  const handleInput = (e) => {
    setUserInput(e.target.value);
  };

  const sendMessage = () => {
    onSendMessage(userInput);
    setUserInput("");
  };

  return (
    <div className="input-area">
      <input
        type="text"
        value={userInput}
        onChange={handleInput}
        placeholder="Type your message here..."
      />
      <button onClick={sendMessage}>Send</button>
    </div>
  );
}

export default ChatInput;