document.addEventListener("DOMContentLoaded", function() {
    const sentences = [
      "Frontend Developer",
      "UI/UX Designer",
      "Music Enthusiast"
    ];

    let currentIndex = 0;
    let currentSentence = sentences[currentIndex];
    let isDeleting = false;
    let delay = isDeleting ? 100 : 50; // Adjust typing speed here

    function type() {
      const textElement = document.getElementById("dynamicText");
      const currentText = textElement.innerHTML;

      if (isDeleting) {
        textElement.innerHTML = currentText.slice(0, -1);
        delay = 50;
      } else {
        textElement.innerHTML = currentSentence.substring(0, currentText.length + 1);
        delay = currentText.length === currentSentence.length ? 1500 : 50;
      }

      if (!isDeleting && currentText === currentSentence) {
        isDeleting = true;
      } else if (isDeleting && currentText === "") {
        isDeleting = false;
        currentIndex = (currentIndex + 1) % sentences.length;
        currentSentence = sentences[currentIndex];
        delay = 500; // Delay before typing the next sentence
      }

      setTimeout(type, delay);
    }

    type(); // Start typing
  });