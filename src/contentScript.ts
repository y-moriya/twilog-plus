function hideElements(selector: string, keywords: string[]): void {
  const elements = document.querySelectorAll(selector);
  for (const element of Array.from(elements)) {
    const el = element as HTMLElement;
    if (el) {
      // Check if the element contains the specified keyword
      if (
        el.textContent &&
        keywords.some(
          (keyword) => keyword.length > 0 && el.textContent?.includes(keyword)
        )
      ) {
        console.log(el.textContent);
        el.style.display = "none";
      }
    } else {
      console.warn("Element not found:", selector);
    }
  }
}

function getDataSync(key: string, callback: Function) {
  chrome.storage.sync.get([key], (result) => {
    callback(result[key]);
  });
}

getDataSync("keywords", (value: string) => {
  hideElements(".tl-tweet", value.split(/\r?\n/));
});
