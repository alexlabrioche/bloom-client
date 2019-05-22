import React from "react";
import styled from "styled-components";
import Global from "../Global";

const Container = styled.footer`
  position: fixed;
  left: 0;
  bottom: 0;
  right: 0;
  font-family: ${Global.font.title};
  font-size: ${Global.font.size.caption};
  border-bottom: solid 4px ${Global.color.accent};
  padding-left: 10px;
  padding-bottom: 5px;
`;

export default function Footer() {
  return (
    <Container>
      &copy; {new Date().getFullYear()} Sabir, Mamadou, Vianney et Alex
    </Container>
  );
}
