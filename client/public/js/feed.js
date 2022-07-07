document.getElementById('portal_button').addEventListener('mouseup', () => goToLocation('https://www.leagueoflegends.com/'));
function feedItem(title, body, linkUrl, imageUrl) {
    this.title = title;
    this.body = body;
    this.linkUrl = linkUrl;
    this.imageUrl = imageUrl;
}

var currentStories = [];
currentStories[0] = new feedItem("Fizz (Iron III)", "Looking for not terrible player to duo with.", "request1", "/images/fizz.png");
currentStories[1] = new feedItem("Mordekaiser (Gold IV)", "I duo.", "request2", "/images/mord.png");
currentStories[2] = new feedItem("Viktor (Silver II)", "I want to duo.", "request3", "/images/better_viktor.png");

var requestNumber;

function displayItem(feedItem) {
    document.getElementById('newsfeed').innerHTML += "<div><b>" + feedItem.title + "</b></div>" + "<div>" + feedItem.body + "</div>" + "<div><a href = " + feedItem.linkUrl + ">Request " + requestNumber + "</a></div> <div><img src = " + feedItem.imageUrl + " class = \"feedImage\"></div><hr>";
}

window.addEventListener('load', () => {
    for (let i = 0; i < currentStories.length; i++) {
        requestNumber = i + 1;
        displayItem(currentStories[i]);
    }
});
