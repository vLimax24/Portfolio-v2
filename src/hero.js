const textContainer = document.getElementById("dynamicText");
const cursor = document.getElementById("cursor");
const newTexts = ["Frontend Developer", "UI/UX Designer", "Music Enthusiast"];
let currentIndex = 0;
let textIndex = 0;

function updateCursorHeight() {
  
  const fontSize = window.getComputedStyle(textContainer).fontSize;
  cursor.style.height = fontSize; // Set the cursor height to match the font size


}

function updateTextContainerHeight() {
  const newText = newTexts[currentIndex];
  textContainer.textContent = newText;

  const fontSize = window.getComputedStyle(textContainer).fontSize;
  const minHeight = parseFloat(fontSize); // Convert font size to a numeric value
  document.querySelector('.dynamicTextWrapper').style.minHeight = minHeight + 'px';
  document.querySelector('.description').style.height = minHeight + 'px';
}

function updateCursor() {
  const newText = newTexts[currentIndex];
  const partialText = newText.substring(0, textIndex + 1);
  textContainer.innerText = partialText;
  const cursorLeft = textContainer.getBoundingClientRect().right;
  cursor.style.left = cursorLeft + 'px';
  textIndex++;
  if (textIndex <= newText.length) {
    setTimeout(typeText, 200);
  } else {
    setTimeout(eraseText, 1000);
  }
}

function typeText() {
  updateTextContainerHeight();
  const newText = newTexts[currentIndex];
  const partialText = newText.substring(0, textIndex + 1);

  textContainer.textContent = partialText;
  cursor.style.left = (textContainer.offsetWidth + 5) + "px"; // Adjust 5px for spacing

  updateCursorHeight();
  textIndex++;

  if (textIndex <= newText.length) {
    setTimeout(typeText, 100); // Adjust the typing speed here (e.g., 100ms)
  } else {
    setTimeout(eraseText, 1000); // Delay before erasing (1 second)
  }
}

function eraseText() {
  const newText = newTexts[currentIndex];
  const partialText = newText.substring(0, textIndex - 1);
  textContainer.innerText = partialText;
  cursor.style.left = (textContainer.offsetWidth + 5) + "px";
  textIndex--;
  if (textIndex >= 0) {
    setTimeout(eraseText, 50);
  } else {
    currentIndex = (currentIndex + 1) % newTexts.length;
    textContainer.style.minWidth = textContainer.offsetWidth + 'px';
    setTimeout(typeText, 1000);
  }
}

// Initial text typing
typeText();