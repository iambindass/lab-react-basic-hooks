import React, { useState, createContext } from "react";
import "./App.css";
import UseContext from "./components/useContext";

export const ToggleTheme = createContext();

function App() {
  const colors = ["black", "grey"];
  const [themeIndex, setThemeIndex] = useState(0);
  const [state, setState] = useState(true);
  const [likeCount, setLikeCount] = useState(0);
  const [contentMessage, setContentMessage] = useState("");
  const [expanded, setExpanded] = useState(false);

  const handleToggle = () => {
    setThemeIndex((prevIndex) => (prevIndex + 1) % colors.length);
    setState(!state);
    setExpanded(false);
  };

  const handleLike = () => {
    setLikeCount((prevCount) => prevCount + 1);
  };

  const handleContent = () => {
    alert("Content Button Clicked");

    if (expanded) {
      setContentMessage("");
      setExpanded(false);
    } else {
      setContentMessage(
        `Three film students - Heather, Mike, and Josh - venture into the Black Hills Forest in Maryland to make a documentary about the Blair Witch legend. As they proceed with their filming, strange and unsettling events begin to occur, causing fear and paranoia to set in. Eventually, Josh and Mike go missing, leaving Heather to confront the malevolent force that seems to be lurking in the woods. After wandering for a while, Heather stumbles upon an abandoned house in the woods and discovers Mike facing the wall. As Heather screams in terror, the camera falls, abruptly ending the documentary.`
        );
      setExpanded(true);
    }
  };

  return (
    <ToggleTheme.Provider value={state}>
      <div id="toggle" onClick={handleToggle}>
        <button>Toggle</button>
      </div>

      <div
        className={`content ${state ? "plain" : "blur"} ${expanded ? "expanded" : ""}`}
        id="change"
        style={{ backgroundColor: colors[themeIndex] }}
      >
        <UseContext handleLike={handleLike} />
        <div id="message" style={{ color: state ? "white" : "black" }}>
          {contentMessage}
        </div>
        <button onClick={handleContent}>Content</button>
        <div id="number">{likeCount}</div>
        <button onClick={handleLike}>Like</button>
      </div>
    </ToggleTheme.Provider>
  );
}

export default App;