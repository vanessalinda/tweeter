$(document).ready(function () {
  // --- our code goes here ---
  // // console.log("Ready!");
  $(".tweet").on("mouseover", function () {
    // console.log(this);
    $(this).css("box-shadow", "10px 10px 5px #b3bbd9");
  });
  $(".tweet").on("mouseout", function () {
    // console.log(this);
    $(this).css("box-shadow", "none");
  });

  $(".tweet-icons").on("mouseover", function (event) {
    const target = $(event.target);
    // console.log(target);
    if (target.is("i")) {
      target.css("color", "#FFAC1C");
    }
  });
  $(".tweet-icons").on("mouseout", function (event) {
    $(this).find("i").css("color", "#4056A1");
  });
});
