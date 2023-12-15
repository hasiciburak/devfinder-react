import Description from "./description";
import { GithubUser } from "../../../types";
import "./index.scss";
import ProfileOverview from "./profile-overview";
import SocialInfo from "./social-info";
import Stats from "./stats";
type Props = {
  data: GithubUser;
};

const Details = ({ data }: Props) => {
  return (
    <div className="details-wrapper">
      {/* PROFILE OVERVIEW */}
      <ProfileOverview data={data} />
      <Description data={data} />
      <Stats data={data} />
      <SocialInfo data={data} />
    </div>
  );
};

export default Details;
