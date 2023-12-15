import { Dispatch, SetStateAction } from "react";
import {
  ErrorText,
  StyledInput,
  StyledInputContainer,
} from "../../styled/styled-input";
import { PrimaryButton } from "../../styled/styled-button";
import searchIcon from "../../../../src/assets/icon-search.svg";

type Props = {
  userName: string;
  setUserName: Dispatch<SetStateAction<string>>;
  loaded: boolean;
  setLoaded: Dispatch<SetStateAction<boolean>>;
  error: Error | null;
  isLoading: boolean;
  refetch: () => void;
};

const Search = ({ userName, setUserName, error, refetch }: Props) => {
  return (
    <div>
      {" "}
      <StyledInputContainer>
        <div className="searchArea">
          <img src={searchIcon} />
          <StyledInput
            placeholder="Search github username..."
            onChange={(e) => setUserName(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && refetch()}
            value={userName}
          />
        </div>
        {error && <ErrorText>{error.message}</ErrorText>}
        <PrimaryButton
          onClick={() => {
            refetch();
          }}
        >
          Search
        </PrimaryButton>
      </StyledInputContainer>
    </div>
  );
};

export default Search;
