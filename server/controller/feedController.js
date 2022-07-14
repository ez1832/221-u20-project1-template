//importing feedItem model
const feedItem = require('../model/feedItem');

//initializing allFeedItems array
var allFeedItems = [];

//creating feedItem variables and adding to allFeedItems array
var feedItem1 = feedItem.createFeedItem("Fizz (Iron III)", "Looking for not terrible player to duo with.", "https://u.gg/", "/images/fizz.png");
var feedItem2 = feedItem.createFeedItem("Mordekaiser (Gold IV)", "I duo.", "https://mobalytics.gg/", "/images/mord.png");
var feedItem3 = feedItem.createFeedItem("Viktor (Silver II)", "I want to duo.", "https://www.mobafire.com/", "/images/better_viktor.png");
allFeedItems.push(feedItem1);
allFeedItems.push(feedItem2);
allFeedItems.push(feedItem3);

//function to get allFeedItems array, GET
exports.getAllFeedItems = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(allFeedItems);
}

//function to save new feedItem to allFeedItems array, POST
exports.saveFeedItem = (req, res) => {
    let newFeedItem = feedItem.createFeedItem(req.body.title, req.body.body, req.body.linkUrl, req.body.imageUrl);
    allFeedItems.push(newFeedItem);
    res.setHeader('Content-Type', 'application/json');
    res.send(allFeedItems);
}

//function to get a single feedItem from allFeedItems array, GET
exports.getFeedItem = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(allFeedItems[req.params.feedItemId]);
}

//function to delete feedItem from allFeedItems array, DELETE
exports.deleteFeedItem = (req, res) => {
    allFeedItems.splice(req.params.feedItemId, 1);
    res.setHeader('Content-Type', 'application/json');
    res.send(allFeedItems);
}

//function to update parts of feedItem from allFeedItems array, PATCH
exports.updateFeedItem = (req, res) => {
    var updatedFeedItem = allFeedItems[req.params.feedItemId];

    console.log(req.body.title);
    if (req.body.title) {
        updatedFeedItem.title = req.body.title;
    }
    if (req.body.body) {
        updatedFeedItem.body = req.body.body;
    }
    if (req.body.linkUrl) {
        updatedFeedItem.linkUrl = req.body.linkUrl;
    }
    if (req.body.imageUrl) {
        updatedFeedItem.imageUrl = req.body.imageUrl;
    }

    allFeedItems[req.params.feedItemId] = updatedFeedItem;

    res.setHeader('Content-Type', 'application/json');
    res.send(allFeedItems[req.params.feedItemId]);
}

//function to replace feedItem from allFeedItems array, PUT
exports.replaceFeedItem = (req, res) => {
    allFeedItems[req.params.feedItemId] = req.body;
    res.setHeader('Content-Type', 'application/json');
    res.send(allFeedItems[req.params.feedItemId]);
}
