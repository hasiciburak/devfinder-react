import React from "react";
import {
  ErrorText,
  StyledInput,
  StyledInputContainer,
} from "../../styled/styled-input";
import { PrimaryButton } from "../../styled/styled-button";
import searchIcon from "../../../../src/assets/icon-search.svg";

type Props = {};

const Search = (props: Props) => {
  return (
    <div>
      {" "}
      <StyledInputContainer>
        <div className="searchArea">
          <img src={searchIcon} />
          <StyledInput placeholder="Search github username..." />
        </div>
        <ErrorText>No results</ErrorText>
        <PrimaryButton>Search</PrimaryButton>
      </StyledInputContainer>
    </div>
  );
};

export default Search;
