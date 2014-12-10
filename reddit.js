var reddit = require("./data.json")

// Write your solutions below

// 1. "forEach" - console.log all titles

var printTitles = function (element, index) {
    console.log('>> ' + element.data.title);
};

console.log('TITLES');
console.log('-----------------------------------------------------');

reddit["data"].children.forEach(printTitles);

console.log(reddit["data"].children.length);
console.log('-----------------------------------------------------\n\n');


// 2. "map" - Return an array of permalinks, that contain full http:// path to reddit

var getPermalink = function (element, index) {
    return "http://reddit.com/" + element.data.permalink;
}
var permalinks = reddit["data"].children.map(getPermalink);

console.log('PERMALINKS');a
console.log('-----------------------------------------------------');
console.log(permalinks);
console.log('-----------------------------------------------------\n\n');

// 3. "filter" - Filter the posts that contain the selftext key

var getPostsWithSelftext = function (element, index) {
    return element.data.selftext !== "";
};
var postsWithSelftext = reddit["data"].children.filter(getPostsWithSelftext);

console.log('POSTS WITH SELFTEXT');
console.log('-----------------------------------------------------');
console.log(postsWithSelftext);
console.log(postsWithSelftext.length);
console.log('-----------------------------------------------------\n\n');

// 4. "reduce" - Use reduce to count all the score values across posts
var sumScores = function (previous, current) {
    return (previous + current.data.score);
};
var totalScore = reddit["data"].children.reduce(sumScores, 0)
console.log('SUM OF SCORES');
console.log('-----------------------------------------------------');
console.log("Total Score = " + totalScore);
console.log('-----------------------------------------------------\n\n');



// console.log("\n\nTitle: " + reddit["data"].children[0].data.title);
// console.log("\n\nPermalink: " + reddit["data"].children[0].data.permalink);
// console.log("\n\nSelftext: " + reddit["data"].children[0].data.selftext);
// console.log("\n\nscore: " + reddit["data"].children[0].data.score);


