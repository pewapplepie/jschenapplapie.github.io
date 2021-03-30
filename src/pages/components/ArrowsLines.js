import styled, { keyframes } from "styled-components";
import React, { useState } from "react";
const ArrowAnim = styled.div`
  width: auto;
  height: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Arrow = styled.div`
  width: 5px;
  height: 5px;
  border: 2.5px solid;
  border-color: black transparent transparent black;
  transform: ${(props) => (props.rotate ? `rotate(-45deg)` : `rotate(135deg)`)};
`;
const ArrowSliding = styled.div`
  position: absolute;
  -webkit-animation: ${(props) => slideEffect(props)} 4s linear infinite;
  animation: ${(props) => slideEffect(props)} 4s linear infinite;
`;
const ArrowSlidingdelay1 = styled(ArrowSliding)`
  -webkit-animation-delay: 1s;
  animation-delay: 1s;
`;
const ArrowSlidingdelay2 = styled(ArrowSliding)`
  -webkit-animation-delay: 2s;
  animation-delay: 2s;
`;
const ArrowSlidingdelay3 = styled(ArrowSliding)`
  -webkit-animation-delay: 3s;
  animation-delay: 3s;
`;
function slideEffect(props) {
  const isrotate = props.rotate;
  if (isrotate) {
    return keyframes`
    0% { opacity:0; transform: translateX(15mm); }  
    20% { opacity:1; transform: translateX(9mm); } 
    80% { opacity:1; transform: translateX(-9mm); }  
    100% { opacity:0; transform: translateX(-15mm); } 
`;
  }
  return keyframes`
  0% { opacity:0; transform: translateX(-15mm); }  
  20% { opacity:1; transform: translateX(-9mm); } 
  80% { opacity:1; transform: translateX(9mm); }  
  100% { opacity:0; transform: translateX(15mm); } 
`;
}

function ArrowLines({ rotate }) {
  return (
    <ArrowAnim>
      <ArrowSliding rotate={rotate}>
        <Arrow rotate={rotate} />
      </ArrowSliding>
      <ArrowSlidingdelay1 rotate={rotate}>
        <Arrow rotate={rotate} />
      </ArrowSlidingdelay1>
      <ArrowSlidingdelay2 rotate={rotate}>
        <Arrow rotate={rotate} />
      </ArrowSlidingdelay2>
      <ArrowSlidingdelay3 rotate={rotate}>
        <Arrow rotate={rotate} />
      </ArrowSlidingdelay3>
    </ArrowAnim>
  );
}
export default ArrowLines;
