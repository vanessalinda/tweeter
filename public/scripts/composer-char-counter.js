/* eslint-disable space-before-function-paren */
$(document).ready(function () {
  // --- our code goes here ---
  // console.log("Ready!");
  $("#tweet-text").on("keyup", function () {
    // console.log(this);
    let characterCount = $(this).val().length;
    // console.log(characterCount);
    const counter = $(this).next().find("output");
    counter.html(140 - characterCount);
    if (characterCount > 140) {
      counter.css("color", "#FF0000");
    }
  });
});
