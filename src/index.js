import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar photo="surprise.jpg" photoName="Surprise face" />
      <div className="data">
        <Intro
          name="Paul Dubuc"
          intro="Front-end React web developer. When not coding, I work as a Technical Program Manager.  In my spare time, I like to hike and meditate."
        />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList skill="HTML+CSS" emoji="" bgcolor="" />
      </div>
    </div>
  );
}

function Avatar(props) {
  const imgStyle = {
    width: "442px",
    height: "300px",
    objectFit: "fill", // Ensures the image will fill the box, even if it distorts
  };
  return (
    <div className="avatar">
      <img src={props.photo} alt={props.photoName} style={imgStyle} />
    </div>
  );
}

function Intro(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>
        <span style={{ backgroundColor: "lightblue" }}>{props.intro}</span>
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <main className="skill-list">
      <Skill skill="HTML+CSS " emoji="😊" bgcolor="lightblue" />
      <Skill skill="JavaScript " emoji="👍" bgcolor="gold" />
      <Skill skill="Web Design " emoji="💪" bgcolor="red" />
      <Skill skill="Git and Github " emoji="😁" bgcolor="green" />
      <Skill skill="React " emoji="😎" bgcolor="blue" />
    </main>
  );
}

function Skill(props) {
  const boxStyle = {
    backgroundColor: props.bgcolor,
  };
  return (
    <div className="skill" style={boxStyle}>
      {props.skill}
      {props.emoji}
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);
