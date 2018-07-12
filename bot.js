console.log('Bot started');

const Twit = require('twit');
const keys = require('./keys');

const T = new Twit(keys);



//postTweet();
//for timing the post
const oneDay = 1000*60*60*24

setInterval(postTweet, oneDay)


function postTweet() {
        
    let tweets = [  //source: http://www.thecorememory.com/Epigrams_on_Programming.pdf
        'One man\'s constant is another man\'s variable.',
        'Functions delay binding: data structures induce binding. Moral: Structure data late in the programming process.',
        'Syntactic sugar causes cancer of the semi-colons.',
        'Every program is a part of some other program and rarely fits.',
        'If a program manipulates a large amount of data, it does so in a small number of ways.',
        'Symmetry is a complexity reducing concept (co-routines include sub-routines); seek it everywhere.',
        'It is easier to write an incorrect program than understand a correct one.',
        'A programming language is low level when its programs require attention to the irrelevant.', // 8
        'It is better to have 100 functions operate on one data structure than 10 functions on 10 data structures.',
        'Get into a rut early: Do the same processes the same way. Accumulate idioms. Standardize. The only difference (!) between Shakespeare and you was the size of his idiom list - not the size of his vocabulary.',
        'If you have a procedure with 10 parameters, you probably missed some.',
        'Recursion is the root of computation since it trades description for time.',
        'If two people write exactly the same program, each should be put in micro-code and then they certainly won\'t be the same.',
        'In the long run every program becomes rococco - then rubble.',
        'Everything should be built top-down, except the first time.',
        'Every program has (at least) two purposes: the one for which it was written and another for which it wasn\'t.', // 16
        'If a listener nods his head when you\'re explaining your program, wake him up.',
        'A program without a loop and a structured variable isn\'t worth writing.',
        'A language that doesn\'t affect the way you think about programming, is not worth knowing.',
        'Wherever there is modularity there is the potential for misunderstanding: Hiding information implies a need to check communication.',
        'Optimization hinders evolution.',
        'A good system can\'t have a weak command language.',
        'To understand a program you must become both the machine and the program.',
        'Perhaps if we wrote programs from childhood on, as adults we\'d be able to read them.',
        'One can only display complex information in the mind. Like seeing, movement or flow or alteration of view is more important than the static picture, no matter how lovely.',
        'There will always be things we wish to say in our programs that in all known languages can only be said poorly.',
        'Once you understand how to write a program get someone else to write it.', // 27
        'Around computers it is difficult to find the correct unit of time to measure progress. Some cathedrals took a century to complete. Can you imagine the grandeur and scope of a program that would take as long?',       
            ];

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
