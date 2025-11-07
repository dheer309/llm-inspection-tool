import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../App.css"

export default function PromptDisplay() {
  const navigate = useNavigate();
  const location = useLocation();

  // get prompt from router state
  const prompt = location.state?.prompt || "No prompt generated yet.";

  return (
    <div style={{ padding: "2rem", fontFamily: "sans-serif"}}>
      <h1>Generated Prompt</h1>
      <div
        style={{
          border: "1px solid #666",
          padding: "1rem",
          whiteSpace: "pre-wrap",
          marginBottom: "1rem",
          textAlign:"left"
        }}
        dangerouslySetInnerHTML={{ __html: prompt }}
      />

      <button
        onClick={() => navigate("/")}
        style={{ padding: "0.5rem 1rem" }}
      >
        Back to Editor
      </button>
    </div>
  );
}
