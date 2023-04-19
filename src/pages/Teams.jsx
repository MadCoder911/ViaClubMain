import LandingComponent from "../components/LandingComponent";
import landingImage from "../assets/Images/teams-page-image.jpg";
import { teamsData } from "../data";
import TeamsTitle from "../components/TeamsTitle";
import Team from "../components/Team";
const Teams = () => {
  return (
    <>
      <LandingComponent text={"The teams"} img={landingImage} btn={false} />
      {teamsData.map((team, id) => {
        return (
          <>
            <TeamsTitle text={team.title} grayBg={team.grayBg} key={id} />
            <Team {...team.team1} order={"icon-right"} key={id + 1} />
            <Team {...team.team2} order={"icon-left"} key={id + 2} />
          </>
        );
      })}
    </>
  );
};
export default Teams;
