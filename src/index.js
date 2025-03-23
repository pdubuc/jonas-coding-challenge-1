import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

function App() {
  return (
    <div className="card">
      <Avatar photoName="../public/surprise.png" />
      <div className="data">
        <Intro />
        {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
        <SkillList skill="html" emoji="" bgcolor="" />
      </div>
    </div>
  );
}

function Avatar(props) {
  return <div className="Avatar">{props.photoName}</div>;
}

function Intro(props) {
  return <div className="data">what</div>;
}

function SkillList(props) {
  return (
    <div className="skill-list">
      <div className="skill">
        {props.skill}
        {props.emoji}
        {props.bgcolor}
      </div>
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
