 $(document).ready(function(){
   // there are a few tweets on the page
    renderTweets(streams.home);
    var USER_NAME = "aishi";
    streams.users[USER_NAME] = [];

    // Get more tweets by clicking the button #refresh
    $("#refresh").click(function(){
      renderTweets(streams.home);
    });

    // add my own tweet
    $("#btn-addMyTweet").click(function(){
        var tweet = $("#myTweet").val();
        //username here
        window.visitor = USER_NAME;
        writeTweet(tweet);
        renderTweets(streams.home);
        $("#myTweet").val(''); // clean the input field after submit
    });

    // show user's timeline   
    $(".tweets").delegate(".user","click",function(){
      var username = $(this).text().substring(1);
      renderTweets(streams.users[username]);
    });

})

function renderTweets(tweets){
    var $tweets = $('.tweets ul');
    $tweets.empty();
    var index = tweets.length - 1;
    while(index >= 0){
        var tweet = tweets[index];
        var $tweet = $('<li class="tweet"></li>');
        $tweet.html('<a class="user">@'+tweet.user+'</a>: ' + '<span class="timestamp">' + moment(tweet.created_at).fromNow() + '</span>' + tweet.message);
        $tweet.appendTo($tweets);
        index -= 1;
    }

}