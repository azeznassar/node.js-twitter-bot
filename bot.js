//Azez Nassar - Node.js twitter bot using twit

const Twit = require('twit');
const keys = require('./keys');
const content = require('./content');

const T = new Twit(keys);


postTweet();

const oneDay = 1000*60*60*24
setInterval(postTweet, oneDay);

function postTweet() {
    let tweets = content.quotes;
    let nextText = tweets[Math.floor(Math.random() * tweets.length)];

    let tweet = {
        status: nextText
    }

    function tweeted(err, data, response) {
        if(err) {
            console.log(err);
        } else {
            console.log('Tweet posted!');
        }
    }

    T.post('statuses/update', tweet, tweeted);
}
