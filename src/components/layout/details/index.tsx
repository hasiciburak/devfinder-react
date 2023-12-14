import Description from "./description";
import "./index.scss";
import ProfileOverview from "./profile-overview";
import SocialInfo from "./social-info";
import Stats from "./stats";
type Props = {};

const Details = (props: Props) => {
  return (
    <div className="details-wrapper">
      {/* PROFILE OVERVIEW */}
      <ProfileOverview />
      <Description />
      <Stats />
      <SocialInfo />
    </div>
  );
};

export default Details;
