// bot.js

var Twit = require('twit');
var T = new Twit(require('./config.js'));

var search2 = {q:'#Raleigh', count: 5, result_type: "recent"};

function retweet() {
    T.get('search/tweets', search2 , function (error, data) {
	console.log(error, data);
	if(!error) {
	    var retweetId = data.statuses[0].id_str;
	    T.post('statuses/retweet/' + retweetId, { }, function(error, respose){
		if (response) {
		    console.log('Success. Check bot');
		}
		if (error) {
		    console.log('Something went wrong');
		   }
	    })
}

	else {
	    console.log('error with hashtag search', error);
	}
    });
}

retweetLatest();
setInterval(retweetLatest, 8640000000);
