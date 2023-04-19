const TeamImg = ({ img }) => {
  console.log(img);
  return (
    <div className="image">
      {" "}
      <img src={img} alt="tm" />
    </div>
  );
};
export default TeamImg;
