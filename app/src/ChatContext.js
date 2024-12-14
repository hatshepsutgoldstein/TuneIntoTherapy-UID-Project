import React, { createContext, useState } from 'react';

export const ChatContext = createContext();

export const ChatProvider = ({ children }) => {
  const [chatMessages, setChatMessages] = useState([]);

  return (
    <ChatContext.Provider value={{ chatMessages, setChatMessages }}>
      {children}
    </ChatContext.Provider>
  );
};