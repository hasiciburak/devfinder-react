import styled from "styled-components";

export const PrimaryButton = styled.button`
  background-color: ${(props) => props.theme.colors.skyBlue};
  color: white;
  font-size: ${(props) => props.theme.fontSizes.h3};
  font-weight: bold;
  border: none;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 12.5px 24px;
  border-radius: 10px;
  height: auto;
  cursor: pointer;
  &:hover {
    background-color: #60abff;
  }
`;
