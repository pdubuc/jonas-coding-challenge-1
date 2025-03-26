import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img src="surprise.jpg" alt="Paul D" className="avatar" />;
}

function Intro() {
  return (
    <div>
      <h1>Paul D</h1>
      <p>
        <span>
          Front-end React web developer. When not coding, I work as a Technical
          Program Manager. In my spare time, I like to hike and meditate.
        </span>
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
  return (
    <div className="skill" style={{ backgroundColor: props.bgcolor }}>
      <span>{props.skill}</span>
      <span>{props.emoji}</span>
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
