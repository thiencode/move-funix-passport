chrome.runtime.onMessage.addListener(function (request) {
  if (request.method == "move") {
    move();
  }
});

function move() {
  const funixText = document.getElementById('funix-text').parentElement;
  funixText.style.bottom = "12em";

}