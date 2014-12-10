var reddit = require("./data.json")

// Write your solutions below

// 1. "forEach" - console.log all titles
var printTitles = function (element, index) {
    console.log('TITLES');
    console.log('-----------------------------------------------------');
    console.log(">>" + element.data.title + "\n");
};

reddit["data"].children.forEach(printTitles);


// 2. "map" - Return an array of permalinks, that contain full http:// path to reddit
var printPermalinks = function (element, index) {
    var permalinks = 
    console.log('PERMALINK');
    console.log('-----------------------------------------------------');
    console.log();
}
reddit["data"].children.map(printPermalinks)


// 3. "filter" - Filter the posts that contain the selftext key

// 4. "reduce" - Use reduce to count all the score values across posts



// console.log("\n\nTitle: " + reddit["data"].children[0].data.title);
// console.log("\n\nPermalink: " + reddit["data"].children[0].data.permalink);
// console.log("\n\nSelftext: " + reddit["data"].children[0].data.selftext);
// console.log("\n\nscore: " + reddit["data"].children[0].data.score);


