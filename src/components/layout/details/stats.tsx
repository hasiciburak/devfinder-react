import { AxiosResponse } from "axios";
import "./index.scss";
import { GithubUser } from "../../../types";

type Props = {
  data: GithubUser;
};

const Stats = ({ data }: Props) => {
  return (
    <div className="stats-wrapper">
      <div>
        <p>Repos</p>
        <h2>{data.public_repos}</h2>
      </div>

      <div>
        <p>Followers</p>
        <h2>{data.followers}</h2>
      </div>
      <div>
        <p>Following</p>
        <h2>{data.following}</h2>
      </div>
    </div>
  );
};

export default Stats;
