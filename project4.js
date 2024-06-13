const noButton = document.getElementById("noButton");
let clickCount = 0;
const maxClicks = Infinity;

noButton.addEventListener("click", () => {
  if (clickCount < maxClicks) {
    clickCount++;
    moveButton(noButton);
  } else {
    noButton.style.display = "none";
  }
});

function moveButton(button) {
  const x = Math.floor(
    Math.random() * (window.innerWidth - button.offsetWidth)
  );
  const y = Math.floor(
    Math.random() * (window.innerHeight - button.offsetHeight)
  );
  button.style.position = "absolute";
  button.style.left = `${x}px`;
  button.style.top = `${y}px`;
}
