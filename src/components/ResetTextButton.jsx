import "../App.css"

export default function ResetTextButton({ initialCode, setOldCode, setNewCode }) {
  // reset code in all the fields and in local storage
  const handleReset = () => {
    setOldCode(initialCode);
    setNewCode("");
    localStorage.removeItem("oldCode");
    localStorage.removeItem("newCode");
  };

  return (
    <button onClick={handleReset} style={{ margin: "1rem" }}>
      Reset Text
    </button>
  );
}
