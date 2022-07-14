//importing featuredMatch model
const featuredMatch = require('../model/featuredMatch');

//initializing allFeaturedMatches array
var allFeaturedMatches = [];

//creating featuredMatch variables and adding to allFeaturedMatches array
var featuredMatch1 = featuredMatch.createFeaturedMatch("AMP", "TLC", "AMP", "12", "9", "Tahm Kench", "/images/kench.png");
var featuredMatch2 = featuredMatch.createFeaturedMatch("DEO", "YRG", "YRG", "18", "23", "Akali", "/images/akali.png");
var featuredMatch3 = featuredMatch.createFeaturedMatch("FNG", "RGB", "RGB", "6", "7", "Xerath", "/images/xerath.png");
var featuredMatch4 = featuredMatch.createFeaturedMatch("DRG", "PWR", "PWR", "21", "31", "Nilah", "/images/nilah.png");
allFeaturedMatches.push(featuredMatch1);
allFeaturedMatches.push(featuredMatch2);
allFeaturedMatches.push(featuredMatch3);
allFeaturedMatches.push(featuredMatch4);

//function to get allFeaturedMatches array, GET
exports.getAllFeaturedMatches = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(allFeaturedMatches);
}

//function to save new featuredMatch to allFeaturedMatches array, POST
exports.saveFeaturedMatch = (req, res) => {
    let newFeaturedMatch = featuredMatch.createFeaturedMatch(req.body.team1, req.body.team2, req.body.teamWon, req.body.team1Score, req.body.team2Score, req.body.mvpChampion, req.body.team1Score);
    allFeaturedMatches.push(newFeaturedMatch);
    res.setHeader('Content-Type', 'application/json');
    res.send(allFeaturedMatches);
}

//function to get featuredMatch from allFeaturedMatches array, GET
exports.getFeaturedMatch = (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    res.send(allFeaturedMatches[req.params.featuredMatchId]);
}

//function to delete featuredMatch from allFeaturedMatches array, DELETE
exports.deleteFeaturedMatch = (req, res) => {
    allFeaturedMatches.splice(req.params.featuredMatchId, 1);
    res.setHeader('Content-Type', 'application/json');
    res.send(allFeaturedMatches);
}

//function to update parts of featuredMatch from allFeaturedMatches array, PATCH
exports.updateFeaturedMatch = (req, res) => {
    var updatedFeaturedMatch = allFeaturedMatches[req.params.featuredMatchId];

    console.log(req.body.teamWon);
    if (req.body.team1) {
        updatedFeaturedMatch.team1 = req.body.team1;
    }
    if (req.body.team2) {
        updatedFeaturedMatch.team2 = req.body.team2;
    }
    if (req.body.teamWon) {
        updatedFeaturedMatch.teamWon = req.body.teamWon;
    }
    if (req.body.team1Score) {
        updatedFeaturedMatch.team1Score = req.body.team1Score;
    }
    if (req.body.team2Score) {
        updatedFeaturedMatch.team2Score = req.body.team2Score;
    }
    if (req.body.mvpChampion) {
        updatedFeaturedMatch.mvpChampion = req.body.mvpChampion;
    }
    if (req.body.imageUrl) {
        updatedFeaturedMatch.imageUrl = req.body.imageUrl;
    }

    allFeaturedMatches[req.params.featuredMatchId] = updatedFeaturedMatch;

    res.setHeader('Content-Type', 'application/json');
    res.send(allFeaturedMatches[req.params.featuredMatchId]);
}

//function to replace featuredMatch from allFeaturedMatches array, PUT
exports.replaceFeaturedMatch = (req, res) => {
    allFeaturedMatches[req.params.featuredMatchId] = req.body;
    res.setHeader('Content-Type', 'application/json');
    res.send(allFeaturedMatches[req.params.featuredMatchId]);
}
