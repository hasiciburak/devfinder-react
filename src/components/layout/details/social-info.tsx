import locationPin from "../../../assets/icon-location.svg";
import linkIcon from "../../../assets/icon-website.svg";
import twitterIcon from "../../../assets/icon-twitter.svg";
import companyIcon from "../../../assets/icon-company.svg";
import { GithubUser } from "../../../types";

type Props = {
  data: GithubUser;
};

const SocialInfo = ({ data }: Props) => {
  return (
    <div>
      {/* FIRST ROW */}
      <div>
        <div>
          <img src={locationPin} alt="" />
          <p>{data.location ? data.location : "Not Provided"}</p>
        </div>
        <div>
          <img src={twitterIcon} alt="" />
          <p>
            {data.twitter_username ? data.twitter_username : "Not Provided"}
          </p>
        </div>
      </div>
      {/* SECOND ROW */}
      <div>
        <div>
          <img src={linkIcon} alt="" />
          <p>{data.url}</p>
        </div>
        <div>
          <img src={companyIcon} alt="" />
          <p>{data.company ? data.company : "Not Provided"}</p>
        </div>
      </div>
    </div>
  );
};

export default SocialInfo;
