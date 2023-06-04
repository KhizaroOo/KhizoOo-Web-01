document.addEventListener("DOMContentLoaded", function () {
  var organizeBtn = document.getElementById("organizeBtn");
  organizeBtn.addEventListener("click", function () {
    chrome.extension.getBackgroundPage().organizeTabs();
  });
});