import React from "react";
import styled from "styled-components";

const ChatboxWrapper = styled.div`
  position: fixed;
  bottom: 100px;
  right: 64px;
  width: 320px;
  max-width: 90vw;
  background: #232946;
  color: #fff;
  border-radius: 16px;
  box-shadow: 0 8px 32px rgba(0,0,0,0.25);
  z-index: 10001;
  padding: 0;
  overflow: hidden;
  animation: fadeIn 0.3s;
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(40px);}
    to { opacity: 1; transform: translateY(0);}
  }
`;

const ChatboxHeader = styled.div`
  background: linear-gradient(135deg, #61dafb, #956afa);
  padding: 1rem;
  font-weight: bold;
  font-size: 1.1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const CloseBtn = styled.button`
  background: transparent;
  border: none;
  color: #fff;
  font-size: 1.2rem;
  cursor: pointer;
`;

const ChatboxBody = styled.div`
  padding: 1rem;
  min-height: 120px;
`;

const Chatbox: React.FC<{ onClose: () => void }> = ({ onClose }) => (
  <ChatboxWrapper>
    <ChatboxHeader>
      Chatbot
      <CloseBtn onClick={onClose} aria-label="Close chatbox">&times;</CloseBtn>
    </ChatboxHeader>
    <ChatboxBody>
      <p>Hello! How can I help you?</p>
      {/* Add chat UI here */}
    </ChatboxBody>
  </ChatboxWrapper>
);

export default Chatbox;