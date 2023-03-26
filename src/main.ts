import "./style.css";

const app = document.querySelector<HTMLDivElement>("#app")!;

document.addEventListener("DOMContentLoaded", () => {
  const keywords = document.getElementById("keywords") as HTMLTextAreaElement;
  const saveButton = document.getElementById("saveButton") as HTMLButtonElement;

  // Retrieve and display the saved text
  chrome.storage.sync.get(["keywords"], (result) => {
    keywords.value = result.keywords || "";
  });

  // Save the input text
  saveButton.addEventListener("click", () => {
    chrome.storage.sync.set({ keywords: keywords.value }, () => {
      console.log("Input text saved.");
      window.close();
    });
  });
});

app.innerHTML = `
  <h1>Ignore keywords</h1>
  <textarea id="keywords" rows="10" cols="30"></textarea>
  <button id="saveButton">Save</button>
`;
