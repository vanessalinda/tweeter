$(document).ready(function () {
  $("#tweet-text").on("keyup", function () {
    let characterCount = $(this).val().length;
    const counter = $(this).next().find("output");
    counter.html(140 - characterCount);
    if (characterCount > 140) {
      counter.css("color", "#FF0000");
    } else {
      counter.css("color", "black");
    }
  });
});
