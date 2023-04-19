const TeamInfo = ({ name, jobDescription, jobSpecs }) => {
  const firstText = name.split(" ");
  const lastWord = firstText.pop();
  const needed = firstText.join(" ");
  return (
    <div className="info">
      <div className="title">
        <h1>
          {needed} <span className="red">{lastWord}:</span>
        </h1>
      </div>
      <h2>Job Description:</h2>
      <p>{jobDescription}</p>
      <h2>Job Specification:</h2>
      <ul>
        {jobSpecs.map((desc, id) => {
          return <li key={id}>{desc}</li>;
        })}
      </ul>
    </div>
  );
};
export default TeamInfo;
