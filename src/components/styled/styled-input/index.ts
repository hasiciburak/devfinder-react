import styled from "styled-components";

export const StyledInputContainer = styled.div`
  box-shadow: 0px 16px 30px -10px rgba(70, 96, 187, 0.2);
  background-color: ${(props) => props.theme.colors.white};
  padding: 10px;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  & img {
    width: 24px;
    height: 24px;
  }
`;

export const StyledInput = styled.input`
  color: ${(props) => props.theme.colors.lightBlack};
  background-color: ${(props) => props.theme.colors.white};
  caret-color: ${(props) => props.theme.colors.skyBlue};
  border: none;
  flex: 1;
  &::placeholder {
    color: ${(props) => props.theme.colors.kashmirBlue};
  }
  &:focus-within {
    outline: none;
  }
`;

export const ErrorText = styled.p`
  color: ${(props) => props.theme.colors.red};
  font-weight: bold;
`;
