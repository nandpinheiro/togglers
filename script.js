let selectedButtons = [];

function toggleButton(buttonId) {
  const button = document.getElementsByClassName("toggle-button")[buttonId - 1];

  if (selectedButtons.includes(buttonId)) {
    selectedButtons = selectedButtons.filter((id) => id !== buttonId);
    button.classList.remove("active");
  } else {
    if (selectedButtons.length >= 2) {
      const firstButtonId = selectedButtons.shift();
      const firstButton = document.getElementsByClassName("toggle-button")[
        firstButtonId - 1
      ];
      firstButton.classList.remove("active");
    }
    selectedButtons.push(buttonId);
    button.classList.add("active");
  }
}
