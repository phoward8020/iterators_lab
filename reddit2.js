var reddit = require("./data.json")

// Write your solutions below

// 1. "forEach" - console.log all titles
var printTitles = function (element, index) {
    console.log(element.data.title);
};

reddit["data"].children.forEach(printTitles);


// 2. "map" - Return an array of permalinks, that contain full http:// path to reddit

// 3. "filter" - Filter the posts that contain the selftext key

// 4. "reduce" - Use reduce to count all the score values across posts



// console.log("\n\nTitle: " + reddit["data"].children[0].data.title);
// console.log("\n\nPermalink: " + reddit["data"].children[0].data.permalink);
// console.log("\n\nSelftext: " + reddit["data"].children[0].data.selftext);
// console.log("\n\nscore: " + reddit["data"].children[0].data.score);


