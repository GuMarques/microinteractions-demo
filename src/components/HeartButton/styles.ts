import styled from "styled-components";

export const HeartContainer = styled.div`
  margin-top: 30px;
`;

export const Heart = styled.button`
  border: none;
  border-radius: 100px;
  width: 60px;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
  background-color: red;
  cursor: pointer;
`;

export const HeartImage = styled.img`
  width: 30px;
  height: 30px;
  filter: invert(99%) sepia(5%) saturate(41%) hue-rotate(180deg) brightness(123%) contrast(100%);
`;
