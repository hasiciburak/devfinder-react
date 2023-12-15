import { GithubUser } from "../../../types";

type Props = {
  data: GithubUser;
};

const Description = ({ data }: Props) => {
  return (
    <div>
      <p>{data.bio ? data.bio : "No bio provided"}</p>
    </div>
  );
};

export default Description;
