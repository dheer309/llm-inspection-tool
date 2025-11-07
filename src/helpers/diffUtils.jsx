export function createDiff(oldText, newText) {
  const oldLines = oldText.split("\n");
  const newLines = newText.split("\n");
  let result = "";

  let i = 0, j = 0;

  while (i < oldLines.length || j < newLines.length) {
    const oldLine = i < oldLines.length ? oldLines[i] : null;
    const newLine = j < newLines.length ? newLines[j] : null;

    // if both lines exist and are equal
    if (oldLine === newLine) {
      const display = (oldLine === "" ? " " : oldLine);
      result += `<div>  ${display}</div>`;
      i++; j++;
    }
    // if a line was removed
    else if (oldLine !== null && (newLine === null || oldLine !== newLine)) {
      const display = (oldLine === "" ? " " : oldLine);
      result += `<div style="color:red">- ${display}</div>`;
      i++;
    }
    // if a line was added
    else if (newLine !== null) {
      const display = (newLine === "" ? " " : newLine);
      result += `<div style="color:green">+ ${display}</div>`;
      j++;
    }
  }

  return result;
}