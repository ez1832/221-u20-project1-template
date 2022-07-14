//importing express
const express = require('express');
const app = express();
//importing bodyParser
const bodyParser = require('body-parser');
//importing feedController and matchController
const feedController = require('./controller/feedController');
const matchController = require('./controller/matchController');
//setting up express and bodyParser
app.use(express.static('client/public'));
app.use(bodyParser.json({type: 'application/json'}));

//setting up path for index page
app.get('/', function(req, res) {
    res.sendFile('index.html', {root: './client/views'});
})

//setting up path for feed page
app.get('/feed', function(req, res) {
    res.sendFile('feed.html', {root: './client/views'});
})

//setting up route for /api/feedItems with GET and POST
app.route('/api/feedItems')
    .get(feedController.getAllFeedItems)
    .post(feedController.saveFeedItem)

//setting up route for /api/feedItems/:feedItemId with GET, DELETE, PATCH, and PUT
app.route('/api/feedItems/:feedItemId')
    .get(feedController.getFeedItem)
    .delete(feedController.deleteFeedItem)
    .patch(feedController.updateFeedItem)
    .put(feedController.replaceFeedItem)

//setting up route for /api/feedItems with GET and POST
app.route('/api/featuredMatches')
    .get(matchController.getAllFeaturedMatches)
    .post(matchController.saveFeaturedMatch)

//setting up route for /api/feedItems/:feedItemId with GET, DELETE, PATCH, and PUT
app.route('/api/featuredMatches/:featuredMatchId')
    .get(matchController.getFeaturedMatch)
    .delete(matchController.deleteFeaturedMatch)
    .patch(matchController.updateFeaturedMatch)
    .put(matchController.replaceFeaturedMatch)

//setting up listener for port 1337
app.listen(1337, () => console.log('Listening on port 1337.'));
