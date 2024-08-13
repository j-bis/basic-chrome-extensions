

let contents = document.querySelector('.mw-content-ltr.mw-parser-output');

if (contents) {
    console.log(contents);
    
    const text = contents.textContent;
    const wordMatchRegExp = /[^\s]+/g; // Regular expression
    const words = text.matchAll(wordMatchRegExp);
    // matchAll returns an iterator, convert to array to get word count
    const wordCount = [...words].length;
    const readingTime = Math.round(wordCount / 200);
    const badge = document.createElement("p");
    // Use the same styling as the publish information in an article's header
    badge.classList.add("color-secondary-text", "type--caption");
    badge.textContent = `⏱️ ${readingTime} min read`;

      // Support for API reference docs
  const heading = contents.querySelector("style");
  // Support for article docs with date
  const date = contents.querySelector("time")?.parentNode;

  (date ?? heading).insertAdjacentElement("afterend", badge);

    console.log("clock inserted")
}