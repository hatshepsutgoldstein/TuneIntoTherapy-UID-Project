import React from "react";
import { Link, useNavigate } from 'react-router-dom';

function ChatMessage({ message }) {
    const navigate = useNavigate();

    /* const processText = (text) => {
        // Use a regular expression to find the anchor tag (<a>) and replace with the Link
        return text.replace(
          /<a href="([^"]+)">([^<]+)<\/a>/g,
          (match, href, linkText) => {
            return `<span class="message-link" data-href="${href}">${linkText}</span>`;
          }
        );
      }; */

      const handleClick = (e) => {
          const clickedElement = e.target.closest('.message-link');
          if(clickedElement){
            const href = clickedElement.getAttribute('data-href');
            navigate(href);
          }
      }
    
      if (message.link) {
        return (
            <div className={`message ${message.sender}`}>
                {message.text}
                <span className="message-link" data-href={message.link} onClick={handleClick}> {message.linkText} </span>
            </div>
        );
      }
  return (
    <div className={`message ${message.sender}`}> {message.text} 
        </div>
  );
}

export default ChatMessage;