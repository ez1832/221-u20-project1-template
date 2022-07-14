/*
 * Check ascii code for spacebar and call goToLocation in global to change URL
 */
function checkKeyPress(e) {
  if (e.keyCode == 32) {
    goToLocation('/feed');
  }
}
//add event listener for keyup with spacebar to go to feed page
window.addEventListener('keyup', checkKeyPress);
//add event listener for mouseup on fade_text object from HTML to go to feed page
document.getElementById('fade_text').addEventListener('mouseup', () => goToLocation('/feed'));
