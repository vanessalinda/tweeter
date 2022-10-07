/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// Fake data taken from initial-tweets.json

$(document).ready(function () {
  // --- our code goes here ---
  // const data = [
  //   {
  //     user: {
  //       name: "Newton",
  //       avatars: "https://i.imgur.com/73hZDYK.png",
  //       handle: "@SirIsaac",
  //     },
  //     content: {
  //       text: "If I have seen further it is by standing on the shoulders of giants",
  //     },
  //     created_at: 1461116232227,
  //   },
  //   {
  //     user: {
  //       name: "Descartes",
  //       avatars: "https://i.imgur.com/nlhLi3I.png",
  //       handle: "@rd",
  //     },
  //     content: {
  //       text: "Je pense , donc je suis",
  //     },
  //     created_at: 1461113959088,
  //   },
  // ];

  const loadTweets = () => {
    $.ajax({
      url: "/tweets",
      method: "GET",
      dataType: "json",
      success: (tweets) => {
        console.log("data", tweets);
        renderTweets(tweets);
      },
      error: (err) => {
        console.log(`error: ${err}`);
      },
    });
  };

  loadTweets();

  const createTweetElement = function (tweetData) {
    const { user, content, created_at } = tweetData;
    const timePassed = timeago.format(created_at);

    const escape = function (str) {
      let div = document.createElement("div");
      div.appendChild(document.createTextNode(str));
      return div.innerHTML;
    };

    const $tweet = $(`<article class="tweet">
    <header>
      <div>
        <img src="${user.avatars}" class="avatar"></img>
        <span class="tweet-name">${user.name}</span>
      </div>
      <span class="tweet-username">${user.handle}</span>
    </header>
    <p>${escape(content.text)}</p>
    <footer>
      <span class="tweet-time">${timePassed}</span>
      <span class="tweet-icons">
        <i class="fa-solid fa-flag"></i>
        <i class="fa-sharp fa-solid fa-retweet"></i>
        <i class="fa-sharp fa-solid fa-heart"></i>
      </span>
    </footer>
  </article>`);

    return $tweet;
  };

  const renderTweets = function (tweets) {
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
    $("#tweets-container").empty();
    for (let tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $("#tweets-container").prepend($tweet);
    }
    // const allTweets = tweets.map((tweet) => createTweetElement(tweet));
    // return allTweets;
  };

  // renderTweets(data);

  // // Test / driver code (temporary). Eventually will get this from the server.
  // const tweetData = {
  //   user: {
  //     name: "Newton",
  //     avatars: "https://i.imgur.com/73hZDYK.png",
  //     handle: "@SirIsaac",
  //   },
  //   content: {
  //     text: "If I have seen further it is by standing on the shoulders of giants",
  //   },
  //   created_at: 1461116232227,
  // };

  // const $tweet = createTweetElement(tweetData);

  // // Test / driver code (temporary)
  // console.log($tweet); // to see what it looks like
  // $("#tweets-container").append($tweet); // to add it to the page so we can make sure it's got all the right elements, classes, etc.
  const form = $(".tweet-form");
  form.on("submit", function (event) {
    event.preventDefault();
    const tweetText = $(this).find("textarea");
    let characterCount = tweetText.val().length;

    const errMessage = $("#error-message");

    if (characterCount > 140) {
      errMessage.slideUp();
      errMessage.html("Please ensure your tweet is under 140 characters.");
      errMessage.slideDown();
      // alert("Please ensure your tweet is under 140 characters.");
    } else if (characterCount <= 0) {
      errMessage.slideUp();
      errMessage.text("Please ensure your tweet is not empty.");
      errMessage.slideDown();
      // alert("Please ensure your tweet is not empty.");
    } else {
      errMessage.slideUp();

      const serializedData = $(event.target).serialize();

      $.post("/tweets", serializedData, (response) => {
        //console.log(response);
        loadTweets();
      });

      //console.log(this);
      form.trigger("reset");
    }
  });
});
