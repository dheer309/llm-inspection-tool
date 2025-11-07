import { useNavigate } from "react-router-dom";
import { createDiff } from "../helpers/diffUtils";
import "../App.css"

export default function GenerateButton({ initialCode, code }) {
  const navigate = useNavigate();

  const handleClick = () => {
    const diffHtml = createDiff(initialCode, code);
    const llmPrompt = `Analyse the following code changes and provide feedback:\n\n${diffHtml}`;

    // navigate to /prompt and pass prompt thruogh state
    navigate("/prompt", { state: { prompt: llmPrompt } });
  };

  return (
    <button onClick={handleClick}>
      Generate Prompt
    </button>
  );
}
