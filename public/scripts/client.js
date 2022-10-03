/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */
// Fake data taken from initial-tweets.json

$(document).ready(function () {
  // --- our code goes here ---
  const data = [
    {
      user: {
        name: "Newton",
        avatars: "https://i.imgur.com/73hZDYK.png",
        handle: "@SirIsaac",
      },
      content: {
        text: "If I have seen further it is by standing on the shoulders of giants",
      },
      created_at: 1461116232227,
    },
    {
      user: {
        name: "Descartes",
        avatars: "https://i.imgur.com/nlhLi3I.png",
        handle: "@rd",
      },
      content: {
        text: "Je pense , donc je suis",
      },
      created_at: 1461113959088,
    },
  ];

  const renderTweets = function (tweets) {
    // loops through tweets
    // calls createTweetElement for each tweet
    // takes return value and appends it to the tweets container
    for (let tweet of tweets) {
      const $tweet = createTweetElement(tweet);
      $("#tweets-container").append($tweet);
    }
    // const allTweets = tweets.map((tweet) => createTweetElement(tweet));
    // return allTweets;
  };

  const createTweetElement = function (tweetData) {
    const { user, content, created_at } = tweetData;
    const $tweet = $(`<article class="tweet">
    <header>
      <div>
        <img src="${user.avatars}" class="avatar"></img>
        <span class="tweet-name">${user.name}</span>
      </div>
      <span class="tweet-username">${user.handle}</span>
    </header>
    <p>${content.text}</p>
    <footer>
      <span class="tweet-time">${created_at}</span>
      <span class="tweet-icons">
        <i class="fa-solid fa-flag"></i>
        <i class="fa-sharp fa-solid fa-retweet"></i>
        <i class="fa-sharp fa-solid fa-heart"></i>
      </span>
    </footer>
  </article>`);
    return $tweet;
  };

  renderTweets(data);

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
});
