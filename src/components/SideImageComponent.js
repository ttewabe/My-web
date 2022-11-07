import React from "react";
import styled from "styled-components";


const SideImageContainer = styled.div`
  max-width: 55%;
  
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  position: relative;
  background: #040720;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 15% 100%);
  border-top-right-radius: 26px;
  border-bottom-right-radius: 26px;
`;

const Image = styled.div`
  width: auto;
  height: 10em;
  img {
    width: 97%;
    height: 100%;
  }
`;

export  function SideImage(props) {
  return (
    <SideImageContainer>
      <Image>
        <img src={"../../assets/images/10.jpeg"} />
      </Image>
    </SideImageContainer>
  );
}