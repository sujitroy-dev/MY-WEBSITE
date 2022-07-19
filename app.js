// typing animation starts here
const professionText = document.querySelector(".profession-container h2");
let textContent = ["I am a Fron-End Developer ", "I like to code "];
let i = 0;
let j = 0;
let currentTextContent = [];
let isDeleting = false;

function loop() {
  if (i < textContent.length) {
    if (j < textContent[i].length) {
      currentTextContent.push(textContent[i][j]);
      let currentTextStore = currentTextContent.join("");
      ++j;
      professionText.innerHTML = currentTextStore;
    }
    if (j == textContent[i].length) {
      isDeleting = true;
    }
    if (isDeleting) {
      currentTextContent.pop();
      let currentTextStore = currentTextContent.join("");
      professionText.innerHTML = currentTextStore;
      if (currentTextContent.length <= 0) {
        j = 0;
        i++;
        isDeleting = false;
        if (i >= textContent.length) {
          i = 0;
        }
      }
    }
  }
  setTimeout(loop, 200);
}
onload = loop();
// typing animation ends here

// freelance Status stying starts here
const freelanceStatus = document.querySelector(
  ".about-info-column:last-child span"
);

function freelanceStatusStyling() {
  if (freelanceStatus.innerHTML === "Available") {
    freelanceStatus.classList.add("freelance-available");
  } else {
    if (freelanceStatus.classList.contains("freelance-available")) {
      freelanceStatus.classList.remove("freelance-available");
    }
    freelanceStatus.classList.add("freelance-unavailable");
  }
}
freelanceStatusStyling();
// freelance Status stying ends here
