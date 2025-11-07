import "../App.css"

export default function ClearAllButton({ setOldCode, setNewCode }) {
  // clear all the fields and code stored in local storage
  const handleClear = () => {
    setOldCode("");
    setNewCode("");
    localStorage.removeItem("oldCode");
    localStorage.removeItem("newCode");
  };

  return (
    <button onClick={handleClear} >
      Clear All
    </button>
  );
}
