import React, { useState, useContext } from "react";
import { GoogleGenerativeAI } from "@google/generative-ai";
import ChatWindow from "./ChatWindow";
import ChatInput from "./ChatInput";
import { ChatContext } from './ChatContext';

const apiKey = process.env.REACT_APP_GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-pro", //Corrected model name
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

function Chatbot() {
    const { setChatMessages } = useContext(ChatContext);
    const [messages, setMessages] = useState([]);
    
    const sendMessage = async (userInput) => {
      if (!userInput.trim()) return;
        
      setMessages((prevMessages) => [
        ...prevMessages,
        { sender: "user", text: userInput },
      ]);
    
      try {
        console.log("Starting chat session...");
  
        //  Map chat history to ensure correct structure
        const chatHistory = messages.map((msg) => ({
          role: msg.sender === "user" ? "user" : "bot",
          parts: [msg.text],
        }));
  
        // Log the chat history for debugging
        console.log("Chat History:", chatHistory);
  
        // Start the chat session with the properly structured history
        const chatSession = model.startChat({
          generationConfig,
          history: chatHistory,
        });
  
        // Send the user input to the API
        console.log("Sending user input:", userInput);
        const result = await chatSession.sendMessage(userInput);
  
        // Limit the output text
        const maxOutputLength = 200; // Caps text output
        let botResponse = result.response.text();
  
       /* if (botResponse.length > maxOutputLength) {
          botResponse = botResponse.substring(0, maxOutputLength) + "..."; // Truncate and add ellipsis
        } */
  
        console.log("Received response:", result.response.text());
        setMessages((prevMessages) => {
          const updatedMessages = [
              ...prevMessages,
              {
                  sender: "bot",
                  text: botResponse.substring(0, maxOutputLength) + "...", // Truncated text for the chat feed
                  fullMessage: result.response.text(), // Save the full response
                  link: "/messaging",
                  linkText: " ... Open messaging page",
              },
          ];
          setChatMessages(updatedMessages);
          return updatedMessages;
      });
      } catch (error) {
        console.error("Error Communicating with Tune into Therapy:", error);
  
        // Add an error message to the chat
        setMessages((prevMessages) => [
          ...prevMessages,
          { sender: "bot", text: "Sorry, something went wrong." },
        ]);
      }
    };
  
    return (
      <div className="chatbot">
        <ChatWindow messages={messages} />
        <ChatInput onSendMessage={sendMessage} />
      </div>
    );
  }
  
  export default Chatbot;


