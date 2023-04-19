import styled from "styled-components";
import TeamImg from "./TeamImg";
import TeamInfo from "./TeamInfo";
const Team = ({ name, jobDescription, jobSpecs, grayBg, order, img }) => {
  return (
    <div className={grayBg && "gray-bg"}>
      <Wrapper className="container">
        {order === "icon-right" && (
          <>
            <TeamInfo
              name={name}
              jobDescription={jobDescription}
              jobSpecs={jobSpecs}
            />
            <TeamImg img={img} />
          </>
        )}
        {order === "icon-left" && (
          <>
            <TeamImg img={img} />
            <TeamInfo
              name={name}
              jobDescription={jobDescription}
              jobSpecs={jobSpecs}
            />
          </>
        )}
      </Wrapper>
    </div>
  );
};
export default Team;
const Wrapper = styled.section`
  display: flex;
  justify-content: space-between;
  padding-top: 100px;
  padding-bottom: 100px;
  .info {
    width: 50%;
    margin: 20px;
  }
  .info h2 {
    font-size: 20px;
    font-weight: bold;
    text-decoration: underline;
    margin-bottom: 30px;
  }
  .info p {
    width: 90%;
  }
  .info ul {
    list-style: disc;
    padding-left: 30px;
  }
  .title h1 {
    font-size: 42px;
    font-weight: 600;
  }
  img {
    max-width: 100%;
    margin-top: 120px;
  }
  @media (max-width: 1000px) {
    display: block;
    .info {
      width: 100%;
      .title {
        text-align: center;
      }
    }
    img {
      display: none;
    }
  }
`;
