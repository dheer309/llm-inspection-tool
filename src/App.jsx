import React, { useState, useEffect } from "react";
import CodeEditor from "./components/CodeEditor";
import GenerateButton from "./components/GenerateButton";
import ResetTextButton from "./components/ResetTextButton";
import ClearAllButton from "./components/ClearAllButton";
import "./App.css";

export default function App() {
  const initialCode = 
`function calculateTotal(items) {
    let total = 0;
    for (let item of items) {
        total += item.price;
    }
    return total;
}`;

  // store values of old code and new code
  const [oldCode, setOldCode] = useState(() => localStorage.getItem("oldCode") || initialCode);
  const [newCode, setNewCode] = useState(() => localStorage.getItem("newCode") || "");

  // change the code in old code and new code fields to the values stored
  useEffect(() => {
    localStorage.setItem("oldCode", oldCode);
  }, [oldCode]);

  useEffect(() => {
    localStorage.setItem("newCode", newCode);
  }, [newCode]);

  return (
    <div className="app-container">
      <h1>Code Diff LLM Prompt Generator</h1>

      <div className="editors-container">
        <CodeEditor oldCode={oldCode} setOldCode={setOldCode} newCode={newCode} setNewCode={setNewCode}/>
      </div>
      
      <GenerateButton initialCode={oldCode} code={newCode} />
      <ResetTextButton initialCode={initialCode} setOldCode={setOldCode} setNewCode={setNewCode} />
      <ClearAllButton setOldCode={setOldCode} setNewCode={setNewCode} />
    </div>
  );
}
