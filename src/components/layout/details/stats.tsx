import "./index.scss";

type Props = {};

const Stats = (props: Props) => {
  return (
    <div className="stats-wrapper">
      <div>
        <p>Repos</p>
        <h2>8</h2>
      </div>

      <div>
        <p>Followers</p>
        <h2>3938</h2>
      </div>
      <div>
        <p>Following</p>
        <h2>9</h2>
      </div>
    </div>
  );
};

export default Stats;
