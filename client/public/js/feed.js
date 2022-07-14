//add event listener for mouseup on portal_button object from HTML to go to new website
document.getElementById('portal_button').addEventListener('mouseup', () => goToLocation('https://www.leagueoflegends.com/'));

//creates requestNumber variable
var requestNumber;

//function to display parts of a feedItem in newsfeed on feed page
function displayItem(feedItem) {
    document.getElementById('newsfeed').innerHTML += "<div><b>" + feedItem.title + "</b></div>" + "<div>" + feedItem.body + "</div>" + "<div><a href = " + feedItem.linkUrl + ">Request " + requestNumber + "</a></div> <div><img src = " + feedItem.imageUrl + " class = \"feedImage\"></div><hr>";
}

//add event listener for load of page to set requestNumber and display feedItems from allFeedItems array
window.addEventListener('load', () => {
    for (let i = 0; i < currentStories.length; i++) {
        requestNumber = i + 1;
        displayItem(currentStories[i]);
    }
});
