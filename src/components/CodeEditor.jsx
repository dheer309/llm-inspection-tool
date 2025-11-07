import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import "prismjs/components/prism-javascript";
import "prismjs/themes/prism.css";
import "../App.css";

export default function CodeEditor({ oldCode, setOldCode, newCode, setNewCode }) {
  return (
    <div className="editors-container">
      <div className="editor-wrapper">
        <h4>Old Code</h4>
        <Editor
          value={oldCode}
          onValueChange={setOldCode}
          highlight={(code) => highlight(code, languages.js, "javascript")}
          padding={10}
          className="code-editor"
        />
      </div>

      <div className="editor-wrapper">
        <h4>New Code</h4>
        <Editor
          value={newCode}
          onValueChange={setNewCode}
          highlight={(code) => highlight(code, languages.js, "javascript")}
          padding={10}
          className="code-editor"
        />
      </div>
    </div>
  );
}
