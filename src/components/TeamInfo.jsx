import { motion } from "framer-motion";
import { children } from "../utils";
const TeamInfo = ({ name, jobDescription, jobSpecs }) => {
  const firstText = name.split(" ");
  const lastWord = firstText.pop();
  const needed = firstText.join(" ");
  return (
    <motion.div className="info" variants={children}>
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
    </motion.div>
  );
};
export default TeamInfo;
