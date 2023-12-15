import profileImg from "../../../assets/profile-image.png";
import "./index.scss";
import { GithubUser } from "../../../types";
type Props = {
  data: GithubUser;
};

const ProfileOverview = ({ data }: Props) => {
  return (
    <div className="profile-overview">
      <div className="profile-overview-left">
        <img
          src={data.avatar_url ? data.avatar_url : profileImg}
          alt="Github Profile Image"
          className="profile-image"
        />
      </div>
      <div className="profile-overview-right">
        <h1 className="overview-header">{data.name}</h1>
        <p className="username">{data.login}</p>
        <h4 className="join-date">Joined {data.updated_at}</h4>
      </div>
    </div>
  );
};

export default ProfileOverview;
