import locationPin from "../../../assets/icon-location.svg";
import linkIcon from "../../../assets/icon-website.svg";
import twitterIcon from "../../../assets/icon-twitter.svg";
import companyIcon from "../../../assets/icon-company.svg";

const SocialInfo = () => {
  return (
    <div>
      {/* FIRST ROW */}
      <div>
        <div>
          <img src={locationPin} alt="" />
          <p>San Fransisco</p>
        </div>
        <div>
          <img src={twitterIcon} alt="" />
          <p>Not available</p>
        </div>
      </div>
      {/* SECOND ROW */}
      <div>
        <div>
          <img src={linkIcon} alt="" />
          <p>https://github.blog</p>
        </div>
        <div>
          <img src={companyIcon} alt="" />
          <p>@github</p>
        </div>
      </div>
    </div>
  );
};

export default SocialInfo;
