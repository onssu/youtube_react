import React from "react";
import styled from "styled-components";

interface Props {
  text: string;
}

const Header: React.FC<Props> = ({ text }) => {
  return (
    <Container>
      <Text isWhite={true}>{text}</Text>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 48px;
  position: fixed;
  top: 0;
  left: 0;
  background: red;
  z-index: 1000;
`;

const Text = styled.p<any>`
  color: ${(props: any) => (props.isWhite ? "#fff" : "#000")};
`;

export default Header;
