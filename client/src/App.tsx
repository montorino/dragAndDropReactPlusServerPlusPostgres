import { useState } from "react";
import "./App.css";
import Files from "./components/Files";
import RadioGroup from "./components/RadioGroup";
import Cards from "./components/Cards";
import Tooltip from "./components/Tooltip/Tooltip";

function App() {
  const items: { value: string; label: string }[] = [
    { value: "files", label: "Files" },
    { value: "cards", label: "Cards" },
  ];

  const [value, setValue] = useState<string | null>('cards');

const handleClick = ()=>{
  console.log('cliked')
}
  return (
    <>
      <RadioGroup name="switch" items={items} value={value} onChange={setValue}/>
      {value === "files" ? <Files /> : ""}
      {value === "cards" ? <Cards /> : ""}
      {value === "tooltip" ? (<Tooltip infoText='translation text'><button className="btn" onClick={handleClick}>Озвучить перевод</button></Tooltip>): ""}
    </>
  );
}

export default App;
