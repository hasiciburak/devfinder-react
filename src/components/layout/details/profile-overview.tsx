import profileImg from "../../../assets/profile-image.png";
import "./index.scss";
type Props = {};

const ProfileOverview = (props: Props) => {
  return (
    <div className="profile-overview">
      <div className="profile-overview-left">
        <img
          src={profileImg}
          alt="Github Profile Image"
          className="profile-image"
        />
      </div>
      <div className="profile-overview-right">
        <h1 className="overview-header">The Octocat</h1>
        <p className="username">@octocat</p>
        <h4 className="join-date">Joined 25 Jan 2011</h4>
      </div>
    </div>
  );
};

export default ProfileOverview;
