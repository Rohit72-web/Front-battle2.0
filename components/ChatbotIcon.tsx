import React from "react";
import styled from "styled-components";

const ChatbotButton = styled.button`
  position: fixed;
  bottom: 32px;
  right: 64px;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  background: linear-gradient(135deg, #61dafb, #956afa);
  border: none;
  box-shadow: 0 4px 16px rgba(0,0,0,0.18);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  z-index: 10000;
  transition: box-shadow 0.2s;
  &:hover {
    box-shadow: 0 8px 24px rgba(0,0,0,0.28);
    background: linear-gradient(135deg, #956afa, #61dafb);
  }
`;

const ChatbotSVG = styled.svg`
  width: 28px;
  height: 28px;
  fill: #fff;
`;

interface ChatbotIconProps {
  onClick: () => void;
}

const ChatbotIcon: React.FC<ChatbotIconProps> = ({ onClick }) => (
  <ChatbotButton aria-label="Open chatbot" onClick={onClick}>
    <ChatbotSVG viewBox="0 0 24 24">
      <path d="M2 21l1.65-4.77A8.94 8.94 0 0 1 3 12C3 6.48 7.92 2 13 2s10 4.48 10 10-4.92 10-10 10a9.93 9.93 0 0 1-4.77-1.65L2 21z"/>
      <circle cx="8.5" cy="12" r="1.5"/>
      <circle cx="13" cy="12" r="1.5"/>
      <circle cx="17.5" cy="12" r="1.5"/>
    </ChatbotSVG>
  </ChatbotButton>
);

export default ChatbotIcon;