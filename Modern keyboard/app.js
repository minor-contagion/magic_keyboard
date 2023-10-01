var keyState = {};

document.addEventListener("keydown", function (event) {
  var key = event.key.toLowerCase();
  if (!keyState[key]) {
    keyState[key] = true;
    handleKeyPress(key);
  }
});

document.addEventListener("keyup", function (event) {
  var key = event.key.toLowerCase();
  if (keyState[key]) {
    keyState[key] = false;
    handleKeyRelease(key);
  }
});

function handleKeyPress(key) {
  console.log("Key pressed:'", key, "'");
  let pressedKey;

  if (/[0-9~`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(key)) {
    pressedKey = document.querySelector(`button[data-key*="${key}"]`);
  } else {
    pressedKey = document.querySelector(`button[data-key="${key}"]`);
  }

  if (pressedKey) {
    pressedKey.classList.add("pressed");
  }
}

function handleKeyRelease(key) {
  console.log("Key released:", key);

  let releasedKey;
  if (/[0-9~`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(key)) {
    releasedKey = document.querySelector(`button[data-key*="${key}"]`);
  } else {
    releasedKey = document.querySelector(`button[data-key="${key}"]`);
  }
  if (releasedKey) {
    releasedKey.classList.remove("pressed");
  }
}