import React from "react";
import styled, { keyframes } from "styled-components";

const progress = keyframes`
  0% { width: 0; }
  100% { width: 100%; }
`;

const LoaderWrapper = styled.div<{ visible: boolean }>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 4px;
  z-index: 9999;
  opacity: ${({ visible }) => (visible ? 1 : 0)};
  transition: opacity 0.4s;
  pointer-events: none;
`;

const Progress = styled.div`
  height: 100%;
  background: linear-gradient(90deg, #61dafb 0%, #956afa 100%);
  animation: ${progress} 1s cubic-bezier(0.4, 0, 0.2, 1) forwards;
`;

interface AnimatedLoaderProps {
  visible: boolean;
}

const AnimatedLoader: React.FC<AnimatedLoaderProps> = ({ visible }) => (
  <LoaderWrapper visible={visible}>
    {visible && <Progress />}
  </LoaderWrapper>
);

export default AnimatedLoader;