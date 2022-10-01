$(document).ready(function () {
  // --- our code goes here ---
  // // console.log("Ready!");
  // $("#tweet-text").on("keyup", function () {
  //   // console.log(this);
  //   let characterCount = $(this).val().length;
  //   // console.log(characterCount);
  //   const counter = $(this).next().find("output");
  //   counter.html(140 - characterCount);
  //   if (characterCount > 140) {
  //     counter.css("color", "#FF0000");
  //   } else {
  //     counter.css("color", "black");
  //   }
  // });
  $(".tweet").on("mouseover", function (event) {
    // console.log(this);
    $(this).css("box-shadow", "10px 10px 5px #b3bbd9");
  });
  $(".tweet").on("mouseout", function (event) {
    console.log(this);
    $(this).css("box-shadow", "none");
  });
});
