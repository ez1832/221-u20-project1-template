//define featuredMatch object
function featuredMatch(team1, team2, teamWon, team1Score, team2Score, mvpChampion, imageUrl) {
    this.team1 = team1;
    this.team2 = team2;
    this.teamWon = teamWon;
    this.team1Score = team1Score;
    this.team2Score = team2Score;
    this.mvpChampion = mvpChampion;
    this.imageUrl = imageUrl;
}

//function to create new FeaturedMatch
exports.createFeaturedMatch = (team1, team2, teamWon, team1Score, team2Score, mvpChampion, imageUrl) => {
    return new featuredMatch(team1, team2, teamWon, team1Score, team2Score, mvpChampion, imageUrl);
}
