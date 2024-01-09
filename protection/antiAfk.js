var lastActivityTime;
var inactivityLimit = 10000; 

function resetTimer() {lastActivityTime = Date.now();}
export function antiAfk() {
    document.addEventListener('mousemove', resetTimer);
    document.addEventListener('keydown', resetTimer);
    document.addEventListener('scroll', resetTimer);
    var currentTime = Date.now();
    if (currentTime - lastActivityTime > inactivityLimit) {
        return true;
    }
    return false;
}
