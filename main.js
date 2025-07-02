const GRID_SIZE = 16;

function initBoxes(size) {
  const container = document.getElementById("container");
  container.innerHTML = '';
  container.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
  container.style.gridTemplateRows = `repeat(${size}, 1fr)`;

  for (let i = 0; i < size * size; i++) {
    const square = document.createElement("div");
    square.className = "square";
    container.appendChild(square);
    square.addEventListener("mouseenter", () => {
      setBackgroundColor(square, getRandomHexColor());
    });
    square.addEventListener("mouseleave", () => {
      setTimeout(() => {
        setBackgroundColor(square, "");
      }, 1000);
    });
  }
}

function setBackgroundColor(element, color) {
  element.style.backgroundColor = color;
}

function getRandomHexColor() {
  const randomNum = Math.floor(Math.random() * 0xffffff);
  const hexString = randomNum.toString(16).padStart(6, "0");
  return `#${hexString}`;
}

initBoxes(GRID_SIZE);

const buttons = document.querySelectorAll(".set-size");
buttons?.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.getElementById("modal-set-size");
    modal.classList.add("show");
  });
});

const modalCloseButtons = document.querySelectorAll(".modal-close");
modalCloseButtons?.forEach((close) => {
  close.addEventListener("click", () => {
    close.parentElement.classList.remove("show");
  });
});

const modalConfirmButton = document.getElementById("confirm");
modalConfirmButton?.addEventListener("click", (e) => {
  const inputSize = document.getElementById("size");
  if (inputSize && inputSize.value > 0 && inputSize.value <= 100) {
    initBoxes(inputSize.value);
    closeModal(modalConfirmButton);
  } else {
    alert('wrong number')
  }
});

function closeModal(element) {
    console.log(element)
    while(!element?.classList?.contains('modal')) {
        element = element.parentElement;
    }
    element.classList.remove('show');
}
