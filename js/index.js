console.log(
  "%c" +
    " __      __  ______   __  __   ______     " +
    "\n" +
    "/\\ \\  __/\\ \\ /\\__  _\\ /\\ \\ /\\ \\ /\\__  _\\    " +
    "\n" +
    "\\ \\ \\/\\ \\ \\ \\/_\\/\\ \\/ \\ \\ \\/'/'\\/ _/\\ \\/    " +
    "\n" +
    " \\ \\ \\ \\ \\ \\ \\ \\ \\ \\  \\ \\ , <    \\ \\ \\    " +
    "\n" +
    "  \\ \\ \\_/ \\_\\ \\ \\_\\ \\__\\ \\ \\\\`\\   \\_\\ \\__ " +
    "\n" +
    "   \\ `\\___x___/ /\\_____\\\\ \\_\\ \\_\\ /\\_____\\ " +
    "\n" +
    "    '/__//__/  /_____/ \\/_/\\/_/ /_____/",
  "color: #d81b60; font-size: 16px; font-weight: bold;"
);

document.addEventListener("DOMContentLoaded", function () {
  const commentList = document.getElementById("commentList");
  const commentInput = document.getElementById("commentInput");
  const commentForm = document.getElementById("commentForm");

  function addComment(text) {
    const commentDiv = document.createElement("div");
    commentDiv.classList.add("comment");

    const commentText = document.createElement("p");
    commentText.textContent = text;

    commentDiv.appendChild(commentText);
    commentList.appendChild(commentDiv);

    commentInput.value = "";
  }

  commentForm.addEventListener("submit", function (event) {
    event.preventDefault();
    addComment(commentInput.value);
    alert("댓글이 등록되었어요!");
  });

  resetButton.addEventListener("click", function () {
    commentInput.value = "";
  });
});
