document.addEventListener(
    "DOMContentLoaded",
    function () {
      var checkButton = document.getElementById("moveBtn");
      checkButton.addEventListener(
        "click",
        function () {
          chrome.tabs.query(
            { active: true, currentWindow: true },
            function (tabs) {
              chrome.tabs.sendMessage(
                tabs[0].id,
                { method: "move" },
                function (response) {
                  if (response.method == "move") {
                  }
                }
              );
            }
          );
        },
        false
      );
    },
    false
  );
  